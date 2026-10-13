---
colors:
  background: "#f6e8d9"
  primary: "#d33659"
  secondary: "#eea3ad"
  accent: "#f7d97b"
  text: "#231f20"
  on-primary: "{colors.background}"
  on-accent: "{colors.text}"
  # TODO: revisar - color variable por proyecto, debe ser oscuro y legible sobre {colors.accent}
  project: "#4a3aff"
  error: "{colors.primary}"
  success-accent: "{colors.accent}"
typography:
  display:
    family: "Please Display VF"
    weight: 700
    transform: "uppercase"
    letter-spacing: "-0.02em" # TODO: revisar - valor propuesto, el original dice "interletrado ajustado"
    line-height: 0.9
    sizes:
      desktop: "96-160px"
      mobile: "56-72px"
  section:
    family: "{typography.display.family}"
    weight: 700
    transform: "uppercase"
    line-height: 0.9
    sizes:
      desktop: "64px"
      mobile: "40px"
  subtitle:
    family: "{typography.display.family}"
    weight: 700
    transform: "uppercase"
    line-height: 1.0 # TODO: revisar - valor propuesto, no especificado en original
    sizes:
      desktop: "32px"
      mobile: "24px"
  body:
    family: "Poppins"
    weight: 400
    line-height: 1.5
    max-ch: 75
    sizes:
      desktop: "16-18px"
      mobile: "16px"
  label:
    family: "Poppins"
    weight: 700
    sizes: "14-16px"
  button:
    family: "Poppins"
    weight: 700
spacing:
  xs: "8px"
  sm: "16px"
  md: "24px"
  lg: "48px"
  xl: "64px"
  xxl: "96px"
  section-gap: "64-96px"
  related-gap: "16-24px"
  container-max: "1280px"
  grid-columns: 12
  gutter: "16px"
  margin-desktop: "48px"
  margin-presentation: "96px"
  margin-mobile: "16-20px"
  mosaic-gap: "8-12px"
rounded:
  tag: "8px"
  button: "12px"
  card: "20px"
  box: "20px"
  mosaic-image: "0px"
components:
  button-primary:
    background: "{colors.primary}"
    text: "{colors.on-primary}"
    font: "{typography.button.family}"
    padding: "14px 28px"
    radius: "{rounded.button}"
    border: "none"
    shadow: "none"
    hover-scale: "104%"
    hover-transition: "200ms"
    active-scale: "97%"
    focus-ring: "2px solid {colors.text} + 2px offset"
  button-secondary:
    text: "{colors.text}"
    font: "{typography.button.family}"
    underline: "4px solid {colors.accent}"
    hover: "underline crece a resaltado {colors.accent} en 200ms"
  project-card:
    background: "{colors.background}"
    radius: "{rounded.card}"
    shadow: "none"
    image-radius: "{rounded.mosaic-image}"
    title-font: "{typography.display.family}"
    hover-zoom: "103%"
  tag-primary:
    background: "{colors.primary}"
    text: "{colors.on-primary}"
    radius: "{rounded.tag}"
    font: "{typography.label.family}"
  tag-secondary:
    background: "{colors.secondary}"
    text: "{colors.primary}"
    radius: "{rounded.tag}"
    font: "{typography.label.family}"
  feature-box:
    background: "{colors.primary}"
    text: "{colors.on-primary}"
    radius: "{rounded.box}"
    min-font-size: "16px"
  program-icon:
    background: "{colors.primary}"
    text: "{colors.on-primary}"
    radius: "{rounded.button}" # TODO: revisar - valor propuesto, original dice "esquinas redondeadas" sin px
  link:
    text: "{colors.text}"
    underline: "{colors.accent}"
---

# Overview

Portafolio cálido, amigable y alegre, como una conversación cercana con una diseñadora que disfruta lo que hace. Pensado para posibles clientes que quieren ver de un vistazo cómo se adapta el diseño a cada marca.

La paleta nace del gusto personal: amarillo y rosa como favoritos, beige como neutro cálido que sustituye al blanco frío. Diseño denso pero nunca saturado: títulos grandes y contundentes en `{typography.display.family}`, bloques de color delimitados, mucha imagen y estrellas amarillas como firma. Los proyectos aportan sus propios colores (`{colors.project}`) y el sistema los enmarca sin competir.

# Colors

- **Background `{colors.background}` #f6e8d9:** fondo general de todo el portafolio. Lienzo neutro, nunca se reemplaza por blanco puro.
- **Primary `{colors.primary}` #d33659 (rosa mexicano):** voz principal. Títulos grandes, títulos de sección que abren cada proyecto, botones principales, cajas destacadas y etiquetas principales. Sobre este fondo, texto en `{colors.on-primary}`.
- **Secondary `{colors.secondary}` #eea3ad (rosa claro):** color para destacar. Fondo de secciones como "Sobre mí", eco detrás de títulos grandes y etiquetas secundarias. Sobre este fondo, títulos en `{colors.primary}` y cuerpo en `{colors.text}`.
- **Accent `{colors.accent}` #f7d97b (amarillo):** energía. Estrellas, bloques de fondo de títulos de proyecto, subrayado de enlaces y resaltados. Nunca se usa como color de texto.
- **Text `{colors.text}` #231f20 (negro suave):** todo el cuerpo y textos pequeños sobre fondos claros (`{colors.background}`, `{colors.accent}`, `{colors.secondary}`).
- **Project `{colors.project}`:** <!-- TODO: revisar - color variable por proyecto --> color fuerte tomado del propio proyecto. Vive solo en el título sobre bloque `{colors.accent}` y dentro de las imágenes. Debe ser lo bastante oscuro para leerse sobre amarillo.
- **Estados:** enlaces con subrayado `{colors.accent}` y texto `{colors.text}`; error en `{colors.primary}`; confirmación en bloque `{colors.accent}` con texto `{colors.text}`.

Contraste: texto `{colors.background}` sobre `{colors.primary}` es moderado (~3.9:1), usar 16px o más y peso Medium o superior.

# Typography

- **Display `{typography.display.family}`:** títulos y subtítulos de sección. Siempre mayúsculas, bold, `letter-spacing {typography.display.letter-spacing}`, `line-height {typography.display.line-height}`.
- **Body / UI `Poppins`:** todo lo demás. `Poppins Bold` para etiquetas, datos destacados y botones (`{typography.button}` / `{typography.label}`); `Poppins Regular` para cuerpo (`{typography.body}`). No se necesita fuente de código.
- **Eco de título:** copia del texto en `{colors.secondary}`, desplazada ~4% del tamaño hacia abajo-derecha, sin desenfoque, detrás del título en `{colors.primary}`. Recurso tipográfico, no sombra. No se usa en subtítulos pequeños ni títulos de proyecto en `{colors.project}`.
- **Escala (desktop / móvil):** principal `{typography.display.sizes.desktop} / {typography.display.sizes.mobile}`; sección `{typography.section.sizes.desktop} / {typography.section.sizes.mobile}`; subtítulo `{typography.subtitle.sizes.desktop} / {typography.subtitle.sizes.mobile}`; cuerpo `{typography.body.sizes.desktop} / {typography.body.sizes.mobile}` con `line-height {typography.body.line-height}` y máximo `{typography.body.max-ch}` caracteres; etiquetas `{typography.label.sizes}`.
- Presentación 1920x1080 mantiene las mismas proporciones.

# Layout

Denso pero con aire: bloques de color y mosaicos bien organizados, sin saturar.

- **Desktop:** contenido máximo `{spacing.container-max}`, rejilla 12 columnas, canal `{spacing.gutter}`, márgenes `{spacing.lg}`. En presentación, márgenes `{spacing.margin-presentation}`.
- **Estructura de proyecto, en orden:**
  1. Portada de sección: estrella amarilla grande recortada por el borde + tipo de proyecto en `{colors.primary}` con eco `{colors.secondary}`.
  2. Panel + mosaico: panel `{colors.accent}` a la izquierda (3/12 col) con nombre en `{colors.project}`; mosaico asimétrico a la derecha (9 col). Imágenes llenan su celda, separadas por canales beige `{spacing.mosaic-gap}`. Mezcla de celdas anchas, altas y cuadradas.
  3. Descripción: caja `{colors.primary}` con texto `{colors.on-primary}`, 2-3 párrafos cortos. Si cabe en ~60 palabras va en el panel amarillo; si no, en sección propia antes del mosaico.
- **Tableta 768-1199px:** panel amarillo arriba a todo el ancho, mosaico a 2 columnas.
- **Móvil <768px:** una columna, márgenes `{spacing.margin-mobile}`; panel amarillo arriba; mosaico 1 col para anchas y 2 col para detalles; títulos según escala móvil; cajas y botones a todo el ancho; estrellas reducidas y recortadas.
- **Espaciado:** entre secciones `{spacing.section-gap}`; entre relacionados `{spacing.related-gap}`.

# Elevation & Depth

Diseño plano. Única sombra permitida: imágenes y estrellas sobre fondos planos claros (`{colors.background}`, `{colors.secondary}`).

Sombra suave, difusa y discreta: negra, sin desplazamiento X, Y 4-8px, blur 16-24px, opacidad 15-25%. <!-- TODO: revisar - valor token propuesto: `0 6px 20px rgba(35,31,32,0.20)` --> Debe sentirse como borde borroso que levanta, no sombra marcada.

Sin sombra: botones, tarjetas, cajas, etiquetas, iconos, panel `{colors.accent}` y cualquier elemento con fondo fuerte. El eco de títulos no cuenta como sombra.

# Shapes

- Esquinas semirredondeadas: etiquetas `{rounded.tag}`, botones `{rounded.button}`, cajas y tarjetas `{rounded.card}`. Imágenes del mosaico rectas `{rounded.mosaic-image}` para rejilla limpia.
- Único motivo: estrella amarilla `{colors.accent}` de puntas largas ligeramente asimétricas, puntas apenas redondeadas. Variantes de 8 puntas (destello) y 5 puntas alargadas, siempre con rotación irregular, nunca recta. En grande como fondo recortada por el borde; en pequeño como acento. No hay flores, patrones ni ondas.

# Components

- **Botón principal:** fondo `{components.button-primary.background}`, texto `{components.button-primary.text}` en `Poppins Bold`, radio `{rounded.button}`, padding `{components.button-primary.padding}`, sin sombra ni borde. Hover: crece a `{components.button-primary.hover-scale}` en 200ms + estrella amarilla brota en esquina superior derecha (0→1 con giro ~20° y rebote 250ms). Active: 97%. Foco teclado: contorno 2px `{colors.text}` con separación 2px. Con `prefers-reduced-motion`, estrella sin animar.
- **Botón secundario:** solo texto `{colors.text}` en Bold con subrayado grueso `{components.button-secondary.underline}`. Hover: el subrayado crece a resaltado detrás del texto en 200ms. El texto nunca cambia a amarillo.
- **Tarjeta de proyecto:** fondo `{components.project-card.background}`, plana, radio `{rounded.card}`. Imagen arriba + nombre en `Please Display` en `{colors.project}` + etiqueta de tipo. Hover: zoom imagen `{components.project-card.hover-zoom}` dentro de la tarjeta. Como la página es beige, colocar sobre fondo `{colors.accent}` o `{colors.secondary}`, o con separación clara.
- **Etiquetas:** principal fondo `{components.tag-primary.background}` texto `{components.tag-primary.text}`; secundaria fondo `{components.tag-secondary.background}` texto `{components.tag-secondary.text}`. Ambas `Poppins Bold`, planas, radio `{rounded.tag}`.
- **Caja destacada:** fondo `{components.feature-box.background}`, texto `{components.feature-box.text}` de 16px+, radio `{rounded.box}`, relleno generoso. Para descripción de proyecto y "Sobre mí".
- **Iconos de programas:** cuadrados redondeados en `{colors.primary}` con letras en `{colors.background}`.
- **Enlaces / estados:** enlace `{components.link.text}` con subrayado `{components.link.underline}`; error `{colors.error}`; confirmación bloque `{colors.success-accent}`.

# Do's and Don'ts

## Do's

- Usar solo los cinco colores (`{colors.background}`, `{colors.accent}`, `{colors.primary}`, `{colors.secondary}`, `{colors.text}`) con valores exactos, más `{colors.project}` solo en su título.
- Mantener `{colors.background}` como fondo general.
- Usar `Please Display VF` solo para títulos en mayúsculas bold, y `Poppins` para lo demás.
- Respetar jerarquía: título en `{colors.project}`, tipo en `{colors.primary}`, subtítulos, cuerpo.
- Texto oscuro `{colors.text}` sobre claros y `{colors.accent}`; texto `{colors.background}` sobre `{colors.primary}`.
- Texto sobre `{colors.primary}` en 16px+ y Medium o superior.
- Rosa `{colors.primary}` sobre `{colors.secondary}` solo para títulos grandes.
- Estrella como único motivo, siempre `{colors.accent}`, rotación irregular, a veces recortada.
- Sombra suave solo en imágenes y estrellas sobre fondos claros.
- Densidad con aire: canales y espaciados consistentes (`{spacing.mosaic-gap}`, `{spacing.section-gap}`).

## Don'ts

- Nunca blanco puro como fondo ni texto.
- Nunca mezclar fuentes en títulos ni usar ajenas; no estirar/deformar.
- Nunca títulos en minúsculas.
- Nunca sombra en botones, tarjetas, etiquetas ni fondos fuertes.
- Nunca mismo tono de claridad: oscuro sobre oscuro ni claro sobre claro. Evitar amarillo sobre beige, beige sobre amarillo o rosa claro, y rosa claro sobre beige o amarillo.
- Nunca `{colors.accent}` como texto.
- Nunca teñir estrellas ni agregar flores, patrones u ondas.
- Nunca `{colors.project}` claro que se pierda sobre `{colors.accent}`.
- Nunca más de dos colores de fondo por pantalla.
- Nunca tarjeta beige sobre fondo beige sin separación.
