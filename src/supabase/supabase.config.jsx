import { createClient } from '@supabase/supabase-js';
export const supabase = createClient(
    import.meta.env.VITE_APP_SUPABASE_URL || "https://sin-claves.supabase.co",
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY || "sin-claves"
);
