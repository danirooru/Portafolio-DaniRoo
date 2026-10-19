# Sistema de diseño: Portafolio de Daniela Róo Rubí

*Lo marcado como "propuesta" son decisiones que sugerí para completar el sistema; puedes cambiarlas sin afectar el resto. Este documento describe el sistema tal como se ve en la previsualización web (design.html).*

---

## 1. Personalidad (Overview)

Este portafolio se siente **cálido, amigable y alegre**, como una conversación cercana con una diseñadora que disfruta lo que hace. Está pensado para posibles clientes y empresas que quieren ver, de un vistazo, cómo se adapta el diseño a las necesidades reales de cada marca.

La paleta nace del gusto personal: el amarillo y el rosa son los colores favoritos de la autora, y el beige funciona como neutro cálido que evita el blanco frío. El resultado es un diseño **creativo, de sitio web**: títulos gigantes con eco, estrellas enormes recortadas por el borde de la pantalla, bloques de color con esquinas redondeadas, una cinta amarilla inclinada y tarjetas ligeramente giradas. Es denso en contenido pero nunca saturado. Los proyectos traen sus propios colores, y el sistema los enmarca sin competir con ellos.

## 2. Colores y sus roles

**Beige `#f6e8d9`** es el fondo general de toda la página. Es el lienzo neutro que sustituye al blanco y nunca se reemplaza por blanco puro.

**Rosa mexicano `#d33659`** es el color de la voz principal. Se usa en los títulos grandes, en los títulos de sección que abren cada proyecto (modelado, campaña, empaque, marca, etc.), en los botones principales, en las cajas de texto destacadas, en las etiquetas principales, en el sello circular y en los bloques de sección de color fuerte. Cuando es fondo, el texto encima va en beige.

**Rosa claro `#eea3ad`** es el color para destacar. Sirve de fondo en bloques donde se quiere llamar la atención (como "Sobre mí"), de eco detrás de los títulos grandes y de fondo en etiquetas secundarias. Sobre rosa claro, los títulos grandes van en rosa mexicano y el texto de cuerpo en negro suave.

**Amarillo `#f7d97b`** es el color de energía. Se usa en las estrellas, en la cinta inclinada, en los bloques y paneles de fondo que acompañan al título de cada proyecto, en las etiquetas amarillas, en el subrayado de los enlaces y en los resaltados. Nunca se usa como color de texto.

**Negro suave `#231f20`** es el color de todo el texto de cuerpo y de los textos pequeños sobre fondos claros (beige, amarillo y rosa claro). También es el fondo de la muestra de este color en la paleta, con texto beige encima.

**Color de proyecto.** El título de cada proyecto se escribe en un color fuerte tomado del propio proyecto sobre un bloque amarillo o sobre el fondo beige de su tarjeta: morado `#6b4a7e` para Ornare, azul `#1d5578` para Lapi y vino `#7a1f2a` para Nativa. Ese color vive solo en el título y dentro de las imágenes de ese proyecto; debe ser lo bastante oscuro para leerse bien sobre amarillo y beige.

**Estados** (propuesta). Todo sale de la paleta, sin colores extra: los enlaces llevan subrayado amarillo con texto negro suave, los mensajes de error van en un bloque rosa mexicano con texto beige y las confirmaciones en un bloque amarillo con texto negro suave.

**Presentación de la paleta.** Cada color se muestra como un mosaico de esquinas de 20 px con su nombre en mayúsculas, su rol y su código; la muestra del beige lleva un contorno sutil para no perderse sobre el fondo.

## 3. Tipografía

**Please Display VF** es la fuente de los títulos y subtítulos de sección. Siempre en **mayúsculas y bold**, con interletrado ajustado (−0.02 em) e interlineado compacto (alrededor de 0.9) para que los títulos se sientan sólidos. Si la fuente no está disponible, el respaldo es Poppins Bold en mayúsculas.

**Poppins** es la fuente de todo lo demás. **Poppins Bold** para etiquetas pequeñas, datos destacados y texto de botones; **Poppins Regular** para el cuerpo (propuesta), con 17 px de base y 18 px en los párrafos de introducción. No se necesita fuente de código.

**Eco de título.** Los títulos grandes (portada, títulos de sección y "Sí / No") llevan una copia exacta del mismo texto en rosa claro, desplazada cerca del 4 % del tamaño de la letra hacia la derecha y 5 % hacia abajo, sin desenfoque, detrás del título en rosa mexicano. Se construye con el propio texto, nunca con otra palabra. Reglas del eco:

- Sobre un bloque de rosa claro, el eco va en beige.
- Sobre un bloque de rosa mexicano, el título va en beige y sin eco.
- No se usa en subtítulos pequeños, en títulos de tarjetas ni en títulos de proyecto en color.

**Escala propuesta** (escritorio / móvil):

- Título principal de portada: de 64 a 200 px (cerca del 13 % del ancho de pantalla) / cerca del 12 % del ancho en móvil
- Título de sección: de 44 a 92 px (cerca del 7 % del ancho) / 44 px
- Subtítulo y títulos de panel: de 30 a 40 px / 26 a 34 px
- Título de proyecto en tarjeta: 36 px
- Cuerpo: 17 px, con interlineado de 1.5 y líneas de 60 a 75 caracteres como máximo
- Etiquetas: 14 a 16 px

## 4. Layout

El portafolio es denso pero con aire: bloques de color y mosaicos de imágenes bien organizados, sin llegar a saturar.

**Escritorio** (propuesta). Ancho máximo de contenido de 1280 px, rejilla de 12 columnas, canal de 16 px y márgenes laterales de 48 px (18 px en móvil). Entre secciones, de 64 a 96 px; dentro de los bloques de color, un relleno de 56 px (de 20 a 28 px en móvil).

**Menú.** Una barra flotante en forma de píldora, fija arriba, de hasta 1184 px de ancho, con esquinas de 20 px, fondo beige, el logo (una estrella con el nombre) a la izquierda, los enlaces al centro y un botón rosa a la derecha. Cada enlace se resalta con amarillo al pasar el cursor. En tableta y móvil los enlaces se ocultan y quedan solo el logo y el botón.

**Estructura de la página**, en este orden:

1. **Hero (portada):** el título "PORTAFOLIO" gigante con su eco, una estrella grande de cuatro puntas recortada por el borde izquierdo y un destello de ocho puntas recortado por el borde derecho, ambos con rotación irregular. Debajo, una frase corta, un botón principal, un botón secundario y dos etiquetas (rol y nombre). Un sello circular rosa mexicano con texto en mayúsculas ("Diseño con alma") gira ligeramente sobre una de las estrellas.
2. **Cinta amarilla:** una banda inclinada (cerca de −1.6°) a todo el ancho, con las áreas de trabajo en mayúsculas separadas por estrellas pequeñas y un desplazamiento lento y continuo.
3. **Secciones de contenido:** cada una abre con una etiqueta numerada (por ejemplo, "01 · Paleta") y un título grande con eco. Se alternan bloques de color de esquinas redondeadas sobre el beige general.
4. **Cierre:** un bloque de rosa claro con un título gigante, una invitación y un botón, con el destello de ocho puntas recortado en la esquina inferior derecha.

**Estructura de cada proyecto**, en este orden:

1. **Portada de sección:** una estrella amarilla grande, recortada por el borde, con el tipo de proyecto (marca, empaque, modelado 3D, ilustraciones, campaña, UX/UI) en rosa mexicano con su eco rosa claro.
2. **Panel de título y mosaico:** un panel amarillo a la izquierda (3 de 12 columnas) con la etiqueta del tipo y el nombre del proyecto en su color propio, y a la derecha (9 columnas) un mosaico asimétrico de imágenes. Las imágenes llenan su celda sin márgenes internos y se separan entre sí por canales beige de 10 px. Se mezclan celdas anchas, altas y cuadradas para dar ritmo; cada imagen puede tener su propio fondo tonal del proyecto.
3. **Descripción del proyecto** (propuesta): una caja de rosa mexicano con texto beige, igual que la caja de "Sobre mí", con 2 o 3 párrafos cortos. Si cabe en unas 60 palabras va bajo el título dentro del panel amarillo; si no, en su propia sección antes del mosaico.

**Tableta** (768–899 px, propuesta). El panel amarillo pasa arriba a todo el ancho y el mosaico baja a 2 columnas; los bloques de varias columnas se apilan.

**Móvil** (menos de 768 px, propuesta):

- Todo se apila en una sola columna, con márgenes de 18 px.
- El panel amarillo con el título queda arriba, a todo el ancho, con las esquinas superiores redondeadas.
- El mosaico usa 2 columnas, con una imagen ancha al final.
- Los títulos bajan de tamaño según la escala del punto 3.
- Las cajas de descripción y los botones ocupan todo el ancho.
- Las estrellas se reducen y se recortan por el borde para que no tapen contenido; el sello circular baja a la parte inferior del hero.
- La paleta pasa a 2 columnas y después a 1.

## 5. Profundidad

El diseño es **plano** en casi todo. La única sombra del sistema es la **sombra paralela de las imágenes y las estrellas cuando están sobre un fondo plano y claro** (beige o rosa claro).

Esa sombra es **suave, difusa y discreta**: negra, sin desplazamiento horizontal, con un desplazamiento vertical de 6 px, desenfoque de 14 px y opacidad de 22 % (`drop-shadow(0 6px 14px rgba(35,31,32,.22))`). Debe sentirse como un borde borroso que levanta un poco el elemento, no como una sombra marcada.

**Excepción:** la barra de menú flotante lleva esa misma sombra suave porque flota sobre el contenido.

**Sin sombra:** botones, tarjetas, cajas de texto, etiquetas, íconos, bloques de color, el panel amarillo, la cinta y cualquier elemento con un color fuerte de fondo. Las estrellas que están sobre rosa mexicano o sobre amarillo tampoco llevan sombra. El eco de los títulos no cuenta como sombra.

## 6. Formas

Las esquinas son **semirredondeadas** (propuesta de medidas): 8 px en etiquetas, 12 px en botones e íconos de programas, y 20 px en cajas de texto, tarjetas, bloques de color, la barra de menú y el mosaico de paleta. Las imágenes del mosaico de proyecto llevan esquinas rectas para que la rejilla se vea limpia y continua; solo la esquina exterior del conjunto sigue los 20 px. El sello es un círculo.

El **único motivo de marca es la estrella**, y se usa siempre a partir de las dos formas originales de la autora, sin redibujarlas ni deformarlas:

- **Estrella de cuatro puntas largas:** cuerpo asimétrico con dos puntas más largas que las otras y las puntas apenas redondeadas.
- **Destello de ocho puntas:** de puntas irregulares, de tamaños distintos y también apenas redondeadas.

Ambas son amarillas `#f7d97b` y se colocan con rotación irregular, nunca perfectamente derechas. Se usan en grande como fondo de portadas y del cierre (recortadas por el borde de la pantalla) y en pequeño como acento: en el logo, en la cinta, en las viñetas de las listas "Sí", en la esquina del sello y brotando del botón principal. No hay otros motivos: ni flores, ni patrones, ni líneas onduladas.

## 7. Componentes

**Botón principal.** Fondo rosa mexicano, texto beige en Poppins Bold, esquinas de 12 px, relleno de 14 px vertical por 28 px horizontal, sin sombra ni borde.

- *Animación al pasar el cursor* (propuesta): el botón crece suavemente al 104 % en 200 ms y, a la vez, una pequeña estrella amarilla (la estrella de cuatro puntas) brota en su esquina superior derecha (de escala 0 a 1 con un giro de unos 20° y un ligero rebote de 250 ms). Al retirar el cursor, la estrella se contrae.
- Al presionar, el botón se encoge al 97 %.
- Para el foco con teclado, un contorno de 2 px en negro suave con separación de 2 px.
- Si la persona prefiere menos movimiento, la estrella aparece sin animar.

**Botón secundario.** Solo texto en Poppins Bold y negro suave, con un subrayado grueso amarillo de 4 px.

- *Animación al pasar el cursor* (propuesta): el subrayado crece hacia arriba hasta convertirse en un resaltado amarillo detrás de todo el texto, en 200 ms.
- El texto nunca cambia a amarillo.

**Enlaces.** Texto negro suave en Poppins Bold con el mismo subrayado amarillo y el mismo resaltado al pasar el cursor.

**Tarjeta de proyecto.** Fondo beige, plana, esquinas de 20 px. Lleva una imagen arriba, cuya proporción varía según el contenido del proyecto, y debajo el nombre del proyecto en Please Display en su color propio, con una etiqueta del tipo de proyecto.

- Las tarjetas de una fila se giran ligeramente (cerca de −1.5°, 1° y −0.6°) y la del centro baja unos píxeles para dar un aire de collage.
- Al pasar el cursor, la tarjeta se endereza y sube 6 px, y la imagen se acerca suavemente (zoom de 103 %) dentro de la tarjeta.
- Como el fondo de la página también es beige, las tarjetas se colocan sobre bloques de fondo amarillo o rosa claro para que no se pierdan.
- En móvil las tarjetas se apilan y no se giran.

**Etiquetas.** Hay tres variantes: la principal, con fondo rosa mexicano y texto beige; la secundaria, con fondo rosa claro y texto rosa mexicano; y la amarilla, con texto negro suave. Todas en Poppins Bold, planas y con esquinas de 8 px. Las etiquetas numeradas que abren cada sección usan la amarilla o la secundaria.

**Caja de texto destacada.** Fondo rosa mexicano, texto beige de al menos 16 px en peso Medium, esquinas de 20 px, con relleno generoso y un título corto en Please Display. Se usa para la descripción de cada proyecto y para la presentación personal.

**Sello circular.** Círculo de rosa mexicano con texto beige en Please Display en mayúsculas, girado unos 12°, con una pequeña estrella amarilla en la esquina. Se usa una vez en el hero.

**Cinta amarilla.** Banda amarilla inclinada con texto en Please Display en mayúsculas y negro suave, separado por estrellas pequeñas y con desplazamiento continuo. Se detiene cuando la persona prefiere menos movimiento.

**Íconos de programas.** Cuadrados con esquinas de 12 px en rosa mexicano, con las siglas del programa en beige (Ai, Ps, Id, Ae).

**Listas de reglas.** La lista "Sí" va en un bloque de rosa mexicano con texto beige y una estrella amarilla como viñeta; la lista "No" va en un bloque de rosa claro con texto negro suave y una tacha (✕) en rosa mexicano como viñeta. Cada elemento se separa por una línea fina.

## 8. Reglas de sí y no

### Sí

- Usar solo los cinco colores del sistema (beige, amarillo, rosa mexicano, rosa claro y negro suave) con sus valores exactos, más el color propio de cada proyecto en su título.
- Mantener el beige como fondo general y alternar sobre él bloques de un solo color, cada uno con esquinas de 20 px.
- Usar Please Display VF solo para títulos y subtítulos de sección, en mayúsculas y bold, y Poppins para todo lo demás.
- Hacer el eco de un título con una copia exacta de su mismo texto.
- Respetar la jerarquía: título de proyecto en su color, luego el tipo de proyecto en rosa mexicano, luego subtítulos y por último cuerpo.
- Poner texto oscuro (negro suave) sobre fondos claros y amarillo, y texto beige sobre rosa mexicano.
- En texto sobre rosa mexicano, usar 16 px o más y peso Medium o superior: el contraste del beige sobre ese rosa es moderado (cerca de 3.9:1).
- Dejar el rosa mexicano sobre rosa claro solo para títulos grandes, no para texto de cuerpo.
- Usar la estrella como único motivo, siempre amarilla, a partir de las dos formas originales, con rotación irregular y a veces recortada por el borde.
- Aplicar sombra suave solo a imágenes y estrellas sobre fondos planos y claros.
- Mantener una densidad con aire: canales de mosaico y espaciados consistentes.
- Respetar a quien prefiere menos movimiento: la cinta y las animaciones se detienen.

### No

- Nunca usar blanco puro como fondo ni como color de texto.
- Nunca mezclar más de una fuente en los títulos ni usar fuentes ajenas al sistema; no estirar ni deformar las fuentes.
- Nunca escribir títulos en minúsculas.
- Nunca poner un eco con una palabra distinta a la del título.
- Nunca poner sombra en botones, tarjetas, etiquetas, bloques de color ni en elementos con un color fuerte de fondo.
- Nunca combinar colores del mismo tono de claridad: oscuro sobre oscuro ni claro sobre claro. En particular, evitar texto amarillo sobre beige, texto beige sobre amarillo o sobre rosa claro, y texto rosa claro sobre beige o amarillo.
- Nunca usar el amarillo como color de texto.
- Nunca redibujar las estrellas, teñirlas de otro color ni agregar otros motivos (flores, patrones, líneas onduladas).
- Nunca poner una estrella amarilla sobre un fondo amarillo: se pierde.
- Nunca elegir un color de proyecto claro que se pierda sobre el panel amarillo.
- Nunca anidar fondos del mismo tono: una tarjeta beige sobre un fondo beige sin separación, o un bloque amarillo dentro de otro amarillo.
