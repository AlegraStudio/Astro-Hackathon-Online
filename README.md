# Alegra Studio - Astro Hackathon Online

Bienvenido al repositorio de GitHub para Alegra Studio, una plataforma revolucionaria en la blockchain de Internet Computer. Estamos dedicados a transformar la gestión de proyectos estudiantiles mediante la automatización y transparencia, enfocándonos en monetizar el talento estudiantil dentro de un mercado dinámico.

## Objetivo

Nuestro principal objetivo es revolucionar la forma en que los proyectos estudiantiles son gestionados, valorados y recompensados. Queremos establecer un ecosistema donde el talento estudiantil sea reconocido y recompensado de manera justa y transparente.

## Funcionalidades Clave

### Gestión de Proyectos Automatizada y Transparente

- Registro de todas las etapas de un proyecto en la blockchain de Internet Computer.
- Seguimiento del progreso en tiempo real por estudiantes y tutores.

### Monetización del Talento Estudiantil

- Integración con Ethereum para transacciones y recompensas en criptomonedas.
- Posibilidad de que los estudiantes ganen criptomonedas por sus contribuciones.

### Enjoy Life Professional Network

- Red de networking para conectar estudiantes con profesionales y empresas.
- Oportunidades para exponer proyectos y colaborar en iniciativas reales.

### Educación en Inversión y Participación Financiera

- Programas educativos sobre criptomonedas e inversión.
- Herramientas para aprender a invertir y gestionar ganancias digitales.

### Mercado Dinámico para Talentos y Creaciones Estudiantiles

- Plataforma para la venta o licencia de proyectos y creaciones estudiantiles.
- Acceso a un mercado global para reconocimiento y monetización.

## Impacto y Beneficios

- **Empoderamiento Estudiantil**: Herramientas y oportunidades para recompensar el talento estudiantil.
- **Innovación Educativa**: Alineación de proyectos académicos con experiencias del mundo real.
- **Transparencia y Confianza**: Un entorno de trabajo transparente y confiable.
- **Inclusión Financiera**: Conocimientos y herramientas para el desarrollo económico de los estudiantes.

## MVP (Producto Mínimo Viable)

El MVP de Alegra Studio contará con:

- **Interfaz de Usuario para Gestión de Proyectos**: Dashboard intuitivo para la administración de proyectos.
- **Sistema de Recompensas en Criptomonedas**: Integración básica con Ethereum.
- **Red de Networking**: Conexiones iniciales entre estudiantes y profesionales.
- **Módulo Educativo Básico**: Recursos sobre criptomonedas y finanzas.

## Visión a Futuro

Expandir Alegra Studio a una plataforma global como herramienta para proyectos estudiantiles y centro para la innovación y el desarrollo profesional de estudiantes a nivel mundial.

## Aliados Claves

Somos parte de  Elanet - Red Europea-Latinoamericana de Apoyo a Emprendedores Sociales, en calidad de Aliados estratégicos, respaldados por 17 universidades y organizaciones aliadas de países como Bélgica, Italia, Austria, Bulgaria, Bolivia, Perú, Ecuador y Colombia. Así mismo, la Universidad del Magdalena y la Universidad Sergio Arboleda de Colombia son aliados claves en este esfuerzo. Ambas instituciones son renombradas por su compromiso con la educación de calidad y son la cuna de la comunidad de Alegra Studio en Instagram @missalegra.studio

## Docencia

Como profesora en ambas universidades, me enorgullece facilitar el enlace entre el talento estudiantil y las oportunidades que ofrece Alegra Studio.

## Contacto

- **Discord**: MissAlegra
- **OpenChat**: MissAlegra

---

## Guía de Inicio Rápido para Alegra Studio

Bienvenido a Alegra Studio, una plataforma innovadora en la blockchain de Internet Computer enfocada en la gestión y monetización de proyectos estudiantiles. Esta guía te ayudará a poner en marcha tu entorno de desarrollo para Alegra Studio rápidamente.

### Configuración del Proyecto

1. **Clonar el Repositorio:**
   Para comenzar, necesitarás clonar el repositorio de Alegra Studio en tu máquina local. Abre tu terminal y ejecuta:
   ```bash
   git clone [URL del repositorio de Alegra Studio]
   ```

2. **Navegar al Directorio del Proyecto:**
   Una vez clonado el repositorio, accede al directorio del proyecto:
   ```bash
   cd alegra_foundation/ALEGRA_STUDIO_DAPP
   ```

3. **Instalar Dependencias:**
   Instala las dependencias necesarias para el proyecto. Asegúrate de tener Node.js y dfx (el SDK de Internet Computer) instalados en tu máquina.
   ```bash
   npm install
   ```

### Ejecutando el Proyecto Localmente

4. **Iniciar la Réplica de Internet Computer:**
   Para probar el proyecto localmente, primero debes iniciar la réplica de Internet Computer. Ejecuta:
   ```bash
   dfx start --background
   ```

5. **Desplegar Canisters:**
   Despliega tus canisters en la réplica local y genera la interfaz candid de tu proyecto:
   ```bash
   dfx deploy
   ```

6. **Acceder al Proyecto:**
   Una vez desplegado, tu proyecto estará disponible en: `http://localhost:4943?canisterId={asset_canister_id}`. Reemplaza `{asset_canister_id}` con el ID de tu canister de activos.

7. **Generar Interfaz Candid:**
   Si realizas cambios en tu canister backend, ejecuta el siguiente comando para generar una nueva interfaz candid:
   ```bash
   npm run generate
   ```

8. **Iniciar Servidor de Desarrollo Frontend:**
   Para trabajar en la interfaz de usuario, inicia el servidor de desarrollo:
   ```bash
   npm start
   ```
   Esto abrirá un servidor en `http://localhost:8080`, enviando solicitudes de API a la réplica en el puerto 4943.

### Notas Adicionales

- **Variables de Entorno Frontend:** Si estás alojando el código de la interfaz en un entorno diferente al de DFX, asegúrate de ajustar las variables de entorno adecuadamente para evitar exponer claves sensibles en producción.

- **Documentación y Recursos:** Para obtener más información y recursos sobre el desarrollo en Internet Computer y Motoko, consulta la documentación oficial y las guías proporcionadas en el README original del ICPTutorials.

Con estos pasos, deberías estar listo para comenzar a trabajar en Alegra Studio. Si tienes preguntas o necesitas ayuda adicional, no dudes en contactarnos a través de los canales mencionados en la sección de contacto.

---


Alegra Studio: Donde la innovación y la creatividad se entrelazan bajo la visión de Miss Alegra Developer. Cada línea de código es un paso adelante hacia un futuro brillante y eficiente.  
 ¡Comienza a explorar y a contribuir hoy mismo!

Para más información, colaboraciones o consultas, por favor contáctanos a través de los canales de comunicación mencionados arriba.

