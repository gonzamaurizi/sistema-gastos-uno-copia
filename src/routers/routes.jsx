import {Routes,Route,BrowserRouter} from "react-router-dom";
import {Login,Home, Configuracion, Layout, Proximamente, ProtectedRoute, UserAuth} from "../index"
export function MyRoutes() {
    const {user} = UserAuth();
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/categorias" element={<Proximamente titulo="Categorías" />}/>
                    <Route path="/movimientos" element={<Proximamente titulo="Movimientos" />}/>
                    <Route path="/informes" element={<Proximamente titulo="Informes" />}/>
                    <Route path="/dashboard" element={<Proximamente titulo="Dashboard" />}/>
                    <Route path="/configurar" element={<Configuracion />}/>
                    <Route path="/acercade" element={<Proximamente titulo="Acerca de" />}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    );
}
