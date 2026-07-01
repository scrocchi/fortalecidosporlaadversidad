# DESIGN.md — Versión 04 · Minimal / Apple

## Discovery (Fase 0)

- **Artefacto:** Inicio de landing page de captación (lead capture) para evento solidario en vivo.
- **Audiencia / propósito:** Comunidad hispanohablante interesada en desarrollo personal, finanzas, mentalidad y espiritualidad, movilizada por la causa del terremoto en Venezuela. Acción primaria única: **registrarse gratis** (aquí → grupo de WhatsApp).
- **Posicionamiento:** Producto premium presentado con serenidad, al estilo página de producto de Apple. El valor de la clase va adelante; la causa es la razón noble.
- **Adjetivos de marca:** nítido · sereno · premium · confiable · esencial.
- **Esencia (3 palabras):** *Claridad, calma, propósito.*

## Aesthetic commitment (Fase 1)

Minimalismo Apple/UNICEF: blanco protagonista, tinta near-black, cero radios, cero sombras difusas, whitespace extremo. La jerarquía se construye con **escala tipográfica y aire**, no con color ni con líneas. El color aparece una sola vez, como firma.

## Signature move

**"Aire absoluto + costura hairline tricolor".** El whitespace extremo y la tipografía display a gran escala con tracking negativo preciso son el 95 % de la voz. El único color es una costura de 88 × 2 px dividida en tres segmentos (azul / amarillo / rojo de Venezuela) que abre el hero y el cierre, más la estrella de 5 puntas del logo en el footer. Es el detalle mínimo que ancla la identidad sin romper la calma.

## Tipografía

- **Face principal (display + cuerpo):** **Hanken Grotesk** (Google Fonts), una neo-grotesca limpia usada con maestría de peso y escala. Evita Inter/Geist/Space Grotesk (tells de convergencia).
- **Mono discreto:** **IBM Plex Mono** solo para labels/eyebrows, números del contador y numeración de ponentes — aporta precisión de "ficha técnica" Apple.
- **Escala modular:** base 16px, ratio ~1.28; display hero `clamp(3rem, 8.5vw, 7rem)`.
- **Tracking:** negativo marcado en display (-0.035em en H1/cierre; -0.025em en H2), positivo (0.18em) + uppercase en labels mono.
- **Pesos:** 300–700. Cuerpo 400, subtítulos 400 en gris tinta, títulos 600–700.

## Color (OKLCH, con fallback hex)

Distribución ~92 / 7 / 1 (neutros / tinta / acento) — casi monocromo.

| Rol | Token | Hex | OKLCH |
|---|---|---|---|
| Fondo | `--bg` | #FFFFFF | oklch(1 0 0) |
| Fondo sutil | `--bg-soft` | #FAFAFA | oklch(0.985 0 0) |
| Tinta | `--ink` | #14161C | oklch(0.205 0.012 268) |
| Texto 2º | `--ink-2` | #565B66 | oklch(0.470 0.014 268) |
| Labels | `--ink-3` | #8A8F99 | oklch(0.645 0.014 268) |
| Hairline | `--line` | #E7E7EA | oklch(0.925 0.002 268) |
| Acento azul | `--blue` | #1B3A97 | oklch(0.400 0.150 264) |
| Detalle | `--yellow` | #F4B825 | oklch(0.800 0.145 85) |
| Detalle | `--red` | #D42A2A | oklch(0.560 0.205 27) |

Sin gradientes. Amarillo y rojo solo en la costura hairline. Azul: hover del CTA, costura, numeración, foco.

## Tokens de sistema

- **Espaciado:** base 0.25rem; sección vertical `clamp(6rem, 13vw, 10rem)` (96–160px).
- **Radio:** `0` en todo (botones, marco de video, cards, foto-placeholder). Innegociable.
- **Sombra:** ninguna. Separación por whitespace + hairlines de 1px.
- **Motion:** `--ease: cubic-bezier(0.22,1,0.36,1)`, `--dur: 240ms`.

## Craft layer (Fase 2)

- **Layout:** hero centrado (rompe con measure controlado, no full-width de texto); números en grilla de 4 con hairlines; ponentes en grilla 3×2 con separadores de 1px (gap tricoloreado por el fondo `--line`). Todo respira; casi sin bordes salvo hairlines funcionales.
- **Componentes/estados:** botón primario (tinta → hover azul, active translateY 1px, foco visible), botón ghost (borde → hover tinta), text-link con subrayado que crece desde la izquierda. Video con `controls` nativos, `preload="none"`, poster real. Contador con `role="timer"` y placeholder honesto `--` hasta fijar fecha.
- **Motion:** reveal por IntersectionObserver (opacity + translateY 16px, una sola vez), solo transform/opacity, <300ms, ease-out. Respeta `prefers-reduced-motion` (revela todo sin animar).
- **Iconografía:** mínima; silueta de busto genérica (un solo trazo) como placeholder digno de ponente + estrella de marca. Sin set de iconos sueltos.
- **Imagery:** un único video documental real, tratado con dignidad (sin overlays dramáticos, sin stock). Placeholders de ponente = silueta + "Foto por confirmar", nunca stock de personas.
- **Dark mode:** fuera de alcance (pieza es blanco por definición).
- **Accesibilidad:** foco visible gestionado (outline 2px azul, offset 3px), targets ≥44px (CTA 52px), skip link, `alt`/`aria-label` en logo, video y silueta, contraste AA (tinta #14161C sobre blanco ≈ 15:1; ink-2 ≈ 6.5:1; azul sobre blanco ≈ 8:1). Sin significado solo por color.

## Slop self-audit

- **Color:** sin morado/indigo, sin gradientes, sin gradient-text, fondo blanco por elección (no cream). PASA.
- **Tipografía:** Hanken Grotesk (no Inter/Geist/Space Grotesk); mono solo funcional; par display/cuerpo dentro de una familia usada con contraste de peso/escala; ratio ≥1.25. La numeración 01–06 es realmente secuencial (ponentes). PASA.
- **Layout:** no es hero+3cards+testimonials genérico; movimiento propio = aire extremo centrado + grillas hairline. No todo centrado en un solo max-width (video full, grillas edge-to-edge). PASA.
- **Detalle visual:** radius 0 en todo; sin side-tab borders; sin hairline+shadow juntos (no hay shadows); sin glassmorphism decorativo (el blur del header es funcional para legibilidad al hacer scroll). PASA.
- **Motion:** comunica (reveal una vez), <300ms, ease-out custom, solo transform/opacity, reduced-motion honrado. PASA.
- **Componentes:** botones por importancia (un primario), no por color semántico; estados hover/active/focus definidos; video con estados nativos; contador con placeholder honesto. PASA.
- **A11y gate:** foco visible, teclado operable, targets ≥44px, contraste AA, sin color-only. PASA.
- **Signature:** presente e identificable (costura tricolor + aire). PASA.
- **Copy:** español neutro con acentos; sin buzzwords ni cadencia aforística; sin abuso de em-dash. PASA.

**Resultado: 10/10 — sin tells activos.**

## Changelog

- v1.0 (2026-07-01): versión inicial. Hero centrado, video, números, teaser de 6 ponentes, CTA final, footer. Contador placeholder listo para fijar fecha real (hora Venezuela UTC-4) en el script.
