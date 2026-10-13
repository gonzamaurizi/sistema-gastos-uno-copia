import styled from "styled-components";
import {Btnsave} from "../../index";
export function LoginTemplate() {
  return (
    <Container>
        <div>
            <span>versión 1.0</span>
            <div>
                <img/>
            </div>
            <Titulo>Gastos - UNO</Titulo>
            <p>Organizá tus gastos e ingresos</p>
            <ContainerBtn>
                <Btnsave/>
            </ContainerBtn>
        </div>
    </Container>
    );
}
const Container =styled.div`

`
const Titulo = styled.span`
    font-size: 5rem;
    font-weight: 700;
`
const ContainerBtn = styled.div`
    display: flex;
    justify-content: center;
`

