import styled from "styled-components";
import { Icono } from "../atomos/Icono";

// Una opción del menú desplegable: ícono + texto.
export function ItemsDesplegable({ item, funcion }) {
  return (
    <Container type="button" role="menuitem" onClick={funcion}>
      <Icono>{item.icono && <item.icono />}</Icono>
      <span>{item.text}</span>
    </Container>
  );
}

const Container = styled.button`
  cursor: pointer;
  padding: 8px;
  border: none;
  border-radius: 20px;
  background: transparent;
  color: ${({ theme }) => theme.text};
  font-size: inherit;
  text-align: left;
  white-space: nowrap;
  display: flex;
  align-items: center;
  gap: 10px;

  &:hover,
  &:focus-visible {
    background-color: ${({ theme }) => theme.bg4};
    outline: none;
  }

  svg {
    font-size: 28px;
    display: block;
  }
`;
