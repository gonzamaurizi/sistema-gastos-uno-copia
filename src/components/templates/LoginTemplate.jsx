import styled from "styled-components";
import { Btnsave, v } from "../../index";

export function LoginTemplate() {
  return (
    <Container>
      <div className="contentCard">
        <span className="version">VERSIÓN 1.0</span>

        <div className="contentImg">
          <img src={v.logo} alt="Logo de Gastos - UNO" />
        </div>

        <Titulo>Gastos - UNO</Titulo>

        <p className="frase">
          Organizá tus gastos e ingresos
        </p>

        <ContainerBtn>
          <Btnsave
            titulo="Iniciar con Google"
            icono={<v.iconogoogle />}
            bgcolor={v.colorSecundario}
          />
        </ContainerBtn>

        <p className="footerText">
          Tus finanzas, más simples.
        </p>
      </div>
    </Container>
  );
}

const Container = styled.main`
  min-height: 100vh;
  min-height: 100dvh;
  width: 100%;
  box-sizing: border-box;
  padding: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  background:
    radial-gradient(
      ellipse at 50% 35%,
      rgba(119, 64, 170, 0.16) 0%,
      transparent 55%
    ),
    #0d0b14;

  color: #f5f0fc;
  text-align: center;

  .contentCard {
    width: 100%;
    max-width: 430px;
    box-sizing: border-box;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;

    padding: 32px;
    border: 1px solid rgba(191, 131, 255, 0.14);
    border-radius: 24px;

    background: rgba(21, 20, 27, 0.94);

    box-shadow:
      0 24px 70px rgba(0, 0, 0, 0.35),
      0 0 40px rgba(120, 65, 170, 0.06);

    .version {
      align-self: flex-start;
      color: #93869f;
      font-size: 0.75rem;
      letter-spacing: 1.5px;
    }

    .contentImg {
      width: 76px;
      height: 76px;
      margin-top: 8px;

      display: flex;
      align-items: center;
      justify-content: center;

      img {
        display: block;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    .frase {
      margin: -8px 0 8px;
      color: #b7aabe;
      font-size: 1rem;
      line-height: 1.6;
    }

    .footerText {
      margin: 4px 0 0;
      color: #766b82;
      font-size: 0.8rem;
    }
  }

  @media (max-width: 480px) {
    padding: 18px;

    .contentCard {
      gap: 18px;
      padding: 28px 20px;
      border-radius: 20px;

      .contentImg {
        width: 68px;
        height: 68px;
      }

      .frase {
        font-size: 0.95rem;
      }
    }
  }

  @media (max-width: 350px) {
    padding: 12px;

    .contentCard {
      padding: 24px 14px;
    }
  }
`;

const Titulo = styled.h1`
  margin: 0;
  color: #f5f0fc;
  font-size: clamp(2rem, 7vw, 2.6rem);
  font-weight: 750;
  line-height: 1.15;
  letter-spacing: -1.5px;
  overflow-wrap: anywhere;
`;

const ContainerBtn = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin-top: 4px;
`;
