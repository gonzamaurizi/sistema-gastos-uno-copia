import { useState } from "react";
import styled from "styled-components";
import { Header } from "../organismos/Header";

/**
 * Plantilla base de las pantallas: una grilla con la cabecera arriba y tres
 * áreas debajo (area1, area2 y main). Cada pantalla nueva puede partir de acá.
 *  - area1, area2: contenido opcional de las dos franjas superiores
 *  - children:     contenido del área principal
 */
export function PlantillaBase({ area1, area2, children }) {
  const [state, setState] = useState(false);

  return (
    <Container>
      <header className="header">
        <Header stateConfig={{ state, setState: () => setState(!state) }} />
      </header>
      <section className="area1">{area1}</section>
      <section className="area2">{area2}</section>
      <section className="main">{children}</section>
    </Container>
  );
}

// Los colores de fondo de cada área son provisorios: sirven para ver
// dónde está cada una mientras se arma la pantalla, y se sacan después.
const Container = styled.div`
  min-height: 100vh;
  padding: 15px;
  width: 100%;
  background: ${({ theme }) => theme.bgtotal};
  color: ${({ theme }) => theme.text};
  display: grid;
  grid-template:
    "header" 100px
    "area1" 100px
    "area2" 50px
    "main" auto;

  .header {
    grid-area: header;
    background-color: rgba(103, 93, 241, 0.14);
    display: flex;
    align-items: center;
  }

  .area1 {
    grid-area: area1;
    background-color: rgba(229, 67, 26, 0.14);
    display: flex;
    align-items: center;
  }

  .area2 {
    grid-area: area2;
    background-color: rgba(77, 237, 106, 0.14);
    display: flex;
    align-items: center;
  }

  .main {
    grid-area: main;
    background-color: rgba(179, 46, 241, 0.14);
  }
`;
