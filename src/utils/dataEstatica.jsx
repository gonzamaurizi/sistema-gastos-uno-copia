import { v } from "../styles/variables";
import {
  AiOutlineHome,
  AiOutlineApartment,
  AiOutlineSetting,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { MdOutlineAnalytics } from "react-icons/md";
import { RiDashboard3Line } from "react-icons/ri";

// Opciones del menú que se abre al tocar la foto del usuario en la cabecera.
// "tipo" identifica qué hace cada una (ver DataUser.jsx).
export const DesplegableUser = [
  {
    text: "Mi perfil",
    icono: v.iconoUser,
    tipo: "miperfil",
  },
  {
    text: "Configuración",
    icono: v.iconoSettings,
    tipo: "configuracion",
  },
  {
    text: "Cerrar sesión",
    icono: v.iconoCerrarSesion,
    tipo: "cerrarsesion",
  },
];

// Datos del sidebar. Para agregar o quitar una sección del menú
// alcanza con modificar estas listas (y crear su ruta en routes.jsx).

// Links principales
export const LinksArray = [
  {
    label: "Home",
    icon: <AiOutlineHome />,
    to: "/",
  },
  {
    label: "Categorías",
    icon: <MdOutlineAnalytics />,
    to: "/categorias",
  },
  {
    label: "Movimientos",
    icon: <AiOutlineApartment />,
    to: "/movimientos",
  },
  {
    label: "Informes",
    icon: <MdOutlineAnalytics />,
    to: "/informes",
  },
  {
    label: "Dashboard",
    icon: <RiDashboard3Line />,
    to: "/dashboard",
  },
];

// Links secundarios (van debajo del separador)
export const SecondarylinksArray = [
  {
    label: "Configuración",
    icon: <AiOutlineSetting />,
    to: "/configurar",
  },
  {
    label: "Acerca de",
    icon: <AiOutlineInfoCircle />,
    to: "/acercade",
  },
];
