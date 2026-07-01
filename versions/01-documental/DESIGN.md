# DESIGN.md — Fortalecidos Por la Adversidad · Versión 01 Documental

## Context (from discovery)

- Artifact type: Marketing / landing page (lead capture con propósito solidario). Región juzgada: el "inicio" (header + hero + prueba de escala + teaser de ponentes + cierre).
- Positioning: ONG / documental / periodístico. La causa va adelante; el video documental tiene protagonismo máximo.
- Audience: Comunidad hispanohablante movilizada por la causa, interesada en desarrollo personal, finanzas, mentalidad y espiritualidad. | Primary action: Registrarse gratis (CTA a WhatsApp).
- Adjectives: digno, real, urgente, humano, solemne.
- Visual word translations:
  - digno -> scrim fuerte sobre el material de rescate (no glamuriza la tragedia) + crédito explícito del footage.
  - real -> video documental REAL a sangre completa como fondo, ligeramente desaturado, no color-grade publicitario.
  - urgente -> contador regresivo, indicador "En vivo · sábado" con punto rojo pulsante, fecha/hora concreta.
  - humano -> serif editorial con eje óptico (Fraunces) + gótico humanista de herencia periodística (Libre Franklin); estrella de la marca como glifo cálido.
  - solemne -> tratamiento oscuro (azul casi negro, no negro puro), aire generoso, tricolor contenido a hairlines.
- Aesthetic essence (3 words): documental, solemne, luminoso-en-la-oscuridad.
- Single-minded proposition: "Aprende gratis este sábado y tu presencia se convierte en ayuda real para Venezuela."
- Archetype: Caregiver con inflexión Hero (rojo/azul/oro de bandera, rescate).
- References: admiro el tratamiento de foto-reportaje a sangre completa con scrim (documentales ONG serios, portadas editoriales tipo NYT/ProPublica), transpuesto no clonado; evito el look "telethon" saturado y el AI-slop de gradiente índigo/glass.
- Mode: dark (única dirección) | Density: airy.
- Constraints: sin build step (doble clic), CSS inline, fuentes por Google Fonts, assets por ruta relativa `../../assets/...`, AA, `prefers-reduced-motion`, responsive 390px–1440px, copy en español neutro.

## Aesthetic

- Direction: Documental editorial oscuro (foto-reportaje a sangre completa + tipografía de periódico).
- Defining trait: El video documental gobierna el hero; todo lo demás es un sistema tipográfico oscuro y aireado que lo respeta y contrasta con dignidad.
- Signature move: **"Línea de rescate"** — un hairline tricolor de 2px (cobalto -> dorado -> rojo, tomado del logo) que estructura la página (bajo cada eyebrow y encabezado de sección), acompañado por la **estrella de 5 puntas** del logo mano-corazón usada como glifo divisor en chips, stats y temas. Es el único elemento donde aparece el tricolor: fino, contenido, deliberado.

## Typography

- Display: **Fraunces** (variable, opsz 9–144, wght 400–700) | source: Google Fonts | license: OFL. Serif transicional/old-style con carácter y eje óptico; italic para el acento del H1.
- Body: **Libre Franklin** (wght 400–700) | source: Google Fonts | license: OFL. Gótico humanista de herencia Franklin Gothic (news/documental), legible y digno. NO Inter/Roboto/Arial/system.
- Scale: ratio ~1.28, base 16px, fluida con `clamp()`:

  | step | size (clamp máx) | line-height | uso |
  |------|------------------|-------------|-----|
  | step-5 | ~7rem | 1.06 | H1 hero |
  | step-4 | ~5rem | ~0.95 | números / H2 cierre |
  | step-3 | ~3rem | 1.06 | H2 sección |
  | step-2 | ~1.95rem | 1.05 | contador |
  | step-1 | ~1.4rem | 1.5 | subtítulo, lead |
  | step-0 | ~1.1rem | 1.6 | cuerpo |
  | step--1 | ~0.9rem | 1.5 | meta, chips, eyebrow |

- Weights: 400/500/600/700 | Measure: 62ch (var `--measure`) | Tracking: eyebrows en mayúsculas .16em; display con tracking negativo -.02/-.03em; números con `tabular-nums`.

## Color

- Strategy: Azul de marca (cobalto) como dominante, en territorio de confianza/dignidad; se evita por completo la banda índigo/violeta del default de IA. El acento de acción es **dorado** (luz/esperanza) — cálido, alto contraste sobre el oscuro, metáfora de "luz en la oscuridad". Rojo reservado a detalle/urgencia (hairline, punto "en vivo"). Dark tratado como modo diseñado, no invertido.
- Distribution: ~60 neutro azul-oscuro / ~30 marca cobalto / ~10 dorado.
- Palette (role -> OKLCH | hex):
  - bg: oklch(0.19 0.045 268) | #0c1330 (azul casi negro, no negro puro)
  - bg-2: oklch(0.24 0.055 268) | #111a3d
  - surface: oklch(0.28 0.06 268) | #16214a
  - fg: oklch(0.93 0.012 85) | #ede7db (hueso, no blanco puro)
  - muted: oklch(0.74 0.04 262) | #9fabcf
  - border: oklch(0.34 0.05 268) | #26315f (más claro que surface)
  - border-strong: oklch(0.42 0.06 268) | #37447a
  - brand: oklch(0.5 0.18 264) | #2f52c8
  - brand-hi (texto sobre oscuro): oklch(0.68 0.15 262) | #6f92f0
  - accent (gold, CTA): oklch(0.83 0.15 85) | #f4b825
  - accent-fg (ink on gold): oklch(0.2 0.03 70) | #1a1305
  - red (detalle/urgencia): oklch(0.56 0.2 27) | #d42a2a
- Dark mode overrides: N/A — dark es el único modo.

## Spacing, radius, shadow

- Spacing base: 8px, escala 0.5/1/1.5/2/3/4.5/6.5rem. Ritmo: apretado dentro de grupos, generoso entre secciones (padding de sección ~6.5rem).
- Radius: 2 valores — 4px (botones, chips-como-hairline, foco) y 10px (cards, contenedor de stats). Chips meta usan pill 999px por convención de etiqueta. Sin blob-rounding.
- Shadow approach: elevación suave translúcida (sombra negra transparente), una sola aproximación; los bordes definen las superficies. No se apilan hairline + sombra difusa en el mismo elemento (cards usan borde; el CTA primario usa un halo dorado sutil funcional, no decorativo).

## Layout and composition

- Grid: editorial. Hero a sangre completa alineado abajo-izquierda (rompe el reflejo "todo centrado"). Stats en tabla de 4 celdas con separadores hairline (no card-grid uniforme suelto). Ponentes en grid 1/2/3 col.
- Spacing rhythm: tight-within / loose-between.
- Signature layout move: video documental full-bleed con contenido anclado al pie del hero y crédito de footage abajo-derecha; barra de evento (fecha/hora + contador) separada por hairline.
- Density: airy | Scanning: F (hero izq -> stats -> ponentes -> cierre centrado).
- Responsive: mobile-first; breakpoints 560/600/720/900/980/1000px. Verificado a 390px y 1440px.

## Components and states

- Button hierarchy: primary (relleno dorado, texto tinta), ghost (borde + fondo translúcido). Rankeados por importancia, no coloreados por significado. Estados: hover (aclara fondo/borde), active (translateY 1px, sin cambio de peso -> sin layout shift), focus-visible (doble box-shadow bg+dorado).
- Inputs: N/A en este inicio (el formulario vive en la sección 7 fuera de alcance); los CTA son enlaces a WhatsApp con `target="_blank" rel="noopener"`.
- Tables: la grilla de stats usa `tabular-nums` en las cifras; separadores hairline, no bordes pesados.
- Overlays: ninguno en este alcance.
- Empty / loading / error: los ponentes son PLACEHOLDERS dignos por diseño (silueta de busto SVG + "Ponente por confirmar" + tema + "Su trasfondo se anunciará pronto"), no fotos de stock. El video tiene fallback `<img>` al poster.
- Focus ring: box-shadow doble (anillo bg + anillo dorado 2px), nunca outline removido sin reemplazo.

## Motion

- Duration scale: micro 140ms (press/hover botón), normal 220ms, reveal 520ms.
- Easing: `--ease: cubic-bezier(0.23, 1, 0.32, 1)` (ease-out fuerte, autorado, no keyword débil).
- What animates: solo `transform` y `opacity`. Reveal on-scroll vía IntersectionObserver (translateY 16px -> 0 + fade). reduced-motion: se desactiva el reveal (contenido visible de entrada), se apaga el pulso del punto "en vivo", y se quita el autoplay del video (queda el poster).
- Signature motion: entrada escalonada ligera por sección (no fade-up idéntico en todo); punto "En vivo" con pulso lento de 2.4s (única animación en bucle, funcional = urgencia).

## Iconography

- Set: mínimo y propio. Estrella de 5 puntas (glifo de marca) y una silueta de busto para placeholders de ponente; ambos SVG inline, misma familia visual (relleno sólido, sin trazo). Sin set de iconos default; sin emojis como iconos.

## Imagery and illustration

- Mode: fotografía/video documental real (material de rescate provisto) + placeholders vectoriales para ponentes.
- Rules: video ligeramente desaturado (saturate .82) y oscurecido (brightness .9) + scrim multi-parada + grano fino al 5.5% -> se trata con respeto y garantiza contraste del texto. Crédito visible: "Imágenes reales de labores de rescate."
- Avoid: stock de gente sonriente/señalando laptops, gradient blobs, glass, corporate-Memphis, Midjourney crudo. Los ponentes NO usan caras de stock.
- Text-over-image contrast: garantizado por el scrim inferior fuerte (bg 68–78% hacia el pie) donde vive todo el texto del hero.

## Dark mode

- Base bg oklch 0.19 (near-black azul, no #000) | fg oklch 0.93 (hueso, no #FFF) | elevación por pasos de lightness (bg -> bg-2 -> surface), no por sombras de color. Acento dorado desaturado que pasa contraste; bordes más claros que la superficie. Sin box-shadows de color brillantes por reflejo.

## Accessibility

- Contrast (AA): fg #ede7db sobre bg #0c1330 ~13:1; dorado #f4b825 sobre bg alto; texto tinta #1a1305 sobre dorado alto; muted #9fabcf sobre bg > 5:1. Verificado para cuerpo y large text.
- Focus: box-shadow doble visible y gestionado, no obstruido por el header sticky (el header no cubre el foco de los targets).
- Keyboard: totalmente operable (enlaces + skip link "Saltar al registro"). Targets: botones ≥48px (sm ≥44px), lockup de marca ≥44px.
- Color independence: el significado nunca depende solo del color — "En vivo" lleva texto además del punto; stats llevan etiqueta; UI legible en escala de grises. Reduced motion: honrado (reveal off, pulso off, autoplay off).

## Tokens (source of truth)

Ver `:root` en `index.html` (bloque `TOKENS`). Fallbacks hex + override OKLCH bajo `@supports (color: oklch())`. Fuentes: `--font-display: Fraunces`, `--font-body: Libre Franklin`.

- Adapter: plain CSS custom properties (sin build step).

## Cards and surfaces

- Cards de ponente: borde (no sombra) + radius 10px + padding ~1.35rem; foto placeholder con borde inferior hairline. Sin cards-dentro-de-cards. Stats: una sola superficie tabular dividida por hairlines.

## Slop audit

- Date: 2026-07-01 | Result: pass (0 tells activos).
- Notes:
  - Color: sin índigo/violeta; acento dorado fuera de la banda default; sin gradient text; bg viene de la paleta (azul oscuro, no cream); sin glow de color por reflejo. OK.
  - Tipografía: Fraunces + Libre Franklin (par display+cuerpo real, no Inter/Space Grotesk/Instrument Serif por reflejo); ratio ~1.28 (>1.25). El H1 usa italic serif pero es una decisión de marca (guiño editorial-documental), no el reflejo startup, y el tricolor lo ancla. OK.
  - Layout: no es "hero + 3 cards + testimonials + pricing"; hay movida propia (video full-bleed anclado + tabla de stats con hairlines + "Línea de rescate"). No todo centrado. OK.
  - Detalle: sin side-tab border; borde XOR sombra por elemento; radios ≤10px; sin glassmorphism decorativo (el blur del header es funcional). OK.
  - Motion: solo transform/opacity; ease-out autorado <300ms (excepto reveal 520ms de entrada, fade+translate suave); reduced-motion honrado; sin bounce. OK.
  - Imagery: material documental real tratado con dignidad; ponentes con placeholder vectorial, no stock. OK.
  - Accesibilidad (gate): foco visible gestionado, teclado, contraste AA, targets ≥24px (≥44/48px reales), independencia de color, reduced-motion. PASS.

## Changelog

- 2026-07-01: Creación de la Versión 01 Documental (header, hero con video, números, teaser de ponentes, cierre). Sistema de tokens, tipografía Fraunces + Libre Franklin, paleta oscura azul + acento dorado, signature "Línea de rescate". Slop-audit: pass.
