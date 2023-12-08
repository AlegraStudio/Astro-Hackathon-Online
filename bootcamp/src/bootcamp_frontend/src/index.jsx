// Importar las dependencias necesarias para React y Chakra UI.
// React se utiliza para construir componentes de interfaz de usuario,
// mientras que Chakra UI proporciona un sistema de diseño accesible y modular.
import * as React from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider } from "@chakra-ui/react";

// Definir el componente principal Index.
// Este componente actúa como la entrada a la aplicación, envolviendo todo en StrictMode y ChakraProvider.
// StrictMode es una herramienta para resaltar posibles problemas en una aplicación.
// ChakraProvider es un componente de orden superior que proporciona estilos y funcionalidades de Chakra a sus hijos.
const Index = () => {
  return (
    <React.StrictMode>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
};

// Inicializar la aplicación en el DOM.
// Aquí se crea la raíz de la aplicación utilizando 'createRoot',
// que es una API de React 18 para mejorar la concurrencia y el rendimiento.
// Luego se renderiza el componente Index en el elemento con ID 'app'.
const root = createRoot(document.getElementById("app"));
root.render(<Index />);

