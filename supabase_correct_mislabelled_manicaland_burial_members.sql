-- The former Mashonaland West file was actually Manicaland data.
-- Run this once before supabase_manicaland_burial_members.sql if the old
-- mashwest-burial-* rows were already imported.

delete from public.burial_society_member_registry
where id like 'mashwest-burial-%';
