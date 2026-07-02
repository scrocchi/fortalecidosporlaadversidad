# Fortalecidos por la Adversidad — landing

Landing del evento benéfico. Sitio **estático y self-contained** (HTML con CSS/JS
inline, sin build step). Se sirve tal cual la carpeta `public/`.

## Estructura

- `public/index.html` — la página completa (CSS y JS inline). Es el único HTML.
- `public/speakers.js` — **fuente única de verdad de los ponentes** (`var SPEAKERS = [...]`).
  El ticker del hero y la grilla de ponentes se renderizan desde este array.
- `public/assets/speakers/<id>/profile.jpg` — foto de cada ponente.
- `misc/speakers.json` — espejo legible de `speakers.js` (referencia; NO lo lee el sitio).
- `misc/speakers-*.xlsx` — planillas que entrega el organizador (fuente de los datos).
- `DESIGN.md`, `guia-contenido.md` — notas de diseño y contenido.

### Editar ponentes

Todo en `public/speakers.js`. Cada entrada:

- `visible: true|false` — controla si aparece en la web.
- `status`: `confirmado` | `por-confirmar` | `grabado` (informativo).
- `foto`: nombre del archivo dentro de `assets/speakers/<id>/` (por defecto `profile.jpg`).
  Si no existe, la card muestra un monograma con las iniciales.
- `redes`: solo las que existan (instagram / linkedin / youtube).
- `_confianza`: `alta` (dato del organizador o verificado) | `media` (research web,
  verificar) | `baja` (sin confirmar).

Tras editar, regenerar el espejo JSON:

```bash
node -e 'const s=require("./public/speakers.js"); require("fs").writeFileSync("misc/speakers.json", JSON.stringify(s,null,2)+"\n")'
```

**Regla de integridad:** los ponentes son personas reales. **No se inventan datos.**
Lo no confirmable queda vacío con `_confianza: "baja"` (y normalmente `visible: false`).

## Deploy

### Principal — Cloudflare Pages (automático)

- Cuenta: **Remotos Academy** (`a824ef6ae211cda6b383a16716f0b63e`).
- Proyecto Pages: **`fortalecidos-landing`** (direct upload de `public/`).
- URL del proyecto: https://fortalecidos-landing.pages.dev
- Dominio productivo: **fortalecidosporlaadversidad.com** (custom domain del proyecto).

Cada push a `main` dispara `.github/workflows/cloudflare-pages.yml`, que sube `public/`.

**Setup único requerido:** en el repo, Settings → Secrets and variables → Actions,
crear el secret `CLOUDFLARE_API_TOKEN` (token de Cloudflare con permiso
`Account · Cloudflare Pages: Edit`). El Account ID no es secreto y está en el workflow.

Deploy manual desde local (siempre funciona, no necesita el secret):

```bash
CLOUDFLARE_ACCOUNT_ID=a824ef6ae211cda6b383a16716f0b63e \
  npx wrangler pages deploy public --project-name=fortalecidos-landing --branch=main --commit-dirty=true
```

### Fallback — GitHub Pages (manual)

`.github/workflows/pages.yml` quedó como respaldo: solo corre a mano
(Actions → "Deploy a GitHub Pages (fallback)" → Run workflow). No corre en cada
push. El dominio ya **no** apunta a GitHub Pages.

## DNS (zona en Cloudflare, cuenta Remotos Academy)

- `fortalecidosporlaadversidad.com` → CNAME (proxeado) a `fortalecidos-landing.pages.dev`.
- `app.fortalecidosporlaadversidad.com` → CNAME a `fortalecidos-vip.pages.dev` (otra app, NO tocar).
- `www` → históricamente CNAME a `scrocchi.github.io` (GitHub Pages). Si se quiere que
  `www` sirva la versión nueva, agregarlo también como custom domain del proyecto Pages.

## Idioma

Copy user-facing en **español neutro** (tú, nunca vos). Ver reglas globales.
