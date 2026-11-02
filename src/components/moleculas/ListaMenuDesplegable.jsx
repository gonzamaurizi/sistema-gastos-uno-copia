import styled from "styled-components";
import { v } from "../../styles/variables";
import { ItemsDesplegable } from "./ItemsDesplegable";

/**
 * Lista de opciones que aparece como menú flotante.
 *  - data:    arreglo de opciones ({ text, icono, tipo })
 *  - top:     distancia desde arriba donde se muestra el menú
 *  - funcion: se ejecuta al elegir una opción y recibe su "tipo"
 */
export function ListaMenuDesplegable({ data, top, funcion }) {
  return (
    <Container $top={top} role="menu">
      {data.map((item) => (
        <ItemsDesplegable
          key={item.tipo}
          item={item}
          funcion={() => funcion(item.tipo)}
        />
      ))}
    </Container>
  );
}

const Container = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  position: absolute;
  z-index: 10;
  background-color: ${({ theme }) => theme.bg3};
  border-radius: 22px;
  top: ${(props) => props.$top};
  ${() => v.boxshadowGray}
`;
