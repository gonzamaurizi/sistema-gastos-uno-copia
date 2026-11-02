import { useEffect, useState } from "react";
import styled from "styled-components";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../organismos/sidebar/Sidebar";
import { Menuambur } from "../organismos/Menuambur";
import { Device } from "../../styles/breakpoints";
import { v } from "../../styles/variables";

const CLAVE_ABIERTO = "sidebarAbierto";

function leerAbierto() {
  try {
    return localStorage.getItem(CLAVE_ABIERTO) === "true";
  } catch {
    return false;
  }
}

/**
 * Estructura de las pantallas privadas (después de iniciar sesión):
 *  - escritorio/tablet: sidebar fijo a la izquierda y la página a la derecha
 *  - celular: botón de menú arriba y la página debajo
 */
export function Layout() {
  const [sidebarOpen, setSidebarOpen] = useState(leerAbierto);

  // Recuerda si el usuario dejó el sidebar abierto o cerrado.
  useEffect(() => {
    try {
      localStorage.setItem(CLAVE_ABIERTO, String(sidebarOpen));
    } catch {
      // Si el navegador no permite guardar, simplemente no se recuerda.
    }
  }, [sidebarOpen]);

  return (
    <Container className={sidebarOpen ? "active" : ""}>
      <div className="ContentSidebar">
        <Sidebar
          state={sidebarOpen}
          setState={() => setSidebarOpen(!sidebarOpen)}
        />
      </div>

      <div className="ContentMenuambur">
        <Menuambur />
      </div>

      <Containerbody>
        <Outlet />
      </Containerbody>
    </Container>
  );
}

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-height: 100vh;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  transition: all 0.2s ease-in-out;

  .ContentSidebar {
    display: none;
  }

  .ContentMenuambur {
    display: block;
    padding: ${() => v.smSpacing} ${() => v.mdSpacing};
    border-bottom: 1px solid ${({ theme }) => theme.bg4};
  }

  @media ${Device.tablet} {
    grid-template-columns: 65px 1fr;

    &.active {
      grid-template-columns: 220px 1fr;
    }

    .ContentSidebar {
      display: initial;
    }

    .ContentMenuambur {
      display: none;
    }
  }
`;

const Containerbody = styled.div`
  grid-column: 1;
  width: 100%;
  min-width: 0;

  @media ${Device.tablet} {
    grid-column: 2;
  }
`;
