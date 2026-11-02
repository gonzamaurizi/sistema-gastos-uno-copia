import styled from "styled-components";
import { useAuthStore, UserAuth } from "../index";
export function Home() {
  const {signOut}=useAuthStore();
  const {user} = UserAuth();
  return (
  <Container>
    <h1>Bienvenido {user.full_name}</h1>
    <img src={user.picture} alt="Foto de perfil"/>
    <button onClick={signOut}>Cerrar sesión</button>
  </Container>
  );
}
const Container =styled.div``
