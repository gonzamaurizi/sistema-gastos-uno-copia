import { useContext } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../App";
import { UserAuth, useAuthStore } from "../../index";
// `v` se importa directo (y no desde index) porque se usa al definir los estilos,
// y a través de index todavía podría no estar cargado en ese momento.
import { v } from "../../styles/variables";

/**
 * Menú lateral de la aplicación.
 *
 * Props:
 *  - collapsed:      true cuando está en modo angosto (solo íconos), en escritorio
 *  - onToggle:       alterna entre ancho completo y angosto
 *  - mobileOpen:     en pantallas chicas, indica si el menú está desplegado
 *  - onCloseMobile:  cierra el menú en pantallas chicas
 */
export function Sidebar({ collapsed, onToggle, mobileOpen, onCloseMobile }) {
  const { user } = UserAuth();
  const { signOut } = useAuthStore();
  const { theme, setTheme } = useContext(ThemeContext);

  // Se arma dentro del componente porque `v` se resuelve recién al renderizar.
  const secciones = [
    { to: "/", titulo: "Inicio", icono: <v.iconoinicio />, exacto: true },
    { to: "/movimientos", titulo: "Movimientos", icono: <v.iconomovimientos /> },
    { to: "/categorias", titulo: "Categorías", icono: <v.iconocategorias /> },
    { to: "/reportes", titulo: "Reportes", icono: <v.iconoreportes /> },
    { to: "/configuracion", titulo: "Configuración", icono: <v.iconoSettings /> },
  ];

  const esOscuro = theme === "dark";
  const nombre = user?.full_name || user?.name || "Usuario";

  return (
    <>
      <Overlay $visible={mobileOpen} onClick={onCloseMobile} aria-hidden="true" />

      <Container
        $collapsed={collapsed}
        $mobileOpen={mobileOpen}
        aria-label="Menú principal"
      >
        <div className="header">
          <img className="logo" src={v.logo} alt="Logo de Gastos - UNO" />
          <span className="marca">Gastos - UNO</span>

          <button
            type="button"
            className="btnIcono btnPlegar"
            onClick={onToggle}
            aria-label={collapsed ? "Expandir menú" : "Contraer menú"}
            title={collapsed ? "Expandir menú" : "Contraer menú"}
          >
            {collapsed ? <v.icondesplegar /> : <v.iconoplegar />}
          </button>

          <button
            type="button"
            className="btnIcono btnCerrarMobile"
            onClick={onCloseMobile}
            aria-label="Cerrar menú"
          >
            <v.iconocerrar />
          </button>
        </div>

        <nav className="nav">
          {secciones.map((s) => (
            <NavLink
              key={s.to}
              to={s.to}
              end={s.exacto}
              className="link"
              title={collapsed ? s.titulo : undefined}
              onClick={onCloseMobile}
            >
              <span className="icono">{s.icono}</span>
              <span className="texto">{s.titulo}</span>
            </NavLink>
          ))}
        </nav>

        <div className="pie">
          <button
            type="button"
            className="link accion"
            onClick={() => setTheme(esOscuro ? "light" : "dark")}
            title={collapsed ? "Cambiar tema" : undefined}
          >
            <span className="icono">
              {esOscuro ? <v.iconosol /> : <v.iconoluna />}
            </span>
            <span className="texto">{esOscuro ? "Tema claro" : "Tema oscuro"}</span>
          </button>

          <div className="usuario">
            {user?.picture ? (
              <img
                className="avatar"
                src={user.picture}
                alt={`Foto de ${nombre}`}
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="avatar avatarVacio">
                <v.iconoUser />
              </span>
            )}
            <span className="nombre" title={nombre}>
              {nombre}
            </span>
          </div>

          <button
            type="button"
            className="link accion salir"
            onClick={signOut}
            title={collapsed ? "Cerrar sesión" : undefined}
          >
            <span className="icono">
              <v.iconoCerrarSesion />
            </span>
            <span className="texto">Cerrar sesión</span>
          </button>
        </div>
      </Container>
    </>
  );
}

const Overlay = styled.div`
  display: none;

  @media (max-width: 48em) {
    display: ${(props) => (props.$visible ? "block" : "none")};
    position: fixed;
    inset: 0;
    z-index: 90;
    background: rgba(0, 0, 0, 0.5);
  }
`;

const Container = styled.aside`
  position: sticky;
  top: 0;
  height: 100vh;
  height: 100dvh;
  flex-shrink: 0;
  width: ${(props) =>
    props.$collapsed ? v.sidebarWidthCollapsed : v.sidebarWidth};
  padding: ${v.mdSpacing};

  display: flex;
  flex-direction: column;
  gap: ${v.mdSpacing};
  overflow-x: hidden;
  overflow-y: auto;

  background: ${(props) => props.theme.bg2};
  color: ${(props) => props.theme.text};
  border-right: 1px solid ${(props) => props.theme.bg4};
  transition: width 0.25s ease;

  .header {
    display: flex;
    align-items: center;
    gap: 12px;
    min-height: 44px;
  }

  .logo {
    width: 40px;
    height: 40px;
    flex-shrink: 0;
    object-fit: contain;
  }

  .marca {
    flex: 1;
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 700;
    white-space: nowrap;
  }

  .btnIcono {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 36px;
    height: 36px;
    flex-shrink: 0;
    border: none;
    border-radius: ${v.borderRadius};
    background: transparent;
    color: ${(props) => props.theme.text};
    font-size: 1.3em;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.bg4};
    }
  }

  .btnCerrarMobile {
    display: none;
  }

  .nav {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .link {
    display: flex;
    align-items: center;
    gap: 14px;
    width: 100%;
    min-height: 44px;
    padding: 0 12px;

    border: none;
    border-radius: ${v.borderRadius};
    background: transparent;
    color: ${(props) => props.theme.colorSubtitle};
    font-size: ${(props) => props.theme.fontmd};
    font-weight: 500;
    text-decoration: none;
    white-space: nowrap;
    cursor: pointer;
    transition: background 0.15s ease, color 0.15s ease;

    &:hover {
      background: ${(props) => props.theme.bg4};
      color: ${(props) => props.theme.text};
    }

    &:focus-visible {
      outline: 2px solid ${(props) => props.theme.primary};
      outline-offset: 2px;
    }

    &.active {
      background: ${(props) => props.theme.bg4};
      color: ${(props) => props.theme.primary};
      font-weight: 600;
      box-shadow: inset 3px 0 0 ${(props) => props.theme.primary};
    }
  }

  .icono {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    font-size: ${(props) => props.theme.sizeoficon};
  }

  .pie {
    display: flex;
    flex-direction: column;
    gap: 4px;
    padding-top: ${v.mdSpacing};
    border-top: 1px solid ${(props) => props.theme.bg4};
  }

  .salir:hover {
    color: ${v.colorError};
  }

  .usuario {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 8px 6px;
    min-height: 48px;
  }

  .avatar {
    width: 32px;
    height: 32px;
    flex-shrink: 0;
    border-radius: 50%;
    object-fit: cover;
  }

  .avatarVacio {
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${(props) => props.theme.bg4};
    font-size: 1.4em;
  }

  .nombre {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-size: ${(props) => props.theme.fontsm};
    font-weight: 600;
  }

  /* Modo angosto (escritorio): solo íconos */
  ${(props) =>
    props.$collapsed &&
    `
    .marca,
    .texto,
    .nombre {
      display: none;
    }

    .header {
      flex-direction: column;
      justify-content: center;
      gap: 8px;
    }

    .link {
      justify-content: center;
      padding: 0;
    }

    .usuario {
      justify-content: center;
    }
  `}

  /* Pantallas chicas: el menú se vuelve un panel que se desliza desde la izquierda */
  @media (max-width: 48em) {
    position: fixed;
    top: 0;
    left: 0;
    z-index: 100;
    width: min(${v.sidebarWidth}, 85vw);
    transform: translateX(${(props) => (props.$mobileOpen ? "0" : "-100%")});
    transition: transform 0.25s ease;

    .btnPlegar {
      display: none;
    }

    .btnCerrarMobile {
      display: flex;
    }

    /* El modo angosto no aplica en celulares: siempre se ve completo */
    .marca,
    .texto,
    .nombre {
      display: block;
    }

    .header {
      flex-direction: row;
    }

    .link {
      justify-content: flex-start;
      padding: 0 12px;
    }

    .usuario {
      justify-content: flex-start;
    }
  }
`;
