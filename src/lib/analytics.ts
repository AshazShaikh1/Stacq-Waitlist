import { createClient } from '@supabase/supabase-js';

// Initialize Mixpanel (optional)
// import mixpanel from 'mixpanel-browser'; 

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function checkRateLimit(ip: string) {
  // Simple DB-based rate limiting (5 requests per hour per IP)
  // Delete old logs first to keep table small
  await supabase
    .from('admin_actions')
    .delete()
    .lt('created_at', new Date(Date.now() - 3600 * 1000).toISOString());

  const { count } = await supabase
    .from('admin_actions')
    .select('id', { count: 'exact' })
    .eq('action', 'signup_attempt')
    .eq('admin_user', ip) // Storing IP in admin_user column for hacky MVP re-use
    .gt('created_at', new Date(Date.now() - 3600 * 1000).toISOString());

  return (count || 0) < 5;
}

export async function trackEvent(eventName: string, props: any) {
  // 1. Log to DB
  await supabase.from('admin_actions').insert({
    action: `event:${eventName}`,
    payload: props
  });

  // 2. Log to Mixpanel (if you add the SDK later)
  // if (process.env.NEXT_PUBLIC_MIXPANEL_TOKEN) {
  //   mixpanel.track(eventName, props);
  // }
}