import { createContext, useContext, useEffect, useState } from "react";
import { supabase, InsertarUsuarios } from "../index";
const AuthContext = createContext();

// VERSIÓN DE PRUEBA: no pide iniciar sesión y usa un usuario de ejemplo,
// solo para poder ver las pantallas. NO va en la versión real del proyecto.
const MODO_PREVIEW = true;
const USUARIO_DE_PRUEBA = { full_name: "Usuario de prueba", name: "Usuario de prueba", picture: "" };
export const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState(MODO_PREVIEW ? USUARIO_DE_PRUEBA : []);
    useEffect(() => {
        if (MODO_PREVIEW) return;
        const { data: authListener } = supabase.auth.onAuthStateChange(
            async (event, session) => {
                if(session == null) {
                    setUser(null);
                } else {
                    setUser(session?.user.user_metadata);
                    insertarUsuarios(session?.user.user_metadata,session?.user.id);
                    console.log("event", event);
                    console.log("session", session?.user.user_metadata
);
                }
            }
        );
        return () => {
            authListener.subscription;
        };
    }, []);
    const insertarUsuarios = async (dataProvider, idAuthSupabase) => {
        const p = {
            nombres: dataProvider.name,
            foto: dataProvider.picture,
            idauth_supabase: idAuthSupabase,
        };
        await InsertarUsuarios(p);
    };
    return (
        <AuthContext.Provider value={{ user}}>{children}</AuthContext.Provider>
    );
};
export const UserAuth =()=>{
    return useContext(AuthContext);
}