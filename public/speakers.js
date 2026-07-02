/*
 * Datos de ponentes — Fortalecidos por la Adversidad
 * ---------------------------------------------------
 * Fuente única de verdad para la landing. La sección de ponentes y el
 * ticker del hero se renderizan a partir de este array (ver index.html).
 *
 * Cómo editar:
 *  - Para mostrar/ocultar a alguien en la web: cambiá `visible` (true/false).
 *  - `status`: "confirmado" | "por-confirmar" | "grabado" (informativo).
 *  - `foto`: nombre del archivo dentro de la carpeta del ponente. La ruta
 *    final es assets/speakers/<id>/<foto> (por defecto <id>/profile.jpg).
 *    Si no existe, la card muestra un monograma con las iniciales; solo
 *    dejá la imagen como profile.jpg dentro de la carpeta del ponente.
 *  - `redes`: solo las que existan (instagram / linkedin / youtube). Las
 *    vacías no se dibujan.
 *  - `_confianza`: "alta" (dato provisto por el organizador o verificado),
 *    "media" (armado desde fuentes públicas — CONVIENE VERIFICAR),
 *    "baja" (no se pudo confirmar; solo nombre + tema).
 *
 * NOTA: los marcados _confianza "media"/"baja" salieron de investigación web
 * y pueden tener errores. Verificá antes de publicar.
 */
var SPEAKERS = [
  // ---------- Confirmados (visibles en la web) ----------
  {
    id: "elbio-prida",
    color: 0, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Elbio Prida",
    tema: "Negocios",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "Empresario argentino, consultor empresarial y mentor de empresarios del rubro carnicerías, con más de 20 años de experiencia impulsando negocios, formando equipos y acompañando a emprendedores a profesionalizar su gestión.",
    empresa: "Rey Academy",
    donacion: "",
    redes: { instagram: "https://www.instagram.com/reyacademyoficial/" },
    _confianza: "alta"
  },
  {
    id: "ivan-molano",
    color: 28, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Ivan Molano",
    tema: "Resiliencia",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: { titulo: "El Arte de Camellar", descripcion: "" },
    bio: "",
    empresa: "",
    donacion: "",
    redes: {},
    _confianza: "alta"
  },
  {
    id: "tian-rodriguez",
    color: 55, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Tian Rodríguez",
    tema: "Finanzas e inversión",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "Ingeniero industrial y educador financiero. Fundador de Tian Rodríguez LF, una marca dedicada a la educación en finanzas personales e inversión para ayudar a las personas a construir su libertad financiera.",
    empresa: "Tian Rodríguez LF",
    donacion: "",
    redes: { instagram: "https://www.instagram.com/tianrodriguezlf/" },
    _confianza: "media"
  },
  {
    id: "ricardo-salguero",
    color: 83, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Ricardo Salguero",
    tema: "Ventas y networking",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "Networking que convierte: cómo transformar cada contacto en un cliente",
      descripcion: "La mayoría de los empresarios asiste a eventos, reparte tarjetas y nunca vuelve a saber de nadie. En esta charla aprenderás un método simple para hacer networking efectivo: cómo iniciar conversaciones de valor, cómo posicionarte para que te recuerden y cómo convertir cada contacto en una oportunidad de negocio real."
    },
    bio: "Fundador y presidente de AI Growth, agencia de automatización de marketing y ventas con IA para negocios de habla hispana, y CGO/Partner en Beemo. Reconocido por Forbes Ecuador 2025 y speaker de EXMA 2026. Ha escalado marcas de cero a exit y construido sistemas de crecimiento que convierten contactos en clientes para empresarios de toda Latinoamérica.",
    empresa: "AI Growth",
    donacion: "Tarjeta digital gratis — https://networking.vendemasconai.com/",
    redes: {},
    _confianza: "alta"
  },
  {
    id: "victor-real",
    color: 111, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Victor Real",
    tema: "Ventas y networking",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "",
    empresa: "",
    donacion: "",
    redes: {},
    _confianza: "baja"
  },
  {
    id: "daniel-marcovich",
    color: 138, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Daniel Marcovich",
    tema: "Inteligencia artificial",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "Vender por WhatsApp con IA: los 2 sistemas (Lanzamiento y Evergreen) por dentro",
      descripcion: "Existen dos sistemas de venta por WhatsApp que sí funcionan hoy: Lanzamiento y Evergreen. En esta charla te los muestro por dentro, con casos y números reales, para que veas cómo se dirige una conversación que vende. Sales sabiendo cuál te conviene y cómo dirigirlo, no solo qué herramienta usar."
    },
    bio: "Co-creador de El Club IMPACTO y de El Método IMPACTO, donde enseña a dueños de negocio a construir con arquitectura. Con más de 20 años emprendiendo, ha operado chat marketing y automatización de mensajería a escala: más de 70 lanzamientos digitales y más de 600.000 leads gestionados en conversaciones 1 a 1 y grupos de WhatsApp. Marcovich Solutions fue reconocida por Hotmart como una de las Top 15 agencias de Latinoamérica en 2025.",
    empresa: "Marcovich Solutions",
    donacion: "",
    redes: {
      instagram: "https://www.instagram.com/danielmarcovich",
      linkedin: "https://www.linkedin.com/in/danielmarcovich/",
      youtube: "https://www.youtube.com/@danielmarcovich"
    },
    _confianza: "alta"
  },
  {
    id: "jhonson-vivas",
    color: 166, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Johnson Vivas",
    tema: "Inteligencia artificial",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "Herramientas digitales y de IA para emprendedores y trabajadores remotos",
      descripcion: "Aprende los fundamentos y las herramientas que más resultados generan para modernizar tu negocio. Un enfoque práctico para potenciar tu productividad y llevar tu emprendimiento o trabajo remoto al siguiente nivel."
    },
    bio: "Fundador de Remotos Academy, con más de 8 años de experiencia en el mundo digital. Ha formado a más de 2.000 estudiantes y ayudado a cientos de personas a desarrollar habilidades digitales para el trabajo remoto.",
    empresa: "Remotos Academy",
    donacion: "",
    redes: {
      instagram: "https://www.instagram.com/johnsonvivas",
      linkedin: "https://www.linkedin.com/in/johnson-vivas",
      youtube: "https://youtube.com/@remotosacademy"
    },
    _confianza: "alta"
  },
  {
    id: "erika-nova",
    color: 194, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Erika Nova",
    tema: "Copywriting y persuasión",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "Copywriter especializada en conversaciones que venden y co-creadora de El Método IMPACTO, donde ayuda a los negocios a comunicar y convertir con textos persuasivos.",
    empresa: "El Método IMPACTO",
    donacion: "",
    redes: { instagram: "https://www.instagram.com/erikalacopy/" },
    _confianza: "media"
  },
  {
    id: "jan-schroeder",
    color: 221, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Jan Schröder",
    tema: "Copywriting y persuasión",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "Creador del Sistema de Frases Cortas, un método de copywriting y persuasión basado en frases cortas para captar la atención y vender. Conocido como “el de las frases cortas”.",
    empresa: "Frases Cortas",
    donacion: "Frases Cortas",
    redes: { instagram: "https://www.instagram.com/janfrasescortas/" },
    _confianza: "alta"
  },
  {
    id: "fernando-munoz",
    color: 249, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Fernando Muñoz",
    tema: "Transformación personal",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "",
    empresa: "",
    donacion: "",
    redes: {},
    _confianza: "baja"
  },
  {
    id: "maria-antonieta-hernandez",
    color: 277, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "María Antonieta Hernández",
    tema: "Resiliencia",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "El poder de la resiliencia: cómo levantarte, soltar y reinventarte después de la adversidad",
      descripcion: ""
    },
    bio: "CEO y fundadora de Community Networker, plataforma que conecta a emprendedores hispanos del sur de Florida a través de eventos, expos y formación. Más de dos décadas impulsando el desarrollo de negocios latinos.",
    empresa: "Community Networker",
    donacion: "",
    redes: { linkedin: "https://www.linkedin.com/in/maria-antonieta-hern%C3%A1ndez-4b10bb33/" },
    _confianza: "media"
  },
  {
    id: "paola-sanchez",
    color: 304, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Paola Sánchez",
    tema: "Salud y bienestar",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "Nutricionista funcional con más de 13 años de experiencia, especializada en salud hormonal y fertilidad. Acompaña a mujeres y parejas que desean lograr un embarazo, ayudándolas a identificar y tratar las causas de fondo mediante un enfoque integral basado en nutrición, hábitos y evidencia científica.",
    empresa: "Centro de Nutrición PS LLC",
    donacion: "",
    redes: {
      instagram: "https://www.instagram.com/nutricionistapaolasanchez",
      youtube: "https://www.youtube.com/@nutricionistapaolasanchez5482"
    },
    _confianza: "alta"
  },
  {
    id: "arcenio-jimenez",
    color: 332, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Arcenio Jiménez",
    tema: "Salud y bienestar",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "Rutina de movilidad para la salud y la pérdida de peso",
      descripcion: "Rutina de movilidad con participación de todos los asistentes. Si el cuerpo no se mueve, no hay salud ni bienestar: hay que entrenar la mente y la espiritualidad para ser el mejor, pero nunca descuidar tu movilidad y tu cuerpo."
    },
    bio: "Personal trainer colombiano con 800.000 seguidores en Facebook, especialista en rutinas de ejercicio para perder peso desde casa, con un nicho enfocado en mujeres que quieren sentirse bien consigo mismas.",
    empresa: "Baja de peso con Arsenio",
    donacion: "",
    redes: {
      instagram: "https://www.instagram.com/bajadepesoconarsenio/",
      youtube: "https://www.youtube.com/@BAJADEPESOCONARSENIO"
    },
    _confianza: "alta"
  },

  // ---------- No confirmados (ocultos: visible=false) ----------
  {
    id: "camila-paola",
    color: 15, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Camila Paola",
    tema: "Finanzas e inversión",
    status: "por-confirmar",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "jennifer-arteaga",
    color: 45, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Jennifer Arteaga",
    tema: "Transformación personal",
    status: "por-confirmar",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "andres-ricci",
    color: 75, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Andres Ricci",
    tema: "Viralización en redes",
    status: "por-confirmar",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "monica-montanez",
    color: 200, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Monica Montañez",
    tema: "Viralización en redes",
    status: "por-confirmar",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja" // el Excel registraba el nombre con signo de interrogación
  },
  {
    id: "david-firman",
    color: 260, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "David Firman",
    tema: "Espiritualidad",
    status: "por-confirmar",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "jose-rivero",
    color: 290, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Jose Rivero",
    tema: "Espiritualidad",
    status: "por-confirmar",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "jesus-giangregorio",
    color: 320, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Jesús Giangregorio",
    tema: "Marca personal",
    status: "por-confirmar",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },

  // ---------- Charla grabada ----------
  {
    id: "mariale-y-ale",
    color: 350, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Mariale y Ale",
    tema: "",
    status: "grabado",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  }
];

// Exponer como global para el navegador y como módulo para tooling (node).
if (typeof window !== "undefined") { window.SPEAKERS = SPEAKERS; }
if (typeof module !== "undefined" && module.exports) { module.exports = SPEAKERS; }
