import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContent";
import { useAuthStore } from "../../store/AuthStore";
import { v } from "../../styles/variables";
import { DesplegableUser } from "../../utils/dataEstatica";
import { BtnCircular } from "../moleculas/BtnCircular";
import { ListaMenuDesplegable } from "../moleculas/ListaMenuDesplegable";

/**
 * Foto y nombre del usuario. Al tocarlos se abre un menú con
 * "Mi perfil", "Configuración" y "Cerrar sesión".
 *  - stateConfig: { state, setState } controla si el menú está abierto
 */
export function DataUser({ stateConfig }) {
  const { user } = UserAuth();
  const { signOut } = useAuthStore();
  const navigate = useNavigate();
  const nombre = user?.full_name || user?.name || "Usuario";

  const funcionXtipo = async (tipo) => {
    stateConfig.setState(); // cierra el menú al elegir una opción
    if (tipo === "cerrarsesion") {
      await signOut();
    }
    if (tipo === "configuracion") {
      navigate("/configurar");
    }
  };

  return (
    <Container>
      <button
        type="button"
        className="trigger"
        onClick={stateConfig.setState}
        aria-haspopup="menu"
        aria-expanded={stateConfig.state}
      >
        <div className="avatar">
          <div className="imgContainer">
            {user?.picture ? (
              <img
                src={user.picture}
                alt={`Foto de ${nombre}`}
                referrerPolicy="no-referrer"
              />
            ) : (
              <v.iconoUser />
            )}
          </div>
          <div className="badge">
            <BtnCircular
              icono={<v.iconocorona />}
              width="25px"
              height="25px"
              bgcolor="#ffffff"
              textColor="#181616"
              fontsize="11px"
            />
          </div>
        </div>
        <span className="nombre">{nombre}</span>
      </button>

      {stateConfig.state && (
        <ListaMenuDesplegable
          data={DesplegableUser}
          top="62px"
          funcion={funcionXtipo}
        />
      )}
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  margin: 15px;

  .trigger {
    width: 200px;
    padding: 8px;
    border: none;
    border-radius: 50px;
    background: transparent;
    color: ${({ theme }) => theme.text};
    font-size: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    &:hover,
    &:focus-visible {
      background-color: ${({ theme }) => theme.bg3};
      outline: none;
    }
  }

  .avatar {
    position: relative;
    min-height: 40px;
    min-width: 40px;
    margin-right: 22px;
  }

  .imgContainer {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    overflow: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${({ theme }) => theme.bg4};
    font-size: 28px;

    img {
      width: 100%;
      object-fit: cover;
    }
  }

  .badge {
    position: absolute;
    right: -8px;
    bottom: -8px;
  }

  .nombre {
    width: 100%;
    font-weight: 500;
    text-align: left;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
`;
