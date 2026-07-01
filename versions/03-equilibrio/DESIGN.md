# DESIGN.md — Versión 03 · Equilibrio / Split editorial premium

> Dirección de diseño para el inicio de la landing de **Fortalecidos Por la Adversidad** (marca organizadora: **Operación Esperanza**). Una de tres direcciones exploradas en paralelo. Este documento es la fuente de verdad; el `index.html` es una proyección de él.

---

## 1. Artifact type

Landing page de captación de registros (lead capture) con propósito solidario. Región única y continua (hero → números → causa → teaser de speakers → CTA final). Prioridades del tipo: una acción primaria inequívoca (registro gratis), prueba de escala escaneable, y confianza. Densidad baja, mucho aire.

## 2. Discovery — posicionamiento y audiencia

- **Quién:** comunidad hispanohablante interesada en desarrollo personal, finanzas, mentalidad y espiritualidad, movilizada por la causa de Venezuela.
- **Por qué / acción primaria:** registrarse gratis al evento en vivo (todos los CTA → grupo de WhatsApp). Acción secundaria (durante el evento, no en la web): donar.
- **Posicionamiento de esta versión:** moderno, cálido, editorial premium. El **valor** (24 conferencias / aprendizaje) y la **causa** (Venezuela) tienen el **mismo peso**; el video documental real tiene protagonismo **balanceado**, presente pero sin dominar.
- **Norte tonal del proyecto:** paz, esperanza, dignidad. Serio pero cálido; solidario, no sensacionalista.

## 3. Adjetivos de marca (commit)

**Equilibrado · cálido · moderno · solidario · premium.**

Esencia en 3 palabras: **corte editorial digno.**

## 4. Aesthetic commitment

**Editorial premium partido (split).** Composición a dos columnas con tipografía display confiada, base de papel cálido y una retícula intencional con etiquetas de índice. Se aleja del serif-editorial oscuro (Versión 02) y de la sans institucional pura (Versión 01) apoyándose en un **display grotesco de mucho carácter** sobre **papel hueso cálido**, no en una serif ni en una sans neutra.

## 5. Tipografía (exacta)

- **Display:** **Clash Display** (Fontshare, ITF Free Font License, uso comercial OK). Pesos 500/600/700. Grotesco display contemporáneo, confiado y premium; da el carácter editorial sin caer en la serif editorial ni en Inter/Instrument Serif.
- **Cuerpo:** **Satoshi** (Fontshare, ITF Free). Pesos 400/500/700. Grotesk limpio y neutro; hace de caballo de batalla legible y deja que el display lleve la voz.
- **No** Inter / Roboto / Arial / system como cara principal. **No** Space Grotesk / Geist / Instrument Serif por reflejo.
- **Escala modular:** ratio **1.25 (major third)**, base 16px. Pasos: 0.75 / 0.875 / 1 / 1.125 / 1.375 / 1.75 / 2.25 / 3rem, más un H1 fluido `clamp(2.75rem, 6vw, 4.75rem)`.
- **Detalles:** títulos con tracking negativo (−0.01 a −0.025em), cuerpo a 1.6 de interlínea, medida de lectura acotada (≈46–62ch), numerales de estadísticas y contador con `tabular-nums`.

## 6. Paleta (OKLCH con rol y fallback hex)

Derivada del logo (azul real dominante, dorado, rojo) sobre un papel hueso cálido. 60 neutro / 30 azul / 10 acento cálido.

| Rol | Token | OKLCH | Hex fallback | Uso |
|---|---|---|---|---|
| Fondo (60%) | `--bg` | `oklch(0.967 0.007 84)` | `#F6F3EC` | Lienzo hueso cálido (no blanco, no cream) |
| Panel | `--bg-panel` | `oklch(0.945 0.010 80)` | `#EDE7DA` | Secciones de números y speakers |
| Superficie | `--surface` | `oklch(0.988 0.005 85)` | `#FCFAF5` | Tarjetas, chips, datebar |
| Tinta | `--ink` | `oklch(0.245 0.032 262)` | `#232A3D` | Texto principal (azul-carbón, no negro puro) |
| Tinta suave | `--ink-soft` | `oklch(0.470 0.024 262)` | `#565D6E` | Texto secundario |
| Azul marca (30%) | `--blue` | `oklch(0.400 0.150 264)` | `#1B3A97` | Títulos de acento, números, enlaces |
| Azul profundo | `--blue-deep` | `oklch(0.325 0.125 264)` | `#142C73` | Panel del CTA final, marco de video |
| Azul lavado | `--blue-tint` | `oklch(0.925 0.022 262)` | `#E4E7F2` | Fondos de placeholder y tags |
| Dorado acento (10%) | `--gold` | `oklch(0.800 0.145 85)` | `#F4B825` | Relleno de CTA, acentos `$ % h` |
| Dorado hover | `--gold-deep` | `oklch(0.740 0.150 80)` | `#E0A413` | Hover de CTA |
| Rojo (detalle fino) | `--red` | `oklch(0.560 0.205 27)` | `#D42A2A` | Costura tricolor, punto "en vivo" |
| Borde | `--border` | `oklch(0.880 0.012 82)` | `#DED8CB` | Bordes cálidos definidos |

**Semántica:** el punto rojo "en vivo" y el dorado nunca portan significado en solitario — siempre acompañan texto (los propios números/etiquetas cargan el sentido). El acento (dorado, H≈85) queda muy lejos de la banda indigo/violeta.

**Contraste (AA):** tinta `#232A3D` sobre hueso ≈ 12:1; tinta-suave sobre hueso ≈ 6:1; CTA dorado con texto tinta ≈ 8:1; blanco sobre azul profundo ≈ 9:1.

## 7. Tokens (resumen)

- **Fuentes:** `--font-display: "Clash Display"`, `--font-body: "Satoshi"`.
- **Espacio (base 4px):** 4 / 8 / 12 / 16 / 24 / 32 / 48 / 64 / 96px. Ajustado por relación (junto dentro de grupos, generoso entre secciones vía `clamp(3.5rem, 8vw, 6.5rem)`).
- **Radio:** dos valores — `--radius-sm: 4px`, `--radius: 10px`. Sin blobs (≤16px).
- **Sombra:** UNA sola aproximación — elevación suave con negro transparente (`0 8px 24px -12px rgba(20,44,115,.18)`), aplicada solo a superficies elevadas (marco de video, hover de tarjeta). Bordes definidos van sin sombra; nunca ambos en el mismo elemento.
- **Movimiento:** `--ease-out: cubic-bezier(0.23, 1, 0.32, 1)`, `--dur: 220ms`.

## 8. Signature move

**"Costura tricolor + split editorial."** El corte del hero (mensaje | video) está marcado por una **costura vertical tricolor** (azul→dorado→rojo) sobre la línea del split. Ese mismo hilo tricolor reaparece, fino y con intención, como: barra fija de 4px en el borde superior de la página, subrayado del kicker de cada sección, franja superior del marco de video, y sello superior del panel de CTA. La retícula editorial (etiquetas de índice `01–06`, columnas asimétricas 1.02fr/0.98fr en hero y 0.85fr/1.15fr en la causa) completa el gesto. Un solo motivo, repetido con disciplina.

## 9. Craft-layer decisions

- **Layout:** rompe la columna centrada. Hero en split balanceado; números en fila editorial de 4 con separadores de 1px; causa en dos columnas asimétricas (titular breve | cuerpo con medida acotada); speakers en grilla 3-col que colapsa a 2/1. Whitespace generoso como señal de confianza.
- **Balance video/mensaje:** en desktop, columnas casi 50/50 (1.02fr / 0.98fr) — el video existe con dignidad enmarcado en azul profundo y su costura tricolor, pero el mensaje+CTA ocupan la columna de lectura primaria. Autoplay muted loop playsinline con `poster` y `preload="metadata"`. Caption honesto: "Material real de los equipos de rescate en Venezuela" — nunca explota la tragedia. En móvil el split se apila **mensaje primero, video después**: la propuesta de valor y el CTA se ven sin scroll; el material documental refuerza justo debajo.
- **Componentes y estados:** CTA primario (dorado relleno) / secundario (ghost con borde) / on-blue — jerarquizados por importancia, no por color semántico. Estados hover/active(scale .98)/focus-visible en todos. Tarjetas de speaker con placeholder digno: silueta neutra sobre azul lavado, índice `0X`, etiqueta "Foto por confirmar", tag temático (una de las 8 áreas), "Ponente por confirmar" y línea de "Su trasfondo: por anunciar". Sin stock de gente random. Sin side-tab borders. Sin cards anidadas.
- **Fecha y contador:** datebar con "Sábado 4 de julio · 9:00 a. m. (hora Venezuela, VET) · Fecha por confirmar" y contador regresivo funcional (JS, `tabular-nums`) hacia un objetivo placeholder (`2026-07-04T09:00:00-04:00`). Marcado explícitamente como placeholder para reemplazar cuando se confirme la fecha real.
- **Motion:** solo `transform`/`opacity`. Reveal ligero al hacer scroll (IntersectionObserver, stagger implícito por posición), `ease-out` a 550ms. Punto "en vivo" con pulso sutil de `box-shadow`. Sin bounce, sin animar layout. Red de seguridad: si el observer no dispara, un timeout revela todo (el contenido nunca queda oculto).
- **Iconografía:** set propio de trazo 1.8 (reloj, líneas, check) coherente; SVG de silueta único para placeholders. Sin emojis como iconos.
- **Imagery:** el único recurso fotográfico es el video documental **real** del proyecto, enmarcado y regrado por el contexto (marco azul). Textura de grano de papel muy sutil (SVG turbulence, opacidad ~3.5%) para calidez, no glassmorphism. Los speakers usan silueta digna, no stock.
- **Accesibilidad:** skip-link, foco visible gestionado (box-shadow, no outline suprimido), objetivos ≥44px, `prefers-reduced-motion` (reveal → sin transform, pulso desactivado), alt/aria-label en logo y video, jerarquía de headings sin saltos, contraste AA verificado, legible en escala de grises.

## 10. Adapter

CSS custom properties planas (sin build step). OKLCH con fallback hex vía `@supports`. Fuentes por `<link>` a Fontshare. Se abre con doble clic.

## 11. Slop-audit

Ejecutado contra `references/slop-checklist.md`. **Resultado: pasa.**

- **Color:** sin gradientes morados/indigo; acento dorado (H≈85) fuera de la banda 250–320; sin texto en gradiente; fondo hueso **elegido** desde el logo, no cream por reflejo; sobre azul se usa el mismo tono más oscuro, no gris; un dominante + un acento neto. ✅
- **Tipografía:** Clash Display + Satoshi (ni Inter/Roboto/system ni Space Grotesk/Geist/Instrument Serif por reflejo); display ≠ cuerpo; ratio 1.25 (≥1.25); sin tile-icono sobre título; los índices `01–06` numeran contenido genuinamente secuencial/enumerable (las 6 tarjetas). ✅
- **Layout:** no es hero + 3 cards + testimonios + pricing; hay un movimiento propio (split con costura tricolor + retícula asimétrica); no todo centrado en una columna. ✅
- **Detalle visual:** sin side-tab borders; nunca borde-fino + sombra difusa juntos; radios ≤10px; sin glassmorphism decorativo; sin radio uniforme de 16px. ✅
- **Motion:** comunica (reveal por entrada, press feedback); <300ms en interacción; solo transform/opacity; ease-out con cubic-bezier propio; respeta reduced-motion. ✅
- **Componentes:** botones jerarquizados por importancia; estados completos; foco por box-shadow; el peso de fuente no cambia en hover (sin layout shift). ✅
- **Imagery:** sin stock de gente-señalando-laptops, sin blobs ni orbes; el visual real (video de rescate) se usa donde corresponde; textura sutil presente. ✅
- **A11y gate:** foco visible, operable por teclado, targets ≥44px, significado nunca solo por color, labels/aria presentes, contraste AA. ✅
- **Signature move:** presente e identificable ("Costura tricolor + split editorial"). ✅
- **Copy:** español neutro (tú, acentos correctos); sin em-dash abusivo, sin buzzwords ("world-class", "supercharge"), sin cadencias aforísticas huecas. ✅

**Riesgo residual:** la dupla Clash Display + Satoshi es la pareja insignia de Fontshare y podría leerse como levemente familiar; se mantiene porque encaja de lleno con "moderno + premium" y queda a años luz del default Inter. Reemplazable por Cabinet Grotesk + General Sans sin tocar el resto del sistema.

## 12. Changelog

- **v1.0** — Dirección inicial 03 (Equilibrio). Hero split, números, causa, teaser de 6 speakers, CTA final. Fuentes Clash Display + Satoshi; paleta hueso + azul marca + dorado; signature "Costura tricolor + split editorial". Slop-audit: pasa.
