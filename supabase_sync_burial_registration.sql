-- Automatically link a signed-in member to one Burial Society registry row
-- using the phone number already stored on their private members profile.
-- Run once in Supabase SQL Editor.

create or replace function public.sync_burial_society_registration()
returns jsonb
language plpgsql
security definer
set search_path = public
as $$
declare
  member_row public.members%rowtype;
  registry_row public.burial_society_member_registry%rowtype;
  normalized_phone text;
  match_count integer;
begin
  if auth.uid() is null then
    raise exception 'Authentication required';
  end if;

  select * into member_row
  from public.members
  where auth_user_id = auth.uid()
  limit 1;

  normalized_phone := regexp_replace(coalesce(member_row.phone, ''), '[^0-9]', '', 'g');
  if normalized_phone = '' then
    return jsonb_build_object('registered', false);
  end if;

  select count(*) into match_count
  from public.burial_society_member_registry
  where regexp_replace(coalesce(phone, ''), '[^0-9]', '', 'g') = normalized_phone;

  if match_count <> 1 then
    return jsonb_build_object('registered', false, 'reason', case when match_count = 0 then 'no_match' else 'multiple_matches' end);
  end if;

  select * into registry_row
  from public.burial_society_member_registry
  where regexp_replace(coalesce(phone, ''), '[^0-9]', '', 'g') = normalized_phone
  limit 1;

  if registry_row.linked and registry_row.linked_auth_user_id is distinct from auth.uid() then
    return jsonb_build_object('registered', false, 'reason', 'already_linked');
  end if;

  update public.burial_society_member_registry
  set linked = true,
      linked_member_id = member_row.id,
      linked_auth_user_id = auth.uid(),
      updated_at = now()
  where id = registry_row.id;

  update public.members
  set burial_society_registered = true,
      updated_at = now()
  where auth_user_id = auth.uid();

  return jsonb_build_object('registered', true, 'registry_id', registry_row.id);
end;
$$;

revoke all on function public.sync_burial_society_registration() from public;
grant execute on function public.sync_burial_society_registration() to authenticated;
