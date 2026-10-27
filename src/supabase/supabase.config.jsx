import { createClient } from '@supabase/supabase-js';
// VERSIÓN DE PRUEBA: si no hay claves en el archivo .env, usa valores de relleno
// para que la app pueda abrirse igual (no se conecta a ninguna base real).
export const supabase = createClient(
    import.meta.env.VITE_APP_SUPABASE_URL || 'https://sin-claves.supabase.co',
    import.meta.env.VITE_APP_SUPABASE_ANON_KEY || 'sin-claves'
);
