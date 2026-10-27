import styled from "styled-components";

/**
 * Página provisoria para las secciones del menú que todavía no se desarrollaron.
 * Se reemplaza por la página real a medida que cada sección se implemente.
 */
export function Proximamente({ titulo }) {
  return (
    <Container>
      <h1>{titulo}</h1>
      <p>Esta sección todavía está en desarrollo.</p>
    </Container>
  );
}

const Container = styled.div`
  h1 {
    margin-bottom: 8px;
  }

  p {
    color: ${(props) => props.theme.colorSubtitle};
  }
`;
