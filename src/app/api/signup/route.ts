import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
  try {
    const { email, name, role, creatorData } = await req.json();

    // 1. Check if email exists
    const { data: existing } = await supabase
      .from('waitlist_users')
      .select('id, role, status')
      .eq('email', email)
      .single();

    if (existing) {
      // CASE A: Blocked User -> 403 Forbidden
      if (existing.status === 'blocked') {
        return NextResponse.json({ error: 'Access denied.' }, { status: 403 });
      }

      // CASE B: Rejected User -> Return specific rejected status so frontend knows
      // We don't want to show "Success" for rejected users
      if (existing.status === 'rejected') {
         return NextResponse.json({ 
           success: true, 
           status: 'rejected', 
           message: 'Application previously rejected' 
         });
      }

      // CASE C: Already Approved/Pending -> Idempotent success
      return NextResponse.json({ success: true, status: existing.status, role: existing.role });
    }

    // 2. Insert User (New Signup)
    const initialStatus = role === 'user' ? 'approved' : 'pending';

    const { data: newUser, error: userError } = await supabase
      .from('waitlist_users')
      .insert({ email, name, role, status: initialStatus })
      .select()
      .single();

    if (userError) throw userError;

    // 3. Insert Creator Data
    if (role === 'creator' && creatorData) {
      await supabase.from('creator_applications').insert({
        user_id: newUser.id,
        social_link: creatorData.socialLink,
        niche: creatorData.niche,
        audience_size: creatorData.audienceSize,
        proof_content: creatorData.proof 
      });
    }

    return NextResponse.json({ success: true, status: initialStatus });

  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}