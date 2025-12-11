// src/lib/email.ts
// Email sending is now handled natively by Supabase Auth (Magic Links)
export async function sendVerificationEmail(email: string, token: string) {
  // No-op: Supabase handles this now via signInWithOtp
  console.log('Supabase Auth will handle email for:', email);
}

export async function sendInviteEmail(email: string, name: string) {
  // You can implement this later if needed, or send manually for MVP
  console.log('[Manual Action Needed] Send invite to:', email);
}