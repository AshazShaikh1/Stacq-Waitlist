import { createClient } from '@supabase/supabase-js';

// Use environment variables or fallback for safety (though env vars are required for auth)
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Helper to create a client component instance if using the SSR package in future
// For this simple waitlist, the basic js client is sufficient.
export const createBrowserClient = () => createClient(supabaseUrl, supabaseAnonKey);