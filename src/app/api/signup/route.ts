import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { email, name } = await req.json();

    // 1. Check if email exists
    const { data: existing } = await supabase
      .from('waitlist_users')
      .select('id')
      .eq('email', email)
      .single();

    if (existing) {
      // Already registered - Idempotent success
      return NextResponse.json({ success: true });
    }

    // 2. Insert User (New Signup)
    const { error: userError } = await supabase
      .from('waitlist_users')
      .insert({ email, name })
      .select()
      .single();

    if (userError) throw userError;

    // Creator logic removed as per request.

    return NextResponse.json({ success: true });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}