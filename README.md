# DESCRIPCIÓN
El CV se construye a partir de un archivo data.json que contiene:
- Habilidades técnicas
- Proyectos personales
- Experiencia laboral
- Educación
- Certificaciones
- JavaScript se encarga de consumir el JSON y mostrar la información en el navegador.

 # TECNOLOGIAS USADAS
- HTML5
- CSS3
- JavaScript
- Bootstrap

# ESTRUCTURA
- .vscode
- css
- docs
- images
- js
- paginas
- data.json
- README.md

# FUNCIONAMIENTO
- El archivo data.json almacena toda la información del CV.
- En app.js se utiliza fetch() para leer el archivo JSON.
- Los datos se recorren usando Object.values().
- Se crean elementos HTML dinámicamente con createElement().
- El contenido se inserta en el DOM con appendChild().

# AUTORA
CIELO YULINETD RAMIREZ FARIAS

# NOTA
Este proyecto es solo educativo y puede seguir creciendo con nuevas secciones o mejoras visuales.