// Se carga el JSON con fetch
fetch("../data.json") // Lee el archivo data.json
  .then((response) => {
    // Si el archivo no se encontró o hay un error
    if (!response.ok) {
      //Respuesta del archivo
      throw new Error(
        "No se pudo cargar data.json. Revisa el nombre y la ruta."
      );
    }
    return response.json(); // Convierte el el JSON en en un obejeto JS usable
  })
  .then((data) => {
    // Muestra todo el JSON en consola
    console.log("Datos del CV:", data);

    //AQUI SE PINTAN LOS DATOS AL HTML DE HABILIDADES
    //Se obtiene el id del HTML donde se mostrarán las habilidades
    //Se utiliza para acceder a un elemento de HTML mediante el atributo ID
    const listaHabilidades = document.getElementById("Habilidades"); //Este ID se pone en cv.html

    // data.habilidadesTecnicas es un OBJETO
    // Object.values() convierte el objeto en un ARREGLO
    // para poder recorrerlo con forEach
    Object.values(data.habilidadesTecnicas).forEach((habilidad) => {
      //createElement(): crea elementos HTML desde JavaScript.
      const li = document.createElement("li"); // Se crea dinámicamente un elemento <li>
      li.textContent = habilidad; // Se asigna el texto de la habilidad al <li>
      //appendChild() agrega el elemento <li> al contenedor del HTML
      listaHabilidades.appendChild(li); // Se agrega el <li> al contenedor <ul> del HTML

      //AQUI SE PINTAN LOS DATOS AL HTML DE PROYECTOS PERSONALES
       //Se utiliza para acceder a un elemento de HTML mediante el atributo ID
      const listaproyectos = document.getElementById("Proyectos");
      //Se limpia el contenido del contenedor para evitar duplicar los datos
      listaproyectos.innerHTML = "";
      // proyectosPersonales ya es un arreglo, por lo tanto se recorre el JSON usando el forEach
      data.proyectosPersonales.forEach((proyecto) => {
        // createElement(): crea elementos HTML desde JavaScript
        const li = document.createElement("li"); // Se crea dinámicamente un elemento <li>
        li.textContent = proyecto.descripcion; // Se asigna el texto de la habilidad al <li>
        // appendChild(): inserta elementos dinámicamente en el HTML
        listaproyectos.appendChild(li); //Se agrega el <li> al contenedor <ul> del HTML

        //AQUI SE PINTAN LOS DATOS AL HTML DE EXPERERIENCIA
         //Se utiliza para acceder a un elemento de HTML mediante el atributo ID
        const contenedorExperiencia = document.getElementById("Experiencia");
        //Se limpia el contenido del contenedor para evitar duplicar los datos
        contenedorExperiencia.innerHTML = "";
        //Recorremos cada experiencia del JSON
        data.experiencia.forEach((exp) => {
          // Contenedor por cada trabajo
          const divExp = document.createElement("div"); //Se crea dinamicamente un elemento div
          //Se crea un contenedor <div> para cada experiencia laboral y se le asigna una clase de bootstrap para separar
          divExp.className = "mb-4";
          //Se crea un encabezado para que aparezca el titulo de puesto
          const puesto = document.createElement("h5");
          puesto.textContent = exp.puesto;
          //Se crea un encabezado para que aparezca la empresa y ubicación
          const empresa = document.createElement("p");
          empresa.textContent = `${exp.empresa} | ${exp.ubicacion}`;
          //Se crea un encabezado para que aparezca periodo
          const periodo = document.createElement("p");
          periodo.textContent = exp.periodo;
          //Actividades es un arreglo dentro de otro arreglo
          const ul = document.createElement("ul");
          exp.actividades.forEach((actividad) => {
            const li = document.createElement("li"); //Se crea dinámicamente un elemento <li>
            li.textContent = actividad; //Se agrega el <li> al contenedor del HTML

            ul.appendChild(li);
          });
          // Agregar todo al contenedor del trabajo
          divExp.appendChild(puesto);
          divExp.appendChild(empresa);
          divExp.appendChild(periodo);
          divExp.appendChild(ul); //se agrega la lista de las actividades
          // Agregar el trabajo al HTML
          contenedorExperiencia.appendChild(divExp);

          //AQUI SE PINTAN LOS DATOS AL HTML DE EDUCACION
          //Se utiliza para acceder a un elemento de HTML mediante el atributo ID
          const contenedorEducacion = document.getElementById("Educacion");
          //Limpia el contenedor para evitar duplicados
          contenedorEducacion.innerHTML = "";
          //Recorremos el arreglo educacion del JSON
          data.educacion.forEach((edu) => {
            // Contenedor por cada estudio
            const divEdu = document.createElement("div");
            divEdu.className = "mb-4";
            // Nivel y carrera
            const titulo = document.createElement("h5");
            titulo.textContent = `${edu.nivel} en ${edu.carrera}`;
            // Institución
            const institucion = document.createElement("p");
            institucion.textContent = edu.institucion;
            // Periodo
            const periodo = document.createElement("p");
            periodo.textContent = edu.periodo;
            // Promedio
            const promedio = document.createElement("p");
            promedio.textContent = `Promedio: ${edu.promedio}`;
            // Agregar todo al contenedor de educación
            divEdu.appendChild(titulo);
            divEdu.appendChild(institucion);
            divEdu.appendChild(periodo);
            divEdu.appendChild(promedio);

            // Agregar la educación al HTML
            contenedorEducacion.appendChild(divEdu);

            //AQUI SE PINTAN LOS DATOS AL HTML DE CERTIFICADO
            // Contenedor principal de certificaciones
            const contenedorCertificaciones =
              document.getElementById("Certificaciones");
            // Limpia el contenedor para evitar duplicados
            contenedorCertificaciones.innerHTML = "";
            // Recorremos el arreglo certificaciones del JSON
            data.certificaciones.forEach((cert) => {
              // Contenedor por cada certificación
              const divCert = document.createElement("div");
              divCert.className = "mb-3";
              // Nombre del certificado
              const nombre = document.createElement("h6");
              nombre.textContent = cert.nombre;
              // Institución
              const institucion = document.createElement("p");
              institucion.textContent = cert.institucion;
              // Fecha
              const fecha = document.createElement("p");
              fecha.textContent = cert.fecha;
              // Agregar todo al contenedor de la certificación
              divCert.appendChild(nombre);
              divCert.appendChild(institucion);
              divCert.appendChild(fecha);

              // Agregar la certificación al HTML
              contenedorCertificaciones.appendChild(divCert);
            });
          });
        });
      });
    });
  })
  .catch((error) => {
    // Si algo falla, se verá en consola
    console.error("Error al consumir el JSON:", error);
  });
