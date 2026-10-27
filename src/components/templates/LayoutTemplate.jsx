import { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet, useLocation } from "react-router-dom";
import { Sidebar } from "../organismos/Sidebar";
import { v } from "../../styles/variables";

const CLAVE_PLEGADO = "sidebarPlegado";

function leerPlegado() {
  try {
    return localStorage.getItem(CLAVE_PLEGADO) === "true";
  } catch {
    return false;
  }
}

/**
 * Estructura de las pantallas privadas: sidebar a la izquierda y,
 * a la derecha, la página que corresponda a la ruta (<Outlet />).
 */
export function Layout() {
  const [collapsed, setCollapsed] = useState(leerPlegado);
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();

  // Recuerda si el usuario dejó el menú contraído.
  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_PLEGADO, String(collapsed));
    } catch {
      // Si el navegador no permite guardar, simplemente no se recuerda.
    }
  }, [collapsed]);

  // En celulares, el menú se cierra solo al navegar a otra sección.
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <Shell>
      <Sidebar
        collapsed={collapsed}
        onToggle={() => setCollapsed((c) => !c)}
        mobileOpen={mobileOpen}
        onCloseMobile={() => setMobileOpen(false)}
      />

      <Content>
        <TopBar>
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Abrir menú"
          >
            <v.iconomenu />
          </button>
          <span>Gastos - UNO</span>
        </TopBar>

        <Main>
          <Outlet />
        </Main>
      </Content>
    </Shell>
  );
}

const Shell = styled.div`
  display: flex;
  min-height: 100vh;
  background: ${(props) => props.theme.bg};
  color: ${(props) => props.theme.text};
`;

const Content = styled.div`
  flex: 1;
  min-width: 0;
  display: flex;
  flex-direction: column;
`;

/* Barra superior: solo se ve en pantallas chicas, para abrir el menú */
const TopBar = styled.header`
  display: none;

  @media (max-width: 48em) {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: ${v.smSpacing} ${v.mdSpacing};
    background: ${(props) => props.theme.bg2};
    border-bottom: 1px solid ${(props) => props.theme.bg4};

    button {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      border: none;
      border-radius: ${v.borderRadius};
      background: transparent;
      color: ${(props) => props.theme.text};
      font-size: 1.5em;
      cursor: pointer;

      &:hover {
        background: ${(props) => props.theme.bg4};
      }
    }

    span {
      font-weight: 700;
    }
  }
`;

const Main = styled.main`
  flex: 1;
  padding: ${v.lgSpacing};
`;
