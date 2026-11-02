import { v } from "../styles/variables";

// Tarjetas del carrusel de la pantalla de bienvenida.
// Para agregar o quitar una tarjeta alcanza con modificar esta lista.
//  - titulo / descripcion: textos que se muestran en la tarjeta
//  - to:      ruta a la que lleva la tarjeta (la misma que usa el sidebar)
//  - icono:   ícono (componente de react-icons, definido en variables.jsx)
//  - colores: los dos colores del degradé de fondo
export const CarouselData = [
  {
    titulo: "Categorías",
    to: "/categorias",
    descripcion: "Organizá tus gastos e ingresos con categorías a tu medida.",
    icono: v.iconopie,
    colores: ["#7E3FD1", "#4B1FA3"],
  },
  {
    titulo: "Movimientos",
    to: "/movimientos",
    descripcion: "Registrá cada ingreso y cada gasto en pocos pasos.",
    icono: v.balance,
    colores: ["#2B7DE9", "#1B4FA8"],
  },
  {
    titulo: "Informes",
    to: "/informes",
    descripcion: "Mirá en qué se va tu plata, mes a mes.",
    icono: v.iconobars,
    colores: ["#1FA37A", "#0F6E52"],
  },
  {
    titulo: "Dashboard",
    to: "/dashboard",
    descripcion: "Un resumen de tus finanzas, de un vistazo.",
    icono: v.iconolineal,
    colores: ["#E5436B", "#A3174A"],
  },
  {
    titulo: "Configuración",
    to: "/configurar",
    descripcion: "Elegí tu tema y tu moneda.",
    icono: v.iconoSettings,
    colores: ["#D9731A", "#9A4A0A"],
  },
];
