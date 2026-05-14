import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

console.log('🔧 SUPABASE INITIALIZATION');
console.log('URL env var exists:', !!supabaseUrl);
console.log('Key env var exists:', !!supabaseAnonKey);

if (typeof window !== 'undefined') {
  // Browser side - log details
  console.log('✅ Supabase URL:', supabaseUrl || 'UNDEFINED ❌');
  console.log('✅ Supabase Key first 30 chars:', supabaseAnonKey ? supabaseAnonKey.substring(0, 30) + '...' : 'UNDEFINED ❌');
}

if (!supabaseUrl || !supabaseAnonKey) {
  console.error('❌ CRITICAL: Missing Supabase environment variables!');
  throw new Error('Missing Supabase environment variables in .env.local:\n- NEXT_PUBLIC_SUPABASE_URL\n- NEXT_PUBLIC_SUPABASE_ANON_KEY');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

console.log('✅ Supabase client created successfully');

// Verify connection on init
export async function verifySupabaseConnection() {
  try {
    const { data, error } = await supabase.from('applications').select('count()', { count: 'exact', head: true });
    if (error) {
      console.warn('⚠️  Could not verify table (might not exist yet):', error.message);
      return false;
    }
    console.log('✅ Supabase connection verified - "applications" table exists');
    return true;
  } catch (err) {
    console.warn('⚠️  Verification check failed:', err);
    return false;
  }
}
