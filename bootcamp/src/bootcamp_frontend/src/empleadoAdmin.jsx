// Importación de las bibliotecas necesarias: React y Chakra UI.
import * as React from "react";
import {
  ALEGRA_STUDIO_DAPP as canister,
  createActor,
} from "../../declarations/ALEGRA_STUDIO_DAPP";
import { AuthClient } from "@dfinity/auth-client";
import { HttpAgent } from "@dfinity/agent";
import { Input, Button } from "@chakra-ui/react";
import styles from "../assets/app.module.css";

const EstudianteAdmin = () => {
  const [estudianteSearch, setEstudianteSearch] = React.useState(null);
  const [whoami, setWhoami] = React.useState(null);

  // Actualiza esta variable con el ID de tu canister de Internet Identity
  const II_CANISTER_ID = "bnz7o-iuaaa-aaaaa-qaaaa-cai";

  const buscarEstudiante = async (idEstudiante) => {
    try {
      const estudiante = await canister.obtenerEstudiante(idEstudiante);
      setEstudianteSearch(estudiante);
      console.log('Estudiante encontrado:', estudiante);
    } catch (error) {
      console.error('Error al buscar el estudiante:', error);
      alert('Error al buscar el estudiante');
    }
  };

  const crearEstudiante = async () => {
    // Aquí deberías obtener los valores del formulario, por ejemplo:
    const habilidades = document.getElementById('habilidades').value;
    const nombreProyecto = document.getElementById('nombreProyecto').value;
    const tiempoTrabajo = parseInt(document.getElementById('tiempoTrabajo').value, 10);
    const programaEstudiantil = document.getElementById('programaEstudiantil').value;
    const universidad = document.getElementById('universidad').value;
    const emprendimientoSocial = document.getElementById('emprendimientoSocial').value;
    const ia = document.getElementById('ia').value;
    const habilidadesTecnicas = document.getElementById('habilidadesTecnicas').value;
    const habilidadesBlandas = document.getElementById('habilidadesBlandas').value;

    try {
      await canister.nuevoEstudiante({
        habilidades,
        nombreProyecto,
        tiempoTrabajo,
        programaEstudiantil,
        universidad,
        emprendimientoSocial,
        ia,
        habilidadesTecnicas,
        habilidadesBlandas,
      });
      alert('Estudiante creado con éxito');
    } catch (error) {
      console.error('Error al crear el estudiante:', error);
      alert('Error al crear el estudiante');
    }
  };

  const borrarEstudiante = async (idEstudiante) => {
    try {
      await canister.eliminarEstudiante(idEstudiante);
      alert('Estudiante eliminado con éxito');
    } catch (error) {
      console.error('Error al eliminar el estudiante:', error);
      alert('Error al eliminar el estudiante');
    }
  };

  const callInternetIdentity = async () => {
    const authClient = await AuthClient.create();
    await authClient.login({
      identityProvider: process.env.DFX_NETWORK === "local" ?
        `http://${II_CANISTER_ID}.localhost:8000` :
        `https://${II_CANISTER_ID}.ic0.app`,
      onSuccess: async () => {
        const identity = authClient.getIdentity();
        const agent = new HttpAgent({ identity });
        actor = createActor(canister.id, { agent });

        const principal = await actor.whoami();
        setWhoami(principal.toString());
      },
    });
  };

  return (
    <div className={styles.main}>
      {/* ... Resto del componente ... */}
    </div>
  );
};

export default EstudianteAdmin;
