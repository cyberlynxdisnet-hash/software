select table_name, column_name, data_type
from information_schema.columns
where table_schema = 'public'
  and table_name in ('branches', 'members', 'events', 'portal_feedback', 'positions', 'activity_logs', 'media_tasks', 'media_assets', 'event_rsvps')
order by table_name, ordinal_position;
