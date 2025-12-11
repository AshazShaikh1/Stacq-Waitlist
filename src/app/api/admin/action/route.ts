import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  // 1. Security Check
  const adminKey = req.headers.get('x-admin-key');
  if (adminKey !== process.env.ADMIN_ACCESS_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  const { userId, action } = await req.json(); // action: 'approve', 'reject', 'block', 'unblock'

  // 2. Fetch current role first to determine unblock status
  const { data: currentUser } = await supabase
    .from('waitlist_users')
    .select('role')
    .eq('id', userId)
    .single();

  if (!currentUser) return NextResponse.json({ error: 'User not found' }, { status: 404 });

  // 3. Determine New Status
  let newStatus = '';
  if (action === 'approve') newStatus = 'approved';
  if (action === 'reject') newStatus = 'rejected';
  if (action === 'block') newStatus = 'blocked';
  
  // UNBLOCK LOGIC: Restore default state
  if (action === 'unblock') {
    newStatus = currentUser.role === 'creator' ? 'pending' : 'approved';
  }

  // 4. Update Status in DB
  const { data: user, error } = await supabase
    .from('waitlist_users')
    .update({ status: newStatus })
    .eq('id', userId)
    .select()
    .single();

  if (error) return NextResponse.json({ error: error.message }, { status: 500 });

  // 5. Simulate Email (Only for approvals)
  if (action === 'approve' && user.role === 'creator') {
    console.log(`📧 [EMAIL SENT] To: ${user.email} | Subject: You are approved!`);
  }

  return NextResponse.json({ success: true, status: newStatus });
}