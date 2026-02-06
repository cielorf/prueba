// Se carga el JSON con fetch
fetch("../data.json") // Lee el archivo data.json
  .then((response) => {
    // Si el archivo no se encontró o hay un error
    if (!response.ok) {
      // Respuesta del archivo
      throw new Error(
        "No se pudo cargar data.json. Revisa el nombre y la ruta."
      );
    }
    return response.json(); // Convierte el JSON en un objeto JS usable
  })
  .then((data) => {
    // Muestra todo el JSON en consola
    dataValue = data;

    console.log("Datos del CV:", dataValue);
    //Se obtiene el id del HTML donde se mostrarán las habilidades
    //Se utiliza para acceder a un elemento de HTML mediante el atributo ID
    const listaHabilidades = document.getElementById("Habilidades"); //Este ID se pone en cv.html
    const Habilidades = document.getElementById("Habilidades");
    const Proyectos = document.getElementById("Proyectos");
    const Experiencia = document.getElementById("Experiencia");
    const Educacion = document.getElementById("Educacion");
    const Certificaciones = document.getElementById("Certificaciones");

    //HABILIDADES TECNICAS
    Object.entries(dataValue.habilidadesTecnicas).forEach(
      ([categoria, habilidades]) => {
        console.log(categoria, habilidades);

        // Título de la categoría
        const h5 = document.createElement("h5");
        h5.textContent = categoria;
        Habilidades.appendChild(h5);

        // Lista de habilidades
        habilidades.forEach((habilidad) => {
          const span = document.createElement("span");
          span.textContent = habilidad;
          span.className = "badge bg-light text-dark border m-1"; // Estilo de Bootstrap para las habilidades
          Habilidades.appendChild(span);
        });
      }
    );

    //PROYECTOS PERSONALES
    Object.values(dataValue.proyectosPersonales).forEach((proyecto) => {
      console.log("Proyecto:", proyecto);
      Proyectos.appendChild(document.createElement("hr")); // Línea separadora entre proyectos

      // Título del proyecto
      const h5 = document.createElement("h5");
      h5.textContent = proyecto.descripcion;
      Proyectos.appendChild(h5);
    });

    //EXPERIENCIA
    // Recorremos el arreglo experiencia usando Object.values
    Object.values(dataValue.experiencia).forEach((exp) => {
      // Mostramos cada experiencia en consola (OBLIGATORIO)
      console.log("Experiencia:", exp);

      // Línea separadora (como en el ejemplo del maestro)
      Experiencia.appendChild(document.createElement("hr"));

      // Título de la experiencia
      const h5 = document.createElement("h5");
      h5.textContent = exp.puesto + " - " + exp.empresa;
      Experiencia.appendChild(h5);

      // Texto secundario (ubicación y periodo)
      const p = document.createElement("p");
      p.textContent = exp.ubicacion + " | " + exp.periodo;
      Experiencia.appendChild(p);

      // Lista de actividades
      const ul = document.createElement("ul");

      // Recorremos las actividades (también con Object.values)
      Object.values(exp.actividades).forEach((actividad) => {
        const li = document.createElement("li");
        li.textContent = actividad;
        ul.appendChild(li);
      });

      // Agregamos la lista al HTML
      Experiencia.appendChild(ul);
    });

    //EDUCACION
    // Recorremos el arreglo educacion usando Object.values
    Object.values(dataValue.educacion).forEach((edu) => {
      // Mostrar cada elemento de educación en consola
      console.log("Educación:", edu);

      // Línea separadora
      Educacion.appendChild(document.createElement("hr"));

      // Título: nivel + carrera
      const h5 = document.createElement("h5");
      h5.textContent = edu.nivel + " - " + edu.carrera;
      Educacion.appendChild(h5);

      // Institución
      const pInstitucion = document.createElement("p");
      pInstitucion.textContent = edu.institucion;
      Educacion.appendChild(pInstitucion);

      // Periodo y promedio
      const pPeriodo = document.createElement("p");
      pPeriodo.textContent = edu.periodo + " · Promedio " + edu.promedio;
      Educacion.appendChild(pPeriodo);
    });

    // Recorremos el arreglo certificaciones usando Object.values
    Object.values(dataValue.certificaciones).forEach((cert) => {
      // Mostrar cada certificación en consola
      console.log("Certificación:", cert);

      // Línea separadora
      Certificaciones.appendChild(document.createElement("hr"));

      // Título: nombre del certificado
      const h5 = document.createElement("h5");
      h5.textContent = cert.nombre;
      Certificaciones.appendChild(h5);

      // Institución
      const pInstitucion = document.createElement("p");
      pInstitucion.textContent = cert.institucion;
      Certificaciones.appendChild(pInstitucion);

      // Fecha
      const pFecha = document.createElement("p");
      pFecha.textContent = cert.fecha;
      Certificaciones.appendChild(pFecha);
    });
  })
  .catch((error) => {
    // Si algo falla, se verá en consola
    console.error("Error al consumir el JSON:", error);
  });
