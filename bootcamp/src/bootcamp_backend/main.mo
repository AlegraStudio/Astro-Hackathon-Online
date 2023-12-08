import HashMap "mo:base/HashMap";
import Text "mo:base/Text";
import Nat "mo:base/Nat";
import Debug "mo:base/Debug";

actor {

  // Estructura de datos para los estudiantes
  type MetadataEstudiante = {
    habilidades: Text;
    nombreProyecto: Text;
    tiempoTrabajo: Nat;
    programaEstudiantil: Text;
    universidad: Text;
    emprendimientoSocial: Text;
    ia: Text;
    habilidadesTecnicas: Text;
    habilidadesBlandas: Text;
  };

  type MetadataEstudianteInput = {
    habilidades: Text;
    nombreProyecto: Text;
    tiempoTrabajo: Nat;
    programaEstudiantil: Text;
    universidad: Text;
    emprendimientoSocial: Text;
    ia: Text;
    habilidadesTecnicas: Text;
    habilidadesBlandas: Text;
  };

  // HashMap para almacenar estudiantes
  let estudiantes = HashMap.HashMap<Text, MetadataEstudiante>(0, Text.equal, Text.hash);

  // Función para añadir un nuevo estudiante
  public func nuevoEstudiante(idEstudiante: Text, datos: MetadataEstudianteInput): async () {
    // Validaciones básicas
    if (datos.nombreProyecto == "") {
      Debug.trap("Ingrese un nombre de proyecto");
    };
    // ... Otras validaciones
    
    // Añadir estudiante al HashMap
    estudiantes.put(idEstudiante,
      {
        habilidades = datos.habilidades;
        nombreProyecto = datos.nombreProyecto;
        tiempoTrabajo = datos.tiempoTrabajo;
        programaEstudiantil = datos.programaEstudiantil;
        universidad = datos.universidad;
        emprendimientoSocial = datos.emprendimientoSocial;
        ia = datos.ia;
        habilidadesTecnicas = datos.habilidadesTecnicas;
        habilidadesBlandas = datos.habilidadesBlandas;
      }
    );
    Debug.print("Estudiante agregado");
  };

  // Función para obtener detalles de un estudiante
  public query func obtenerEstudiante(idEstudiante: Text): async MetadataEstudiante {
    let estudianteObtenido = estudiantes.get(idEstudiante);
    switch (estudianteObtenido) {
      case (null) {
        {
          habilidades = "";
          nombreProyecto = "";
          tiempoTrabajo = 0;
          programaEstudiantil = "";
          universidad = "";
          emprendimientoSocial = "";
          ia = "";
          habilidadesTecnicas = "";
          habilidadesBlandas = "";
        }
      };
      case (?estudianteObtenido) estudianteObtenido;
    };
  };

  // Función para actualizar un estudiante existente
  public func actualizarEstudiante(idEstudiante: Text, datos: MetadataEstudiante): async () {
    // Validaciones básicas
    if (datos.nombreProyecto == "") {
      Debug.trap("Ingrese un nombre de proyecto");
    };
    // ... Otras validaciones

    // Actualizar estudiante en el HashMap
    if (estudiantes.replace(idEstudiante, datos) == null) {
      Debug.trap("Estudiante no encontrado");
    };
  };

  // Función para eliminar un estudiante
  public func eliminarEstudiante(idEstudiante: Text): async () {
    if (estudiantes.remove(idEstudiante) == null) {
      Debug.trap("Estudiante no encontrado");
    };
  };

  // Función para identificar al llamador de un mensaje
  public shared (msg) func whoami(): async Principal { 
    msg.caller;
  };

};

