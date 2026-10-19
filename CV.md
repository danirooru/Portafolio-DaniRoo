# CV.md — Portafolio de Daniela Róo Rubí

## 1 · Estructura general y navegación

Landing de una sola página, mobile-first, en HTML, CSS y JavaScript vanilla, adaptada a móvil, tableta y escritorio.

- Menú fijo flotante con logo de estrella y nombre «Daniela Róo».
- Enlaces: **Inicio, Sobre mí, Proyectos, Estudios, Experiencia, Habilidades y Contacto**.
- En escritorio se añade el botón **Descargar CV**. En tableta y móvil se muestra un botón **Menú** que despliega las secciones.
- Los enlaces del menú tienen 16 px en escritorio y 17 px en el desplegable. El menú completo aparece desde 1180 px.
- El enlace correspondiente a la sección visible se resalta; los enlaces internos desplazan suavemente hasta su destino.
- Fondo general beige, sin selector de tema claro u oscuro.
- Orden de lectura: presentación, perfil personal, proyectos, formación, experiencia, habilidades y contacto.
- Proyectos es la sección principal para explorar el trabajo, seguida de la portada.

## 2 · Inicio y cinta de áreas

La portada ocupa todo el ancho de la pantalla, con márgenes propios. Las estrellas decorativas llegan a los bordes de la pantalla y se recortan allí. En escritorio y tableta se presenta el texto a la izquierda y la foto a la derecha; en móvil, la foto se coloca arriba del texto.

### Texto y elementos de la portada

- Texto superior centrado: **DISEÑO GRÁFICO DIGITAL**.
- Título principal centrado, grande y con eco: **PORTAFOLIO**.
- Saludo: «Hola, soy».
- Nombre: **Daniela Róo Rubí**.
- Etiqueta: **Diseñadora Gráfica Digital**.
- Frase de valor: «Convierto tus ideas en mensajes visuales que se entienden y se recuerdan.»
- Botón primario **Ver proyectos**, que lleva a la sección de proyectos.
- Botón secundario **Descargar CV**. El PDF continúa pendiente; por ahora abre un aviso accesible.
- Desde «Hola, soy» hasta los botones, el bloque comparte el borde izquierdo con el título PORTAFOLIO. La alineación se reajusta al cargar las fuentes o cambiar el tamaño de la ventana.
- Foto con suéter amarillo y estrella detrás: original `assets/img/mifoto.png`; versión web `assets/mifoto.webp`.
- Estrellas originales `estrellauno.png` y `estrellados.png`, con versiones optimizadas `.webp` dentro de `assets`.
- Sello circular rosa mexicano, superpuesto sobre la zona de la foto, con el texto en tres líneas: **DISEÑO / CON / ALMA** y una estrella amarilla.
- No se muestra la nota «Ideas con intención. Diseño con personalidad.», ni la línea negra y el enlace «Un poco de mí, mucho por crear» que antes cerraban la portada.

### Cinta amarilla

Banda inclinada y animada que actúa como separación entre la portada y Sobre mí. Se superpone ligeramente a la parte inferior de la portada y puede pasar sobre la foto.

Áreas, en este orden: **IDENTIDAD · EMPAQUE · ILUSTRACIONES · MODELADO 3D · UX/UI**.

Cada área es un elemento independiente, con separación adaptable de 40 a 72 px. El contenido se repite para mantener el desplazamiento continuo. La cinta se detiene con el control de pausa o cuando se prefiere movimiento reducido.

## 3 · Sobre mí

- Etiqueta: **01 · SOBRE MÍ**.
- Título: **CONÓCEME MÁS**.
- Caja destacada con fondo rosa mexicano, texto beige y etiquetas amarillas.
- Introducción lateral: «Curiosa por naturaleza.» y **IDEAS QUE CONECTAN.**

Texto publicado:

> Soy Daniela Róo, tengo 21 años y soy de la CDMX. Curso el séptimo semestre de la Licenciatura en Diseño Gráfico Digital.
>
> Me apasiona crear mensajes visuales que se adapten a cada cliente y ayuden a resolver problemas reales. Disfruto explorar el UX, la animación y el modelado 3D.
>
> Fuera del diseño, me encuentras en el cine —sobre todo si es de terror— o escuchando música.

Etiquetas: **CDMX · Cine de terror · Música**.

## 4 · Proyectos

- Etiqueta: **02 · TRABAJO SELECCIONADO**.
- Título: **MIS PROYECTOS**.
- Frase de apoyo: «Distintas ideas. Una mirada propia.»
- **12 proyectos y 56 imágenes**, con el intervalo **2025–2026** mostrado en las tarjetas y vistas ampliadas.
- Seis categorías: Marca (2), Empaque (2), Modelado 3D (2), Ilustraciones (2), Campaña (1) y UX/UI (3).
- Filtros: **Todos, Marca, Empaque, Modelado 3D, Ilustraciones, Campaña y UX/UI**. Todos está seleccionado inicialmente; el contador se actualiza al filtrar.
- Cuadrícula de tarjetas: una columna en móvil, dos desde 600 px y tres desde 900 px.
- Las tarjetas aparecen sobre un bloque rosa claro y contienen portada, categoría, año, nombre en el color del proyecto y cantidad de imágenes.
- En escritorio las tarjetas tienen una ligera rotación; al pasar el cursor se enderezan, suben y acercan un poco la imagen.
- Al pulsar una tarjeta se abre una vista ampliada con título, categoría, periodo, descripción en caja rosa mexicano y galería de imágenes. En móvil ocupa toda la pantalla.
- Las galerías son mosaicos, **sin carrusel ni enlaces externos**. Cada imagen lleva una leyenda con nombre del proyecto y número de imagen.
- Texto de cierre: «Cada proyecto tiene una historia. Haz clic para descubrirla.»

### Proyectos, colores y portadas

Las rutas siguientes corresponden a los archivos optimizados que utiliza la landing. Los PNG originales permanecen en las carpetas del proyecto fuente.

| Proyecto | Categoría | Imágenes | Color del título | Portada web |
|---|---|---:|---|---|
| Ornare Tipográfico | Marca | 9 | `#6b4a7e` | `assets/ornare-legalasset-20.webp` |
| Rediseño Lapi | Marca | 9 | `#1d5578` | `assets/project-2-9.webp` |
| Festival Macabro | Campaña | 2 | `#d6482f` | `assets/project-3-2.webp` |
| Nativa | Empaque | 1 | `#7a1f2a` | `assets/project-4-1.webp` |
| Wes Anderson x Kleenex | Empaque | 1 | `#bf705b` | `assets/project-5-1.webp` |
| Personaje Johnny Rockets | Modelado 3D | 5 | `#002f63` | `assets/project-6-5.webp` |
| Stand Johnny Rockets | Modelado 3D | 4 | `#ce4c30` | `assets/project-7-3.webp` |
| Rediseño Sky Dancers | Ilustraciones | 4 | `#de557b` | `assets/project-8-3.webp` |
| Naya | Ilustraciones | 2 | `#175d1a` | `assets/project-9-2.webp` |
| Rediseño Qatar Airways | UX/UI | 7 | `#541031` | `assets/project-10-1.webp` |
| EcoAlerta | UX/UI | 6 | `#81bb7a` | `assets/project-11-1.webp` |
| Itaso: Decide y Nutre | UX/UI | 6 | `#b890b9` | `assets/project-12-1.webp` |

### Acomodo específico de las galerías

- **Ornare Tipográfico:** nueve imágenes. Se retiró `carteles.png` por duplicarse. `legalAsset 20@300x` abre la galería y es la portada. Las demás imágenes, correspondientes a `legalAsset 12` a `19`, se acomodan en dos columnas continuas para reducir huecos.
- **Rediseño Lapi:** nueve imágenes. La portada corresponde a `legalAsset 29@300x` y también abre la galería. Las restantes se distribuyen en dos columnas continuas.
- **Festival Macabro y Naya:** conservan el mosaico de filas. La primera imagen mantiene su presentación con fondo rosa; únicamente la segunda se amplía para llenar el ancho del panel, sin deformarse.
- **Personaje Johnny Rockets:** `legalAsset 39@300x` es la portada y primera imagen. El orden de los archivos es 39, 36, 37, 38 y 35. La última, `legalAsset 35@300x`, se ubica al final de la columna izquierda. Después de la apertura amplia, las imágenes se reparten en columnas independientes para reducir huecos.
- **Stand Johnny Rockets:** mantiene como portada `legalAsset 34@300x`. El orden de los archivos es 32, 33, 34 y 40; la última imagen, `legalAsset 40@300x`, se ubica en la columna izquierda. La portada de la tarjeta y la primera imagen de la galería no son la misma.
- **Rediseño Sky Dancers:** conserva el mosaico de filas. Las dos ilustraciones del personaje rubio tienen un encuadre más cerrado, que elimina el exceso de margen transparente para aumentar su tamaño visual. Ese encuadre se usa también en la portada, correspondiente a `legalAsset 45@300x`. Las ilustraciones originales se conservan sin deformación.
- **Nativa y Wes Anderson x Kleenex:** una imagen por proyecto.
- **UX/UI:** mantienen el acomodo de pantallas con fondo rosa. En Qatar Airways, la séptima imagen se coloca a la derecha de la sexta. No se aplica a estas galerías el acomodo de columnas continuas.
- Los fondos rosas detrás de las imágenes se conservan. Las figuras no se estiran para llenar los huecos de las filas y generar paneles rosas vacíos.

### Descripciones publicadas

#### Ornare Tipográfico

Identidad para una exposición temporal dedicada a los tipógrafos Mika Melvas y Louise Fili. Partiendo de la exploración de sus letras y elementos gráficos, se creó un cartel que fusiona ambos estilos. De ahí se desarrollaron señalética, artículos promocionales y materiales publicitarios con una línea gráfica coherente.

#### Rediseño Lapi

Rediseño de identidad para el laboratorio médico Lapi, con el fin de proyectar una imagen más profesional, confiable y cercana. Se renovó el logotipo y se usó una paleta de azules que comunica confianza y limpieza, junto con naranja para aportar calidez. Las formas circulares y los elementos de inspiración médica refuerzan la idea de cuidado y bienestar.

#### Festival Macabro

Campaña para el 25 aniversario del Festival Internacional de Cine de Horror de la Ciudad de México, bajo el concepto “25 años invocando el horror”. Conserva la estética lúgubre de sus carteles con rojo, negro y blanco y texturas desgastadas. Se reinterpretó al personaje del logotipo en una nueva ilustración junto a un caldero y elementos rituales.

#### Nativa

Línea de salsas gourmet mexicanas con una identidad elegante, artesanal y de calidad. La ilustración es el recurso principal, con frutas e ingredientes representados en formas abstraídas. Los verdes, rojos y naranjas, tomados de cada ingrediente, diferencian los sabores y transmiten frescura.

#### Wes Anderson x Kleenex

Colaboración conceptual inspirada en Fantastic Mr. Fox, The Grand Budapest Hotel y Moonrise Kingdom. Se ilustraron elementos icónicos de cada película con formas simplificadas, patrones geométricos y sus paletas características. El resultado es una colección de empaques Kleenex que captura la estética nostálgica y colorida del director.

#### Personaje Johnny Rockets

Diseño y modelado 3D de una mesera retrofuturista que promociona las hamburguesas y papas fritas de la marca. Se emplearon formas simplificadas, colores representativos y accesorios inspirados en el espacio. Trabajado desde el modelado hasta el render, transmite una imagen divertida y amigable que complementa la identidad del stand.

#### Stand Johnny Rockets

Stand comercial que reinterpreta la estética retro de la marca con un enfoque retrofuturista y contemporáneo. El proceso abarcó blocking, modelado, texturizado, iluminación y render final. Conserva el rojo, azul y amarillo icónicos, y suma formas curvas, acabados metálicos y luces para unir la nostalgia americana con lo futurista.

#### Rediseño Sky Dancers

Rediseño de Jade y Camille, de la serie animada Sky Dancers, con una apariencia más contemporánea y formas simplificadas. Se estilizaron las proporciones, inspirándose en la animación actual. Mantienen sus colores, alas y accesorios, y se exploraron poses y expresiones que les dan más personalidad.

#### Naya

Etiqueta ilustrada para un jugo inspirado en las raíces mexicanas. Tuna, limón y guayaba se representan con formas orgánicas y simplificadas. La paleta vibrante de verdes, rosas y amarillos se acompaña de elementos florales inspirados en el arte popular.

#### Rediseño Qatar Airways

Rediseño de la app móvil de Qatar Airways para lograr una experiencia más intuitiva, elegante y fácil de navegar. Se conservó el color vino de la marca sobre fondos blancos para una apariencia limpia y sofisticada. Se reorganizó la información y se mejoraron las jerarquías visuales para facilitar la búsqueda de vuelos, la consulta de viajes y el acceso a boletos.

#### EcoAlerta

App móvil que fomenta hábitos sostenibles y reduce el consumo de energía eléctrica. Su paleta de verdes evoca ecología y ahorro, con tonos claros y negro para facilitar la lectura. Integra recordatorios, retos semanales y gráficos de progreso, además de un avatar personalizable que hace la experiencia más cercana.

#### Itaso: Decide y Nutre

App móvil creada para la asociación Itaso, la cual busca prevenir la obesidad infantil y adolescente en México, dirigida a cuidadores. Fomenta hábitos saludables mediante retos cotidianos en el mercado, la cocina, la escuela y el hogar. Usa los colores del logotipo, ilustraciones y texturas cercanas, y a Tasi, una estrella morada que guía la experiencia de forma amigable.

## 5 · Formación

- Etiqueta: **03 · FORMACIÓN**.
- Título: **LO QUE ME FORMA**.
- Tres tarjetas con estrellas decorativas:

1. **Diseño Gráfico Digital** — Licenciatura, Universidad La Salle. «EN CURSO · 7.º SEMESTRE».
2. **Experiencia e interfaz** — Área de profundización UX/UI. «Diseño centrado en las personas».
3. **Más formas de conectar** — Idiomas: español, lengua nativa; inglés, nivel alto.

## 6 · Experiencia

- Etiqueta: **04 · EXPERIENCIA**.
- Título: **EXPERIENCIAS QUE SUMAN**.
- Dos tarjetas, en este orden:

1. **Animadora de eventos infantiles** — Actualidad. «Juegos y talleres para niños pequeños. Me coordino con otros animadores para llevar adelante las actividades y crear una experiencia divertida.» Etiquetas: **Trabajo en equipo · Coordinación**.
2. **Servicio social** — «Proyecto editorial sobre la música sonidera.» Etiqueta: **Diseño editorial**.

Los nombres de empresas e instituciones y las fechas que no se proporcionaron se omiten en la página.

## 7 · Habilidades

- Etiqueta: **05 · HABILIDADES**.
- Título: **LO QUE PUEDO APORTAR**, en rosa mexicano, sin caja beige detrás del título. El bloque de la sección tiene fondo rosa claro y el eco del título es beige.
- Frase: «Herramientas para imaginar. Habilidades para resolver.»

Programas, representados con siglas en cuadros rosa mexicano con texto beige:

- **Ai** — Illustrator.
- **Ps** — Photoshop.
- **Id** — InDesign.
- **Ae** — After Effects.
- **Pr** — Procreate.
- **Ma** — Maya.

Lista de habilidades con estrellas amarillas:

1. Diseño UX/UI.
2. Animación.
3. Modelado 3D.
4. Identidad de marca, empaque, ilustración y campañas.
5. Trabajo en equipo.
6. Inglés: nivel alto.

## 8 · Contacto

- Etiqueta: **06 · CONTACTO**.
- Título: **HAGAMOS QUE TU IDEA HABLE**, en rosa mexicano, sin caja beige detrás del título. El panel tiene fondo rosa claro y el eco es beige.
- Invitación: «Hay mucho más por crear. Conoce más de mi trabajo en Behance.»
- Estrella amarilla grande recortada en la esquina inferior derecha del panel.

Medios y acciones:

- **ESCRÍBEME:** `danielaroorubi@gmail.com`, con enlace `mailto:danielaroorubi@gmail.com`.
- **LLÁMAME:** `55 7193 9185`, con enlace `tel:+525571939185`.
- Las tarjetas de correo y teléfono tienen fondo rosa mexicano y texto beige, como el botón principal.
- **Ver mi Behance:** <https://www.behance.net/danielarooru>, abre en otra pestaña.
- **Descargar CV:** abre el aviso de PDF pendiente hasta que se proporcione el archivo.

## 9 · Pie de página

- Logo con estrella y nombre **Daniela Róo Rubí**.
- Rol: **Diseñadora Gráfica Digital**.
- Frase: «Pienso cada detalle para que tu idea hable por sí sola.»
- Enlace a Behance con el mismo perfil de Contacto.

## 10 · Movimiento, navegación y accesibilidad

- Entrada animada del título PORTAFOLIO, el texto y la fotografía.
- Estrellas que cambian suavemente de tamaño, posición y rotación; sello circular con oscilación suave.
- Cinta amarilla con desplazamiento continuo.
- En escritorio con ratón, cursor circular rosa con borde oscuro; cambia de tamaño sobre enlaces y botones. Al hacer clic aparece un destello con una estrella original.
- En dispositivos táctiles se conserva el comportamiento nativo del puntero.
- Control **Pausar animaciones / Reanudar animaciones** en la portada. Guarda la preferencia cuando el navegador permite almacenamiento local.
- Se respeta `prefers-reduced-motion`: se detienen las animaciones, se evita el desplazamiento suave y se conserva el cursor nativo.
- Botones con estados de foco, hover y pulsación; la estrella pequeña aparece al interactuar con el botón primario.
- Enlace **Saltar al contenido**, foco visible y navegación por teclado.
- Imágenes de contenido con texto alternativo; las estrellas decorativas se ocultan a las tecnologías de asistencia.
- Los filtros indican cuál está activo y anuncian el número de resultados.
- Las vistas ampliadas y el aviso de CV usan diálogos: mantienen el foco dentro mientras están abiertos, se cierran con Escape y devuelven el foco al control que los abrió.
- El menú móvil se cierra al elegir una sección o pulsar Escape.
- Título de pestaña: **Daniela Róo Rubí · Diseñadora Gráfica Digital**.

## 11 · Archivos y publicación

- `index.html`: estructura y contenido de la landing.
- `styles.css`: variables del sistema visual, diseño responsive y animaciones.
- `script.js`: navegación, filtros, vistas ampliadas, encuadres y efectos.
- `projects.js`: datos, descripciones, colores, portadas y orden de las imágenes.
- `fonts.css` y archivos de Poppins en `assets`: tipografía local. Se usa Poppins como respaldo previsto en el sistema; no se proporcionó Please Display VF.
- `assets/*.webp`: imágenes optimizadas para la landing, conservando los originales en el proyecto fuente.
- `design.html`: sistema de diseño publicado, correspondiente al archivo correcto de Descargas.

Repositorio: <https://github.com/danirooru/Portafolio-DaniRoo>.

Portafolio: <https://danirooru.github.io/Portafolio-DaniRoo/index.html>.

Sistema de diseño: <https://danirooru.github.io/Portafolio-DaniRoo/design.html#componentes>.

## 12 · Información pendiente

Estos datos no se completan automáticamente ni se muestran como corchetes en el portafolio:

- Archivo PDF para activar la descarga del CV.
- Nombre de la empresa y fecha de inicio como animadora de eventos infantiles.
- Institución, fechas y detalle de la participación en el servicio social.
- Años individuales de cada proyecto, si se desea sustituir el intervalo general 2025–2026.
