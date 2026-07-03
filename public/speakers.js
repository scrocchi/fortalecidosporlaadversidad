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
    charla: {
      titulo: "El Arte de Camellar: disciplina, fe y reinvención",
      descripcion: "Una charla para quienes sienten que la vida se volvió un desierto: cansancio, incertidumbre, golpes, frustración… y aun así saben que rendirse no es opción. A través del humor y de historias reales muestra una idea central: la resiliencia nace del propósito. Cuando hay un gran propósito, si toca se aguanta hambre, se trasnocha, se atraviesan problemas y se vuelve a empezar sin perderse por dentro. El público se llevará un marco práctico para salir del modo víctima, recuperar la actitud, enfocarse en lo importante y dar el siguiente paso con disciplina, fe y resiliencia."
    },
    bio: "Conocido como “El Capi”, es un empresario colombiano del entretenimiento y los eventos. Viene de abajo con orgullo y ha aprendido a los golpes: su camino empezó en la disciplina del baile y se transformó en una trayectoria de construcción empresarial basada en trabajo duro, enfoque y ejecución. Ha liderado la creación y consolidación de un ecosistema de marcas y equipos orientados a experiencias de alto impacto, combinando creatividad, operación y estándares altos.",
    empresa: "GRUPO IM",
    donacion: "",
    redes: { instagram: "https://www.instagram.com/elcapimolano/" },
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
    tema: "Negocios",
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
    charla: {
      titulo: "Cómo vender cualquier producto",
      descripcion: "Aprenderás a dominar una conversación de venta de principio a fin: desde la llamada en frío y la empatía inicial, hasta identificar necesidades y llevar al cliente hacia un cierre firme."
    },
    bio: "Cofundador de Tribike Academy. Durante más de 20 años ha estado en el mundo de las ventas, los negocios y la negociación real: vendiendo, creando empresas, cerrando acuerdos y aprendiendo en la práctica lo que funciona. Ha cerrado miles de ventas y comprobado que vender no se trata de presionar, sino de entender a las personas, comunicar con claridad, generar confianza y negociar con estrategia. Hoy enseña a otros a desarrollar desde cero una de las habilidades más importantes para cualquier emprendedor, técnico o profesional: vender mejor, negociar con seguridad y convertir conversaciones en oportunidades reales.",
    empresa: "Tribike Academy",
    donacion: "Curso: Cómo generar ingresos haciendo mecánica de bicicletas",
    redes: {
      instagram: "https://www.instagram.com/tribike.academy",
      youtube: "https://www.youtube.com/@tribikeco"
    },
    _confianza: "alta"
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
    charla: {
      titulo: "El Arte de Vender sin Vender",
      descripcion: "¿Alguna vez sentiste que tu mensaje “suena a vendedor” y la gente te ignora? El problema no es tu producto, ni que te falten fórmulas de copywriting: es que estás escribiendo para convencer en lugar de para conectar. En esta charla vas a descubrir por qué persuadir no es manipular, sino ayudar. Te llevas 3 claves prácticas (Ayuda, Conecta, Vende) para que tus palabras le hablen a lo que tu cliente ya siente y lo muevan a la acción, sin presión y sin sonar a vendedor."
    },
    bio: "Estratega de comunicación y co-creadora de El Club IMPACTO. Durante más de seis años ha trabajado en el ecosistema digital hispano como arquitecta de comunicación, con especialidad en chat marketing, en más de 70 lanzamientos del Método IMPACTO (varios de seis y siete cifras). Su tesis: la comunicación que de verdad vende es la que le habla a las necesidades emocionales del cliente, y la venta es consecuencia de una intención genuina de ayudar. Integra la IA como capa de amplificación estratégica sin perder el alma del mensaje.",
    empresa: "Marcovich Solutions",
    donacion: "",
    redes: { instagram: "https://www.instagram.com/erikalacopy/" },
    _confianza: "alta"
  },
  {
    id: "jan-schroeder",
    color: 221, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Jan Schröder",
    tema: "Copywriting y persuasión",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "Simplemente Dilo Mejor: Vende con Frases Cortas",
      descripcion: "Aprende a diferenciarte no cambiando lo que vendes, sino aprendiendo a decirlo mejor que tu competencia. Analizamos casos prácticos para que veas cómo tomar cualquier producto, servicio o idea de negocio y transformarlo en una propuesta que se sienta más clara, más atractiva y mucho más difícil de comparar."
    },
    bio: "Comunicador y estratega digital detrás de campañas, embudos y narrativas comerciales para diversos referentes del mercado LATAM. Ha generado más de un millón de dólares en ventas entre Estados Unidos y Latinoamérica, ayudando a marcas de distintos nichos a convertir mejor sus ideas, productos y servicios en mensajes que venden. Hoy se enfoca en apoyar a emprendedores y dueños de negocio a crear mejores anuncios, videos de venta y propuestas comerciales para diferenciarse, comunicar con más claridad y generar mayor impacto.",
    empresa: "Frases Cortas LLC",
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
    // Oculto hasta tener un @ para verificar bio (nombre común, sin perfil
    // público confirmable). Poné visible:true cuando llegue el dato.
    visible: false,
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
    charla: {
      titulo: "Buenos hábitos para una microbiota sana, malos hábitos que la dañan",
      descripcion: "¿Sabías que tu microbiota influye mucho más de lo que imaginas? En esta charla te compartimos cuáles son los hábitos que fortalecen tu microbiota y cuáles pueden estar desequilibrándola sin que lo notes. Pequeños cambios en tu día a día pueden marcar una gran diferencia en tu salud digestiva, hormonal y metabólica."
    },
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
  {
    id: "el-rapero-marketero",
    color: 12, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    // Nombre real: Jesús Giangregorio (speakers-6.xlsx los unificó en una sola fila).
    nombre: "El Rapero Marketero",
    tema: "Ventas y networking",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "Claude desde cero para impulsar tu negocio",
      descripcion: "Cómo usar esta herramienta de inteligencia artificial para mejorar tus ventas y ser más productivo en el día a día de tu negocio."
    },
    bio: "Mentor y speaker internacional. Enseña a usar la inteligencia artificial desde cero para ser más productivo y transformar tu negocio. Mentor en Convierte Más.",
    empresa: "Convierte Más",
    donacion: "",
    redes: { instagram: "https://www.instagram.com/elraperomarketero" },
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
    tema: "Finanzas e inversión",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "Programa tu mente para el crecimiento financiero",
      descripcion: ""
    },
    bio: "Empresario, lanzador, inversionista cripto e instructor en dinámicas de alto impacto. Ha formado a más de mil estudiantes en múltiples metodologías de desarrollo personal y financiero. Creador del programa Crypto Expert, director de más de 80 lanzamientos digitales y líder del retiro Nirvana Experience.",
    empresa: "",
    donacion: "",
    redes: { instagram: "https://www.instagram.com/andresricciv/" },
    _confianza: "alta"
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
    // Confirmado en speakers-6.xlsx; solo llegó el título de charla ("Herramientas
    // del duelo"), sin descripción/bio/foto: oculto hasta tener info.
    status: "confirmado",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "Herramientas del duelo", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "jose-rivero",
    color: 290, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Jose Rivero",
    tema: "Espiritualidad",
    // Confirmado en speakers-6.xlsx pero sin bio/@/charla/foto: oculto hasta tener info.
    status: "confirmado",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  // NOTA: "Jesús Giangregorio" resultó ser la misma persona que El Rapero Marketero
  // (speakers-6.xlsx los unificó en una fila). Su entrada vive arriba como
  // "el-rapero-marketero"; acá no se duplica.

  // Nuevos en speakers-6.xlsx. Confirmados pero solo con nombre + tema (sin
  // bio/@/charla/foto): ocultos hasta que llegue su info.
  {
    id: "viczael-toro",
    color: 235, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Viczael Toro",
    tema: "Copywriting y persuasión",
    status: "confirmado",
    visible: true,
    foto: "profile.jpg",
    charla: {
      titulo: "El poder de las palabras",
      descripcion: "Descubre cómo construir mensajes que conecten con la mente de tu cliente, generen confianza y motiven la compra, aplicando principios de neuroventas, persuasión y psicología del consumidor."
    },
    bio: "Estratega de marketing y copywriter especializado en neuroventas y embudos de conversión. Ha desarrollado estrategias y mensajes para lanzamientos digitales, ayudando a marcas y emprendedores a comunicar mejor para vender más.",
    empresa: "Boost Academy",
    donacion: "",
    redes: { instagram: "https://www.instagram.com/viczael/" },
    _confianza: "alta"
  },
  {
    id: "juanjo-arenales",
    color: 100, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Juanjo Arenales",
    tema: "Espiritualidad",
    status: "confirmado",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "marcos-amorrin",
    color: 178, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Marcos Amorrin",
    tema: "Negocios",
    status: "confirmado",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "miquel-baixas",
    color: 312, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    nombre: "Miquel Baixas",
    tema: "Marca personal",
    status: "por-confirmar",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "baja"
  },
  {
    id: "yale-rondon",
    color: 20, // hue (HSL S=100 L=50); sombra = mismo color al 15%
    // En speakers-8.xlsx figuraba como "Esposa de Johnson"; nombre real: Yale Rondón.
    nombre: "Yale Rondón",
    tema: "Marca personal",
    // Confirmada y con foto, pero sin bio ni charla: oculta hasta tener esa info.
    status: "confirmado",
    visible: false,
    foto: "profile.jpg",
    charla: { titulo: "", descripcion: "" },
    bio: "", empresa: "", donacion: "", redes: {},
    _confianza: "media"
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
