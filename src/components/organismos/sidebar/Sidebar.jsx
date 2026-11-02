import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { v } from "../../../styles/variables";
import { LinksArray, SecondarylinksArray } from "../../../utils/dataEstatica";
import { SidebarCard } from "./SidebarCard";

/**
 * Menú lateral (escritorio y tablet).
 *  - state:    true cuando el menú está abierto (220px), false cuando está cerrado (65px, solo íconos)
 *  - setState: función que abre o cierra el menú
 */
export function Sidebar({ state, setState }) {
  return (
    <Main $isOpen={state}>
      <button
        type="button"
        className="Sidebarbutton"
        onClick={setState}
        aria-label={state ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={state}
      >
        {<v.iconoflechaderecha />}
      </button>

      <Container
        $isOpen={state}
        className={state ? "active" : ""}
        aria-label="Menú principal"
      >
        <div className="Logocontent">
          <div className="imgcontent">
            <img src={v.logo} alt="Logo de Gastos - UNO" />
          </div>
          <h2>Gastos - UNO</h2>
        </div>

        <ListaLinks links={LinksArray} abierto={state} />
        <Divider />
        <ListaLinks links={SecondarylinksArray} abierto={state} />
        <Divider />

        {state && <SidebarCard />}
      </Container>
    </Main>
  );
}

// Dibuja una lista de links (la usan los principales y los secundarios).
function ListaLinks({ links, abierto }) {
  return links.map(({ icon, label, to }) => (
    <div
      className={abierto ? "LinkContainer active" : "LinkContainer"}
      key={label}
    >
      <NavLink
        to={to}
        title={abierto ? undefined : label}
        className={({ isActive }) => `Links${isActive ? ` active` : ``}`}
      >
        <div className="Linkicon">{icon}</div>
        <span className={abierto ? "label_ver" : "label_oculto"}>{label}</span>
      </NavLink>
    </div>
  ));
}

const Container = styled.nav`
  color: ${(props) => props.theme.text};
  background: ${(props) => props.theme.bg};
  position: fixed;
  padding-top: 20px;
  z-index: 1;
  height: 100%;
  width: 65px;
  transition: 0.1s ease-in-out;
  overflow-y: auto;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
    border-radius: 10px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colorScroll};
    border-radius: 10px;
  }

  &.active {
    width: 220px;
  }

  .Logocontent {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 60px;

    .imgcontent {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 30px;
      cursor: pointer;
      transition: 0.3s ease;
      transform: ${({ $isOpen }) => ($isOpen ? `scale(0.7)` : `scale(1.5)`)}
        rotate(${({ theme }) => theme.logorotate});

      img {
        width: 100%;
        animation: flotar 1.7s ease-in-out infinite alternate;
      }
    }

    h2 {
      display: ${({ $isOpen }) => ($isOpen ? `block` : `none`)};
      font-size: 1.1rem;
      white-space: nowrap;
    }

    @keyframes flotar {
      0% {
        transform: translate(0, 0px);
      }
      50% {
        transform: translate(0, 4px);
      }
      100% {
        transform: translate(0, -0px);
      }
    }
  }

  .LinkContainer {
    margin: 5px 0;
    transition: all 0.3s ease-in-out;
    padding: 0 5%;
    position: relative;

    &:hover {
      background: ${(props) => props.theme.bgAlpha};
    }

    .Links {
      display: flex;
      align-items: center;
      text-decoration: none;
      padding: calc(${() => v.smSpacing} - 2px) 0;
      color: ${(props) => props.theme.text};
      height: 60px;

      .Linkicon {
        padding: ${() => v.smSpacing} ${() => v.mdSpacing};
        display: flex;

        svg {
          font-size: 25px;
        }
      }

      .label_ver {
        transition: 0.3s ease-in-out;
        opacity: 1;
        white-space: nowrap;
      }

      .label_oculto {
        opacity: 0;
      }

      &.active {
        color: ${(props) => props.theme.bg5};
        font-weight: 600;

        &::before {
          content: "";
          position: absolute;
          height: 100%;
          background: ${(props) => props.theme.bg5};
          width: 4px;
          border-radius: 10px;
          left: 0;
        }
      }
    }

    &.active {
      padding: 0;
    }
  }
`;

const Main = styled.div`
  .Sidebarbutton {
    position: fixed;
    top: 70px;
    left: 42px;
    width: 32px;
    height: 32px;
    border: none;
    border-radius: 50%;
    background: ${(props) => props.theme.bgtgderecha};
    box-shadow: 0 0 4px ${(props) => props.theme.bg3},
      0 0 7px ${(props) => props.theme.bg};
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s;
    z-index: 2;
    transform: ${({ $isOpen }) =>
      $isOpen ? `translateX(162px) rotate(3.142rad)` : `initial`};
    color: ${(props) => props.theme.text};
  }
`;

const Divider = styled.div`
  height: 1px;
  width: 100%;
  background: ${(props) => props.theme.bg4};
  margin: ${() => v.lgSpacing} 0;
`;
