// Importación de las bibliotecas necesarias: React y Chakra UI.
// React se usa para construir componentes y manejar el estado.
// Chakra UI proporciona componentes de UI listos para usar y personalizables.
import * as React from "react";
import { Button } from "@chakra-ui/react";

// Importación de un componente personalizado para la administración de estudiantes.
import EstudianteAdmin from "./estudianteAdmin.jsx";

// Definición del componente funcional App.
const App = () => {
  // Definición de un estado local 'estudianteSearch' para controlar la visualización de la interfaz.
  // El estado inicial es 0, lo que indica que no se está visualizando la administración de estudiantes.
  const [estudianteSearch, setEstudianteSearch] = React.useState(0);

  return (
    // Renderización condicional basada en el estado 'estudianteSearch'.
    // Si 'estudianteSearch' es 1, se muestra el componente EstudianteAdmin.
    // De lo contrario, se muestra un botón para cambiar a la vista de administración.
    <>
      {estudianteSearch === 1 ? (
        <EstudianteAdmin />
      ) : (
        // Sección de bienvenida con un botón para cambiar a la vista de administración.
        <>
          <h1>Entrar</h1>
          <Button colorScheme='red' onClick={() => setEstudianteSearch(1)}>Admin</Button>
        </>
      )}
    </>
  );
};

// Exportación del componente App para su uso en otros archivos.
export default App;
