import styled from "styled-components";
import { UserAuth } from "../index";
export function Home() {
  const {user} = UserAuth();
  return (
  <Container>
    <h1>Bienvenido {user.full_name}</h1>
  </Container>
  );
}
// El botón de cerrar sesión y la foto del usuario ahora viven en el sidebar.
const Container =styled.div``
