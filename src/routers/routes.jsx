import {Routes,Route,BrowserRouter} from "react-router-dom";
import {Login,Home, Layout, Proximamente, ProtectedRoute, UserAuth} from "../index"
export function MyRoutes() {
    const {user} = UserAuth();
    return (
    <BrowserRouter>
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route element={<ProtectedRoute user={user} redirectTo="/login" />}>
                <Route element={<Layout />}>
                    <Route path="/" element={<Home />}/>
                    <Route path="/movimientos" element={<Proximamente titulo="Movimientos" />}/>
                    <Route path="/categorias" element={<Proximamente titulo="Categorías" />}/>
                    <Route path="/reportes" element={<Proximamente titulo="Reportes" />}/>
                    <Route path="/configuracion" element={<Proximamente titulo="Configuración" />}/>
                </Route>
            </Route>
        </Routes>
    </BrowserRouter>
    );
}
