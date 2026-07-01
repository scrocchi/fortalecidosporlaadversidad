# DESIGN.md — Versión 06 · Suizo / Tipográfico

> Dirección de diseño para el inicio de la landing de **Fortalecidos Por la Adversidad** (marca organizadora: **Operación Esperanza**). Una de tres direcciones nuevas que comparten una estética base minimalista tipo Apple/UNICEF. Este documento es la fuente de verdad; `index.html` es una proyección de él.

---

## 1. Artifact type

Landing page de captación de registros (lead capture) con propósito solidario. Región única y continua: hero → en números → causa (con video) → teaser de speakers → CTA final. Prioridades del tipo: **una acción primaria inequívoca** (registro gratis, todos los CTA → grupo de WhatsApp), **prueba de escala escaneable** y **confianza**. Densidad baja, mucho aire.

## 2. Discovery — posicionamiento y audiencia

- **Quién:** comunidad hispanohablante interesada en desarrollo personal, finanzas, mentalidad y espiritualidad, movilizada por la causa de Venezuela.
- **Por qué / acción primaria:** registrarse gratis. Acción secundaria (durante el evento, no en la web): donar.
- **Posicionamiento de esta versión:** **Swiss / International Typographic Style** — la más austera y tipográfica de las tres. La tipografía *es* el diseño. Tratamiento sobrio e igualitario del valor (24 conferencias) y la causa (Venezuela); el video documental es un elemento silencioso, enmarcado, que no domina.
- **Norte tonal del proyecto:** paz, esperanza, dignidad. Serio pero cálido; solidario, no sensacionalista.

## 3. Adjetivos de marca (commit)

**Preciso · austero · moderno · deliberado · atemporal.**

Esencia en 3 palabras: **la tipografía manda.**

## 4. Aesthetic commitment

**Estilo tipográfico suizo / internacional.** Composición asimétrica gobernada por una retícula estricta pero descentrada, reglas horizontales/verticales de 1px que dividen, y contrastes de escala tipográfica extremos (un H1 monumental junto a etiquetas diminutas y precisas). Casi monocromo: tinta near-black sobre blanco puro. Se diferencia de las otras versiones no por color sino por **composición y una sola familia grotesca llevada a escalas extremas**. Nada de serif editorial (V02) ni de split cálido sobre papel hueso (V03).

## 5. Tipografía (exacta)

- **Familia única:** **Switzer** (Fontshare, ITF Free Font License, uso comercial OK). Pesos 300 / 400 / 500 / 600 / 700 / 800. Neo-grotesca contemporánea de dibujo neutro y racional — el gesto suizo por excelencia, sin caer en el cliché de Space Grotesk/Geist ni en Inter/Helvetica del sistema.
- **Una sola familia a escalas extremas** en lugar de un par display+cuerpo: el contraste nace del tamaño y el peso, no de mezclar fuentes. Es la tesis del estilo.
- **No** Inter / Roboto / Arial / system como cara principal. **No** Space Grotesk / Geist / Instrument Serif por reflejo. **No** Fraunces, Clash ni Satoshi (ya usadas en otras versiones).
- **Escala modular:** ratio **1.333 (perfect fourth)**, base 16px, con extremos fluidos. Pasos: label 0.6875 / 0.75 / 0.875 / 1 / 1.1875 / 1.5 / 2 / 2.75rem, más `--t-3xl clamp(2.5→3.75rem)`, un **H1 `clamp(3→10.5rem)`** y **cifras `clamp(3.25→12rem)`** para "en números".
- **Detalles:** títulos en peso *medium/light* con tracking negativo (−0.015 a −0.028em) e interlínea sólida (0.92); etiquetas en mayúsculas con tracking +0.14em; cuerpo a 1.62 e interlínea; medida ≈ 58ch; numerales de cifras y contador con `tabular-nums`.

## 6. Paleta (OKLCH con rol y fallback hex)

Casi monocromo tinta sobre blanco; azul de marca como **único** acento funcional; tricolor SOLO como detalle mínimo. Cero gradientes.

| Rol | Token | Hex fallback | OKLCH | Uso |
|-----|-------|--------------|-------|-----|
| Fondo | `--bg` | `#FFFFFF` | `oklch(1 0 0)` | Fondo dominante (60) |
| Papel | `--paper` | `#FAFAF9` | `oklch(0.988 0.002 90)` | Banda "causa" near-white sutil |
| Tinta | `--ink` | `#15171B` | `oklch(0.215 0.008 265)` | Texto y reglas fuertes; no negro puro |
| Tinta 2 | `--ink-2` | `#5B6069` | `oklch(0.480 0.014 265)` | Texto secundario |
| Tinta 3 | `--ink-3` | `#8A8F98` | `oklch(0.635 0.012 265)` | Metadatos / etiquetas |
| Regla | `--rule` | `#E4E4E5` | `oklch(0.918 0.002 265)` | Líneas 1px |
| Regla 2 | `--rule-2` | `#CFD0D2` | `oklch(0.842 0.004 265)` | Bordes de botón fantasma |
| Azul | `--blue` | `#1B3A97` | `oklch(0.400 0.150 264)` | Único acento (índices, hover CTA) |
| Azul hover | `--blue-deep` | `#142C74` | `oklch(0.330 0.128 264)` | Estados |
| Dorado | `--gold` | `#F4B825` | `oklch(0.800 0.145 85)` | Tricolor mínimo (footer, contador) |
| Rojo | `--red` | `#D42A2A` | `oklch(0.560 0.205 27)` | Tricolor mínimo (punto del video, footer) |

Distribución ~90 neutro / 8 azul / 2 tricolor. El azul solo aparece en índices y en el hover del botón; el tricolor es literalmente un trío de barras de 0.55em en el footer y el punto rojo del pie de video.

## 7. Tokens núcleo

- **Tipografía:** ver §5. `--font: "Switzer"`.
- **Espaciado:** margen lateral fluido `--gutter clamp(1.25→5.5rem)`; aire vertical de sección `--sp-section clamp(6→10rem)`; escala 8/12/16/24/32/48/64px. Tight dentro de grupos, muy generoso entre secciones.
- **Radio:** **0 en TODO** (regla dura, forzada con `border-radius: 0 !important` global). Innegociable.
- **Reglas/sombra:** **una sola** técnica de separación — reglas de 1px (`--rule`) y whitespace. **Cero sombras difusas, cero glassmorphism decorativo.** El único blur es un backdrop-filter funcional en el header sticky para legibilidad al hacer scroll.
- **Motion:** `--ease cubic-bezier(0.22,0.61,0.36,1)` (ease-out), `--dur 220ms`.
- **Contenedor:** `--maxw 1560px`, medida de lectura `--measure 58ch`.

## 8. Craft layer

- **Layout:** grilla asimétrica descentrada. Hero = eyebrow + badge arriba, H1 monumental a sangre, y una **barra inferior de 3 celdas desiguales (1.4 / 1 / 1)** separadas por reglas verticales. "En números" = dos columnas con cifras gigantes alineadas a la línea base de etiquetas diminutas, divididas por reglas. Causa = split 0.9 / 1.1 con el video a la derecha. Speakers = grilla 3×2 de celdas rectangulares con bordes de 1px compartidos (sin tarjetas flotantes). Se rompe el reflejo "todo centrado en una columna".
- **Componentes y estados:** botones **rankeados por importancia** (primario tinta sólida → azul en hover con flecha que se desplaza 4px; secundario fantasma con borde). Estados hover/active/focus definidos; foco por `outline` de 2px con offset (visible sobre header sticky). El peso no cambia en hover (sin layout shift). Video nativo con `controls`, `preload="none"`, `poster` y fallback textual. Placeholders de ponente **dignos**: monograma + patrón de líneas diagonales sutiles + "Ponente por confirmar", sin stock de personas.
- **Motion:** aparición sutil `reveal` (opacity + translateY 14px, 500ms ease-out) vía IntersectionObserver, una sola vez por elemento; flecha de CTA en transform. Solo se animan transform y opacity. `prefers-reduced-motion` desactiva reveal y transiciones.
- **Iconografía:** sin set de iconos; el sistema es puramente tipográfico (flechas `→`, índices numéricos). Evita el tell del set por defecto.
- **Imagería:** un único video documental real y digno (rescate en Venezuela), enmarcado con regla de 1px y radius 0, sin dominar. Sin stock, sin blobs, sin ilustración genérica.
- **Accesibilidad (AA):** skip link; foco visible gestionado; targets ≥44–48px; contraste tinta `#15171B` sobre blanco ≈ 15:1, `--ink-2` ≈ 6.4:1, botón blanco sobre tinta AA; significado nunca solo por color (índices tienen texto, tricolor es decorativo `aria-hidden`); `alt` en logos; contador con `role="timer"` y `aria-label`; `prefers-reduced-motion` honrado; legible en escala de grises.

## 9. Signature move

**«Escala extrema en grilla asimétrica de reglas de 1px, puntuada por una sola estrella tricolor.»** El contraste brutal entre un H1/cifra monumental y etiquetas microscópicas letterspaced, sostenido por una retícula descentrada de líneas finas, con el color reducido a un único acento azul y el tricolor de marca como puntuación mínima.

## 10. Reservas de contenido

- Barra "Sábado · [Fecha] · [Hora] (hora Venezuela GMT-4)" + **contador regresivo** funcional con fecha placeholder editable en el `<script>` (`TARGET`, ISO con offset -04:00). Placeholders `[Fecha]`/`[Hora]` marcados con `data-*` para reemplazo.
- Ponentes: 6 celdas con nombre y foto por confirmar; ampliable a 24.

## 11. Slop self-audit

Puntuación estimada global: **9.5 / 10**. Sin tells activos.

- **Color:** ✅ sin gradientes, sin morado/índigo, fondo blanco (no cream por reflejo), un dominante (tinta) + un acento (azul), sin gradient text. Tricolor mínimo y decorativo.
- **Tipografía:** ✅ primaria no Inter/Roboto/Arial/system; no Space Grotesk/Geist/Instrument Serif; escala 1.333 (≥1.25); sin serif-itálica de hero; contraste por tamaño/peso. Nota deliberada: se usa **una sola familia** (Switzer) — es la tesis del estilo suizo, no un descuido; el "par" se sustituye por escalas extremas.
- **Layout:** ✅ no es hero+3cards+testimonios+CTA genérico; movimiento propio (grilla asimétrica de reglas, cifras monumentales); no todo centrado; sin tarjetas anidadas.
- **Detalle visual:** ✅ radius 0 forzado; sin side-tab border; sin borde+sombra difusa en el mismo elemento; sin glassmorphism decorativo; sin easing elástico.
- **Motion:** ✅ solo transform/opacity; ease-out <300ms (reveal 500ms de entrada, justificado y una sola vez); reduced-motion honrado.
- **Componentes:** ✅ estados completos; botones por importancia (no por color semántico); foco por outline gestionado; video con estados (poster/fallback); sin peso cambiante en hover.
- **Imagería:** ✅ video documental real, regrabado del contexto; placeholders de ponente dignos sin stock de personas.
- **Accesibilidad:** ✅ foco visible, teclado, targets, contraste AA, color no es el único canal, labels/alt, reduced-motion.
- **Signature:** ✅ presente e identificable (§9).
- **Copy:** ✅ español neutro, sin buzzwords, sin aforismos "Not a feature. A platform.", sin abuso de em-dash.

## 12. Changelog

- **v1.0** — Creación de la Versión 06 (Suizo / Tipográfico). Estética base compartida (blanco, radius 0, mucho aire, sin sombras, color restringido) + dirección propia suiza con Switzer a escalas extremas y grilla asimétrica de reglas.
