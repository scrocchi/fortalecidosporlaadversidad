# DESIGN.md — Versión 05 · Editorial institucional (UNICEF)

## Discovery (Phase 0)

- **Artefacto:** landing page / lead-capture con propósito solidario (inicio: hero → contexto → números → ponentes → CTA).
- **Audiencia y por qué:** comunidad hispanohablante movilizada por la causa del terremoto en Venezuela. Acción primaria: registrarse gratis (WhatsApp). Objetivo secundario: convertir en donantes durante el evento.
- **Positioning:** editorial institucional tipo UNICEF / reporte anual de ONG. Seriedad, transparencia y confianza; nunca dramatismo ni explotación de la tragedia.
- **Adjetivos (locked):** institucional, transparente, riguroso, humano, confiable.
- **Esencia (3 palabras):** documento, dignidad, retícula.

## Aesthetic commitment (Phase 1)

Minimalismo institucional tipo Apple/UNICEF sobre estética compartida de las 3 versiones nuevas: **fondo blanco, tinta near-black, border-radius 0 en todo, mucho aire, separación por hairlines de 1px (sin sombras), color muy restringido**. Diferenciación de esta versión: tratar la página como un **documento con retícula visible** (reporte anual), con folios de sección y una regla tricolor fina como firma.

## Tipografía (justificada)

- **Public Sans** — cara principal (kickers, cuerpo, meta, botones, cifras). Es la tipografía oficial del gobierno federal de EE. UU.: connota transparencia, servicio público y neutralidad institucional. No es Inter/Roboto/Arial/system. Encaja con "institucional/confiable".
- **Source Serif 4** — serif institucional discreto, sólo para titulares (H1, section titles, standfirsts, cifras grandes). Aporta gravedad de "documento" sin caer en el serif-italic-hero de moda (no Fraunces).
- **Pairing:** serif display + sans workhorse = contraste real, sin mud. Máximo 2 familias.
- **Escala:** modular ratio 1.25 (major third), base 16px. H1 fluido `clamp(2.75rem, 6.4vw, 5.25rem)`.

## Color (OKLCH, 60-30-10)

| Rol | Token | Hex | Uso |
|-----|-------|-----|-----|
| Papel | `--paper` | `#FFFFFF` | fondo (60%) |
| Papel sub | `--paper-sub` | `#FAFAFA` | bandas alternas |
| Tinta | `--ink` | `#14161B` | texto (near-black, no negro puro) |
| Tinta suave | `--ink-soft` | `#4A4F59` | secundario |
| Tinta tenue | `--ink-faint` | `#767B85` | meta/captions |
| Hairline | `--line` | `#E4E5E8` | grilla 1px |
| **Azul marca** | `--blue` | `#1B3A97` | acento único (30%) — folios, kickers, CTA, sección final |
| Amarillo | `--gold` | `#F4B825` | sólo regla tricolor + hover CTA en banda azul (10%) |
| Rojo | `--red` | `#D42A2A` | sólo regla tricolor (10%) |

Cero gradientes. Tricolor **exclusivamente** como detalle mínimo (regla fina de 3px). Jerarquía por tamaño/peso, no por color.

## Tokens

- **Espacio:** base 8 → 0.25/0.5/0.75/1/1.5/2/3/4rem; `--section-y: clamp(6rem, 11vw, 10rem)`.
- **Radio:** `0` en todo (regla dura de la estética).
- **Sombra:** ninguna. Elevación/separación = whitespace + hairlines 1px.
- **Grid:** `--maxw: 1240px`, `--gutter: clamp(1.25rem, 4vw, 3.5rem)`, 12 columnas.
- **Motion:** `--ease: cubic-bezier(0.22,0.61,0.36,1)`, `--dur: 220ms`.

## Signature move

**"Retícula-documento"** — retícula editorial de 12 columnas **visible** (overlay de hairlines de 1px detrás del hero) + sistema de **folios de sección** (`§01 … §05`) con encabezados de regla superior + **regla tricolor fina** (azul/amarillo/rojo) como firma recurrente. La página se lee como un reporte institucional.

## Craft layer (Phase 2)

- **Layout:** hero alineado a la izquierda sobre grid 8/4 (contenido + ficha/colofón derecha con datos y contador). Metabar de 3 celdas con divisores verticales. Números y ponentes como **tablas/grillas con hairlines** (no cards flotantes). Composición asimétrica, no columna centrada.
- **Componentes + estados:** botones rankeados por importancia (primary azul relleno / ghost outline), no por color-significado. Estados hover/active/focus definidos; focus con `outline` azul 3px visible (no removido). Cards de ponente con hover `--blue-wash`. Video con `controls`, `poster`, `preload=none`, `playsinline`, marco rectangular radius 0 + figcaption tipo pie de figura ("Fig. 01").
- **Ponentes (placeholder digno):** silueta con textura de líneas + monograma en marco azul + "Ponente por confirmar" + tema real + "Foto por publicar". Sin stock de personas.
- **Motion:** sólo `opacity`/`transform`, reveal <300–420ms ease-out vía IntersectionObserver; contador regresivo (placeholder referencial: próximo sábado 9:00 Venezuela). `prefers-reduced-motion` desactiva reveal y smooth-scroll.
- **Iconografía:** sin set de íconos (decisión institucional: numeración/folios y hairlines en lugar de íconos sueltos → evita el tell del icon-tile).
- **Imagery:** video documental real (con dignidad); logo de marca; sin gradient blobs ni stock.
- **A11y:** skip-link, contraste AA (tinta/azul sobre blanco; blanco sobre azul en banda final), targets ≥48px, foco visible gestionado, `role="timer"`, `alt` en logos, `aria-hidden` en decoraciones. Español neutro con acentos.

## Reserva de contenido

- Fecha/hora: "Sábado · por confirmar · 9:00 a.m. (Venezuela)" en la ficha (factsheet) + contador placeholder.
- Ponentes reales: 6 espacios reservados listos para nombre + foto.

## Slop self-audit

- Color: sin morado/indigo; azul de marca como acento único; sin gradient text; fondo blanco por decisión, no cream-by-reflex. **PASS**
- Tipografía: Public Sans (no Inter/Roboto/system) + Source Serif 4; display≠body; ratio 1.25; sin icon-tile; folios usados sólo porque el documento es secuencial/institucional. **PASS**
- Layout: no hero+3cards genérico; move intencional (retícula-documento + tablas con hairlines); no todo centrado. **PASS**
- Detalle visual: sin side-tab border; **nunca** hairline+shadow juntos (0 sombras); radius 0; sin glassmorphism decorativo. **PASS**
- Motion: sólo opacity/transform, ease-out <300ms (reveal 420ms enter), respeta reduced-motion. **PASS**
- Componentes: botones por jerarquía; estados completos; focus por outline visible; cifras con `tabular-nums`. **PASS**
- A11y AA: foco visible, keyboard-operable, targets ≥44–48px, sin significado sólo por color, contraste AA. **PASS**
- Signature presente e identificable. **PASS**

**Score estimado: 9.5/10.** Riesgo menor: folios `§NN` podrían leerse como el tell "01/02/03" — mitigado porque el contenido es genuinamente secuencial y el recurso es coherente con el lenguaje de documento institucional.

## Changelog

- v1.0.0 — Versión inicial 05 (editorial institucional / UNICEF).
