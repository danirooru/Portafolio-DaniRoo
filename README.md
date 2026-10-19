# Portafolio de Daniela Róo Rubí

Abre `index.html` en un navegador actual. Mantén todos los archivos y la carpeta `assets` juntos. La página funciona sin compilación, sin frameworks y sin conexión a internet; Behance sí requiere conexión.

## Archivos

- `index.html`: contenido y estructura semántica.
- `styles.css`: tokens de DESIGN.md, estilos responsive y animaciones.
- `script.js`: filtros, galerías, navegación, cursor y controles de movimiento.
- `projects.js`: nombres, categorías, descripciones y rutas de las 56 imágenes de los 12 proyectos.
- `fonts.css` y `assets/poppins-*.ttf`: Poppins local. Su licencia está en `assets/Poppins-OFL.txt`.
- `assets/*.webp`: versiones optimizadas de las imágenes originales, sin modificar los originales.

## Diseño y movimiento

Se usa Poppins, el respaldo indicado en DESIGN.md; no se proporcionó Please Display VF. Los colores conservan los valores exactos del sistema. El texto beige sobre rosa mexicano se reserva para tamaños grandes en negrita que cumplen el umbral AA de 3:1; los textos pequeños usan combinaciones de contraste superior a 4.5:1.

El inicio incluye estrellas que cambian de tamaño y posición, sello oscilante, entrada del título, texto y fotografía y una cinta en movimiento. En equipos con ratón se muestra un cursor rosa con borde oscuro; al pulsar aparece una estrella original. Los botones tienen estados de foco, hover y pulsación.

«Pausar animaciones» detiene los efectos y guarda la preferencia cuando el navegador permite almacenamiento local. Se respeta automáticamente `prefers-reduced-motion`. En dispositivos táctiles se conserva el cursor del sistema.

## Contenido pendiente

El PDF del CV no se proporcionó: los botones muestran un aviso accesible. Para activar la descarga, agrega el PDF a `assets`, sustituye los botones `.cv-button` por enlaces con `href="assets/cv-daniela-roo.pdf"` y atributo `download`, y retira el aviso y sus manejadores de JavaScript.

No se inventaron empresas, instituciones o fechas laborales. Se incluyeron los tres proyectos UX/UI disponibles, para un total de 12 proyectos. Los años se muestran como el intervalo 2025–2026 definido en CV.md.

## Verificación realizada

- Inspección visual en composiciones de 390, 768 y 1440 px en el navegador integrado.
- Filtro UX/UI: muestra tres proyectos.
- Galería de EcoAlerta: seis imágenes y descripción completa.
- Cierre de galería con Escape y retorno del foco a la tarjeta.
- Apertura y cierre con Escape del menú móvil.
- Control de pausa y reanudación de animaciones.
- Comprobación de sintaxis JavaScript, rutas locales y relaciones de contraste de la paleta.

La revisión se realizó en el navegador integrado; no se ejecutó una auditoría externa de accesibilidad ni una matriz de navegadores y dispositivos físicos.


## Ajustes del 19 de octubre de 2026

Se amplió la tipografía de los enlaces del menú a 16 px en escritorio y 17 px en el menú desplegable. La portada ocupa el ancho de la pantalla, con estrellas ancladas a sus bordes. La cinta utiliza elementos de texto independientes con separación adaptable entre 40 y 72 px.

Se actualizaron los cuatro títulos solicitados y sus ecos. Habilidades y Contacto usan títulos rosa mexicano; sus bases beige se retiraron en la revisión posterior. Se agregaron el correo danielaroorubi@gmail.com y el teléfono 55 7193 9185 con enlaces para escribir y llamar.


## Ajustes de la referencia de portada

La introducción se alinea al borde izquierdo del título PORTAFOLIO, incluso después de cargar las fuentes o cambiar el ancho de ventana. El texto superior está centrado, y el sello tiene tres renglones y se superpone más sobre la fotografía. Se retiraron la línea y el enlace al pie de la portada, además de la nota sobre la foto. La cinta amarilla sube para funcionar como separador.

Los títulos de Habilidades y Contacto ya no tienen base beige. Las tarjetas de correo y teléfono usan rosa mexicano y el mismo texto claro de los botones principales. Se aplicaron los nueve colores de proyecto solicitados, tanto en tarjetas como en galerías, y el nombre Festival Macabro.

Verificación de esta revisión: sintaxis JavaScript, elementos retirados, enlaces locales, estructura del sello, nombres y valores de color. No se realizó revisión visual en navegador de esta última versión: la apertura del archivo local fue bloqueada por el navegador.


## Ajuste de Ornare y galerías

Se retiró la imagen duplicada carteles. Ornare incluye nueve imágenes y abre con legalAsset 20@300x, que también es su portada. Las figuras del mosaico conservan su fondo rosa detrás de las imágenes y su altura natural, sin estirarse para llenar los huecos de la rejilla.


## Acomodo de imágenes por proyecto

Qatar Airways mantiene la primera imagen amplia y las restantes por parejas, incluidas sexta y séptima. Personaje Johnny Rockets abre y usa como portada legalAsset 39@300x; legalAsset 35@300x queda al final. Ornare y Lapi conservan una imagen de apertura amplia y muestran las siguientes en dos columnas continuas, sin huecos entre filas. La portada de Ornare continúa siendo legalAsset 20@300x y Lapi conserva su portada anterior, ahora también al inicio de su galería.


El acomodo de apertura amplia y columnas continuas se aplica a todos los proyectos con varias imágenes excepto UX/UI. Los proyectos de una sola imagen mantienen su vista simple. Se conservan los órdenes y portadas establecidos.


Festival Macabro, Naya y Rediseño Sky Dancers vuelven al mosaico de filas original. Ornare y Lapi conservan las columnas continuas; los dos proyectos Johnny Rockets usan columnas independientes y su última imagen queda al final de la columna izquierda, sin cambiar su portada ni el orden de sus datos.


En Festival Macabro y Naya solo la segunda imagen se amplía para llenar su panel, sin recortes ni deformación. La primera conserva su estilo original y el fondo rosa.


En Sky Dancers se amplió el encuadre de las dos imágenes del personaje rubio, eliminando de la vista su exceso de margen transparente. Los archivos de ilustración se conservan intactos y se mantiene su proporción.
