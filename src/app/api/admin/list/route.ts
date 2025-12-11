import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function GET(req: NextRequest) {
  // 1. Security Check
  const adminKey = req.headers.get('x-admin-key');
  if (adminKey !== process.env.ADMIN_ACCESS_KEY) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  // 2. Fetch Users AND their Creator Application details
  // We use creator_applications(*) to get all fields including 'proof_content'
  const { data: users, error } = await supabase
    .from('waitlist_users')
    .select(`
      *,
      creator_applications (*)
    `)
    .order('created_at', { ascending: false });

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ users });
}