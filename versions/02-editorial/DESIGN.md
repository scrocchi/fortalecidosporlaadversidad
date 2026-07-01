# DESIGN.md — Versión 02 · Editorial claro / Institucional

## Artifact type
Landing page de registro (lead capture) para un evento solidario digital en vivo. Región única, marketing/landing. Acción primaria: registrarse gratis (CTA a WhatsApp). Acción secundaria (fuera de la web): donar durante el evento.

## Positioning
Institucional, luminoso, premium — una **masterclass con propósito**. El valor va adelante (la promesa de la clase + la credibilidad), el video tiene protagonismo *contenido*, no de wallpaper. Referencias de sensación: UNICEF / ONU / Apple — mucho aire, blanco, tipografía grande y serena, restraint.

## Adjetivos de marca (commit)
Claro · sereno · profesional · esperanzador · confiable.
Esencia en 3 palabras: **luz, dignidad, oficio** (calm, editorial, institutional).

## Aesthetic commitment
Editorial institucional luminoso: canvas blanco/off-white, retícula clara que respira, titulares serif cálidos (dignidad + calidez) sobre una base sans humanista de alta legibilidad. Restraint deliberado: la calma se construye con espacio, no con efectos. Nada de glassmorphism, gradientes decorativos ni cards con acento lateral.

## Tipografía (exacta)
- **Display / titulares:** **Fraunces** (serif humanista con eje óptico; pesos 400/500/600/700, `font-optical-sizing:auto`). Aporta la voz editorial cálida y digna; se usa **en upright**, nunca como el reflejo "hero italic-serif". Roles: H1 (nombre de marca), H2 de sección, subtítulos-lead, numerales de stats/countdown y nombres de speaker.
- **Cuerpo / UI:** **Libre Franklin** (gótico humanista institucional, pesos 400/500/600/700). Workhorse: cuerpo, eyebrows, chips, botones, meta, footer.
- Ninguna es Inter/Roboto/Arial/system. Contraste real display↔body (serif vs sans humanista), sin mud tipográfico.
- **Escala modular:** Perfect fourth (**1.333**), base 16px. 6+ pasos; display fluido con `clamp()`.
- Tracking: titulares apretados (−.015 a −.025em); eyebrows/overlines +.11 a .14em uppercase; cuerpo 0. Leading cuerpo 1.65–1.7; titulares 1.05–1.25. Measure de lectura ~62ch.

## Paleta OKLCH (roles · 60-30-10)
Autoría en OKLCH con fallback hex vía `@supports`.

| Rol | OKLCH | Hex | Uso |
|---|---|---|---|
| bg (60) | `oklch(0.985 0.003 255)` | `#fafafb` | Fondo off-white dominante |
| surface | `oklch(1 0 0)` | `#ffffff` | Cards, header, footer, video shell |
| surface-2 | `oklch(0.965 0.008 262)` | `#f4f6fb` | Wells (countdown, foto speaker) |
| ink (fg) | `oklch(0.255 0.032 264)` | `#1a2338` | Texto principal (tinta azulada, no negro puro) |
| muted | `oklch(0.505 0.028 268)` | `#59607a` | Texto secundario |
| faint | `oklch(0.655 0.024 270)` | `#8a90a6` | Labels, meta terciaria |
| border | `oklch(0.925 0.007 264)` | `#e5e8f0` | Bordes 1px (edge definido, sin sombra encima) |
| **brand (30)** | `oklch(0.402 0.152 264)` | `#1b3a97` | Azul real de marca: CTA primario, titulares acento, banda de números, links |
| brand-strong | `oklch(0.335 0.14 264)` | `#142d78` | Hover del CTA |
| brand-wash | `oklch(0.955 0.022 264)` | `#edf1fb` | Halo del hero, hover ghost, fondo medallón |
| on-brand | `oklch(0.97 0.006 264)` | `#f5f7fd` | Texto sobre banda azul |
| **amber (10)** | `oklch(0.808 0.14 84)` | `#f4b825` | Detalle mínimo: estrella, regla tricolor, punto "por confirmar" (solo gráfico, nunca texto) |
| **red (10)** | `oklch(0.552 0.202 27)` | `#d42a2a` | Detalle mínimo: tercio final de la regla tricolor |

Nota Blue-Ocean: el acento vive en H≈264 (banda azul/indigo). Es una **excepción justificada por el brief** — es el azul real literal del logo de Operación Esperanza; es azul de confianza institucional, no el indigo/violeta slop. Amarillo y rojo se mantienen como detalle <10%.

## Tokens
- Spacing base 4px; secciones `clamp(64px,10vw,128px)`; tight dentro de grupos, generoso entre secciones.
- Radius: **2 valores** — `6px` (botones, chips, wells) y `12px` (cards, video, event-card). Sin blob-rounding.
- Elevación: **un solo enfoque** — sombra suave con tinta transparente (`--shadow-1/2`), nunca borde hairline + sombra difusa sobre el mismo elemento (los bordes 1px van sin sombra; las cards elevadas van sin borde de acento).
- Motion: `--dur 240ms`, `--ease cubic-bezier(.22,.61,.36,1)`; reveal 460ms.

## Signature move
**"Aire institucional + la estrella guía."** Whitespace generoso como señal de confianza, más el motivo de la marca (la **estrella** del logo mano-corazón) como device gráfico recurrente y discreto: acompaña cada eyebrow, marca el microcopy, y es el emblema dentro del **medallón** de los speaker cards. Se refuerza con una **regla tricolor** fina (azul/amarillo/rojo) que ecoa el logo en el borde superior del sitio y del marco de video. Los **speaker cards** son el centro visual del inicio.

## Decisiones de craft
- **Layout:** rompe el reflejo centered-max-width. Hero asimétrico 2 columnas (copy editorial a la izquierda + módulo fecha/countdown a la derecha como ancla de credibilidad). "Por qué" en columna de lectura estrecha. Números en banda azul de ancho completo con divisores verticales. Speakers en grid 3→2→1.
- **Video contenido:** vive en un marco 16:9 deliberado dentro de "Por qué este evento" (`max-width:940px`, `preload="none"`, poster real, controles nativos, regla tricolor superior y caption digno). Presente y digno, jamás pantalla completa ni de fondo.
- **Componentes con estados completos:** botones rankeados por importancia (primary azul lleno / ghost con borde), no por color-significado. Estados hover/active/focus definidos; focus con box-shadow (sin desplazar layout); peso de fuente estable en hover. Cards con hover translate+shadow sutil.
- **Speaker cards (placeholders dignos):** medallón con estrella (no stock de gente random), número del área (01–08), tag de tema, "Ponente por confirmar", zona de foto con relación fija y "Foto por confirmar", y bloque "Su trasfondo" con bio breve placeholder. Se inyectan por JS desde un array editable.
- **Iconografía:** un set propio de line-icons (stroke 2, linecap/join round, grid 24) + la estrella sólida como firma. Sin emojis, sin set default sin modificar.
- **Motion comunicativo:** reveal opacity+translateY escalonado vía IntersectionObserver (solo transform/opacity), header shadow al hacer scroll, countdown referencial. `prefers-reduced-motion` corta transiciones y muestra todo, y detiene el intervalo del contador.
- **Contador:** placeholder referencial al próximo sábado 9:00 (hora local del navegador); la fecha exacta y la zona (Venezuela) quedan marcadas "por confirmar" en texto, sin inventar datos.

## Accesibilidad (gate AA)
- Skip link al registro; focus-visible gestionado (anillo doble box-shadow, no obstruido por el header).
- Contraste: ink `#1a2338` s/ blanco ≈ 13:1; muted ≈ 6:1; azul `#1b3a97` s/ blanco ≈ 8.9:1 y blanco s/ azul ≈ 8.9:1 (AA holgado). Amarillo/rojo solo como gráfico, nunca como texto sobre claro.
- Targets ≥48px (botones) / ≥44px (sm); toda interacción por teclado; significado nunca solo por color (labels + iconos + texto).
- `alt` en logos, `aria-label` en medallón, video con fallback textual, countdown `aria-hidden` (decorativo).
- Responsive verificado a 390px y 1440px; `clamp()` para tipografía; sobrevive zoom 200%.

## Slop audit
Ejecutado contra `references/slop-checklist.md`. Resultado: **sin tells activos.**
- Color: sin gradiente morado; sin gradient text; bg del sistema (no cream por reflejo); sobre azul se usa el mismo hue aclarado/desaturado, no gris; un dominante + acento nítido. ✔
- Tipografía: primary NO Inter/Roboto/etc.; par display+body real; ratio 1.333 (≥1.25); serif en upright (no el hero italic-serif por reflejo); sin icon-tile sobre heading. Los marcadores 01–08 son legítimos (áreas realmente numeradas en el copy). ✔
- Layout: no es hero+3cards+testimonials+CTA genérico; hay movida propia (hero asimétrico + banda de números + medallones). Sin cards anidadas; no todo centrado. ✔
- Detalle visual: **sin side-tab accent border**; sin hairline+sombra difusa sobre el mismo elemento; radius ≤12px; sin glassmorphism decorativo (el blur del header es funcional para legibilidad sticky). ✔
- Motion: solo transform/opacity; ease-out <300ms (custom bezier); sin bounce; sin animar layout; reduced-motion honrado. ✔
- Componentes/A11y: estados completos; focus por box-shadow; botones por jerarquía; contraste AA; targets ≥44px; grayscale-legible. ✔
- Imagery: sin stock de gente/blobs/orbs; se usa material documental real + placeholders honestos con device de marca. ✔
- Copy: español neutro (tú); sin buzzwords ni cadencia aforística; sin abuso de em-dash. ✔

## Changelog
- v1.0 — Dirección Editorial claro / Institucional. Fraunces + Libre Franklin; azul de marca 60-30-10; signature "Aire institucional + la estrella guía"; video contenido en marco 16:9; speaker cards como centro visual. Slop-audit sin tells.
