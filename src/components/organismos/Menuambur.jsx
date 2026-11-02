import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { v } from "../../styles/variables";
import { LinksArray, SecondarylinksArray } from "../../utils/dataEstatica";

/**
 * Menú "hamburguesa" para pantallas chicas (celulares), donde el sidebar no entra.
 * Muestra los mismos links que el sidebar en un panel desplegable.
 */
export function Menuambur() {
  const [abierto, setAbierto] = useState(false);
  const links = [...LinksArray, ...SecondarylinksArray];

  return (
    <Container>
      <button
        type="button"
        className="btnMenu"
        onClick={() => setAbierto(!abierto)}
        aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={abierto}
      >
        <v.iconomenu />
      </button>

      {abierto && (
        <nav className="panel" aria-label="Menú principal">
          {links.map(({ icon, label, to }) => (
            <NavLink
              key={label}
              to={to}
              onClick={() => setAbierto(false)}
              className={({ isActive }) => `link${isActive ? ` active` : ``}`}
            >
              <span className="icono">{icon}</span>
              <span>{label}</span>
            </NavLink>
          ))}
        </nav>
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;

  .btnMenu {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 44px;
    height: 44px;
    border: none;
    border-radius: ${() => v.borderRadius};
    background: transparent;
    color: ${(props) => props.theme.text};
    font-size: 1.6em;
    cursor: pointer;

    &:hover {
      background: ${(props) => props.theme.bg4};
    }
  }

  .panel {
    position: absolute;
    top: 100%;
    left: 0;
    z-index: 10;
    min-width: 220px;
    padding: ${() => v.smSpacing};
    display: flex;
    flex-direction: column;
    gap: 2px;
    background: ${(props) => props.theme.bg2};
    border: 1px solid ${(props) => props.theme.bg4};
    border-radius: ${() => v.borderRadius};
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.25);
  }

  .link {
    display: flex;
    align-items: center;
    gap: 12px;
    padding: 12px;
    border-radius: ${() => v.borderRadius};
    color: ${(props) => props.theme.text};
    text-decoration: none;

    &:hover {
      background: ${(props) => props.theme.bg4};
    }

    &.active {
      color: ${(props) => props.theme.bg5};
      font-weight: 600;
    }
  }

  .icono {
    display: flex;
    font-size: 1.3em;
  }
`;
