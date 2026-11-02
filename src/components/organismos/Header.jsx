import { ContentHeader } from "../atomos/ContentHeader";
import { DataUser } from "./DataUser";

// Cabecera de las pantallas: por ahora muestra los datos del usuario a la derecha.
export function Header({ stateConfig }) {
  return (
    <ContentHeader>
      <DataUser stateConfig={stateConfig} />
    </ContentHeader>
  );
}
