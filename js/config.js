/* =====================================================================
   CONFIGURACIÓN CENTRAL — edite SOLO este archivo.
   - enabled:false oculta una sección, botón, plan, ítem o red social.
   - Imágenes: ruta relativa (images/archivo.png) o URL https://
   - Planes: cada recurso se escribe y("Texto") = incluido, n("Texto") = no incluido.
     Puede agregar, quitar, reordenar y renombrar líneas libremente en cada plan.
   - Testimonios y capturas se cambian más abajo (campos "photo" e "image").
   ===================================================================== */
const y = t => ({ text: t, included: true });
const n = t => ({ text: t, included: false });

const siteConfig = {
  brand: { name: "Listo System", logo: "images/listo-logo.png", favicon: "images/listo-favicon.png", tagline: "La tecnología que impulsa tu negocio." },
  seo: {
    title: "Listo System — Ventas, caja, stock y crédito en cuotas para tu comercio",
    description: "Sistema de gestión con punto de venta, caja, inventario, presupuestos, delivery y venta en cuotas. Con niveles de acceso para tu equipo."
  },
  theme: { primary: "#4f46e5", accent: "#10b981" },

  // ⚠ CAMBIAR por su número real: formato internacional, solo dígitos (Paraguay: 595 + número sin 0).
  whatsapp: { enabled: true, phone: "595973414096", floatingButton: true,
    defaultMessage: "¡Hola! Me gustaría conocer Listo System." },

  navigation: { enabled: true, items: [
    { label: "Funcionalidades", href: "#features", enabled: true },
    { label: "Planes", href: "#pricing", enabled: true },
    { label: "Testimonios", href: "#testimonials", enabled: true },
    { label: "Seguridad", href: "#security", enabled: true },
    { label: "FAQ", href: "#faq", enabled: true } ],
    contactButton: { enabled: true, label: "Contacto", message: "¡Hola! Quisiera hablar con alguien del equipo de Listo System." } },

  hero: { enabled: true,
    eyebrow: "Sistema de gestión para comercios",
    title: "Vendé, cobrá y controlá tu stock. Todo en un solo sistema.",
    subtitle: "Punto de venta, caja, inventario, presupuestos, delivery y venta en cuotas, con niveles de acceso para cada persona de tu equipo.",
    extra: "Pensado para ferreterías y comercios que venden a contado y a crédito.",
    ctaHire: { enabled: true, text: "Contratar Listo System", style: "primary", order: 1,
      message: "¡Hola! Quisiera solicitar información para contratar Listo System." },
    ctaBuy: { enabled: true, text: "Ver planes y funciones", style: "outline", order: 2,
      message: "¡Hola! Me interesa conocer los planes de Listo System." },
    badges: ["Soporte por WhatsApp", "Niveles de acceso por usuario", "Crédito en cuotas incluido"],
    image: "images/hero.svg", phoneImage: "images/hero-phone.svg",
    floating: [
      { enabled: true, icon: "✓", label: "Venta cobrada", value: "Gs. 53.000" },
      { enabled: true, icon: "3", label: "Venta en cuotas", value: "3 × Gs. 500.000" },
      { enabled: true, icon: "!", label: "Cuotas que vencen esta semana", value: "Ver cobros" } ],
    proof: { text: "Ventas, caja y crédito bajo control",
      avatars: ["images/avatar-a1.svg", "images/avatar-a2.svg", "images/avatar-a3.svg"] },
    segments: ["Ferreterías", "Corralones", "Materiales eléctricos", "Pinturerías", "Sanitarios", "Almacenes", "Distribuidoras", "Tiendas"] },

  // Franja en gris antes de "Sobre nosotros". "labels" = etiquetas de texto (sin marcas de terceros).
  // Los logos ("logos") solo deben ser de clientes reales que lo hayan autorizado.
  trustBadges: { enabled: true, title: "Pensado para comercios de todos los tamaños",
    labels: ["Ferreterías", "Supermercados", "Minimercados", "Corralones", "Distribuidoras", "Pinturerías", "Materiales eléctricos", "Sanitarios", "Almacenes", "Tiendas"],
    logos: [ /* { enabled:true, name:"Cliente", image:"images/cliente1.png" } */ ] },

  // Capturas: reemplace "image" por sus capturas reales (ej. "images/pos.png").
  features: { enabled: true, eyebrow: "Funcionalidades", title: "Todo lo que hace Listo System",
    subtitle: "Cada módulo pensado para el día a día de un comercio.",
    items: [
      { enabled: true, title: "Tu negocio de un vistazo",
        description: "Un panel con las ventas de los últimos días, lo que te deben, lo vencido y las cuotas que vencen esta semana.",
        benefits: ["Ventas por período", "Cuentas por cobrar y mora acumulada", "Cuotas de la semana"], image: "images/dashboard.svg" },
      { enabled: true, title: "Punto de venta rápido (POS)",
        description: "Buscá productos, armá el carrito y cobrá en pocos clics. Imprimí el ticket al instante.",
        benefits: ["Búsqueda por nombre o código", "Ticket de comprobante interno", "Devoluciones y anulaciones con motivo"], image: "images/caja.svg" },
      { enabled: true, title: "Cobro con varios medios y monedas",
        description: "Efectivo, transferencia y más, con cálculo de vuelto. Actualizá la cotización del dólar y del real.",
        benefits: ["Varios medios de pago", "Cotización USD y BRL", "Vuelto automático"], image: "images/pagos.svg" },
      { enabled: true, title: "Venta en cuotas, con control",
        description: "Elegí cantidad de cuotas y frecuencia. El sistema calcula recargo, entrega mínima y vencimientos, y arma el cronograma.",
        benefits: ["Cuotas mensuales, quincenales o semanales", "Recargo, mora y días de gracia configurables", "Estado de cuenta del cliente en A4"], image: "images/cuotas.svg" },
      { enabled: true, title: "Caja ordenada, turno por turno",
        description: "Abrí tu caja, registrá retiros e ingresos e imprimí el cierre X (parcial) y Z (final). Si hay diferencia, queda explicada.",
        benefits: ["Varias cajas", "Cierre X y Z", "Historial de turnos"], image: "images/caja-turno.svg" },
      { enabled: true, title: "Stock, inventario físico y etiquetas",
        description: "Contá la mercadería, revisá diferencias y aplicalas. Generá códigos de barras internos e imprimí etiquetas.",
        benefits: ["Inventario físico con diferencias", "Códigos internos y etiquetas", "Historial y actualización masiva de precios"], image: "images/stock.svg" },
      { enabled: true, title: "Presupuestos, pedidos de WhatsApp y delivery",
        description: "Enviá presupuestos por WhatsApp y pasalos al POS con un clic. Registrá pedidos y programá entregas con prueba de quién recibió.",
        benefits: ["Presupuestos que se convierten en venta", "Pedidos de WhatsApp con estados", "Delivery con registro de entrega"], image: "images/pedidos.svg" },
      { enabled: true, title: "Cada persona ve lo que le corresponde",
        description: "Niveles de acceso para propietario, gerente y vendedor. Costos, finanzas y cuotas quedan solo para quien corresponde.",
        benefits: ["Tres niveles de acceso", "Motivo obligatorio al anular o perdonar mora", "Usuarios creados solo desde el sistema"], image: "images/accesos.svg" } ] },

  // Datos propios del producto (no son cifras de clientes).
  statistics: { enabled: true, eyebrow: "En números", title: "Listo System, por dentro", animate: true,
    items: [
      { enabled: true, value: 3, prefix: "", suffix: "", title: "Niveles de acceso", description: "propietario, gerente y vendedor" },
      { enabled: true, value: 3, prefix: "", suffix: "", title: "Frecuencias de cuota", description: "mensual, quincenal y semanal" },
      { enabled: true, value: 2, prefix: "", suffix: "", title: "Cierres de caja", description: "X parcial y Z final" },
      { enabled: true, value: 2, prefix: "+", suffix: "", title: "Monedas extra", description: "dólar y real, con cotización" } ] },

  // Testimonios. "featured" = DOS tarjetas fijas arriba (máximo 2). "carousel" = carrusel que se mueve de derecha a izquierda debajo.
  // Cada testimonio: name, company, segment (rubro), text. Foto opcional: photo: "images/archivo.jpg" (sin foto se muestran las iniciales).
  // Agregue "rating: 5" solo si quiere mostrar estrellas. Use enabled:false para ocultar un testimonio o un bloque entero.
  testimonials: { enabled: true, eyebrow: "Testimonios", title: "Quien lo usa, lo recomienda",
    subtitle: "Opiniones de comerciantes que ordenaron ventas, caja y crédito.",
    featured: { enabled: true, items: [
      { enabled: true, name: "Roberto Acosta", photo: "", company: "Minimercado La Economía", segment: "Minimercado",
        text: "El sistema es muy bueno, pero quiero destacar especialmente la atención que recibimos. Siempre que necesitamos ayuda tenemos a alguien que nos responde y nos acompaña. Eso vale muchísimo, porque uno no quiere solamente contratar un sistema, también necesita saber que tiene respaldo." },
      { enabled: true, name: "Lorena Duarte", photo: "", company: "Moda Urbana", segment: "Tienda de ropa",
        text: "Buscábamos algo que nos ayudara a administrar mejor el negocio sin tener que aprender a manejar un sistema complicado. Con LISTO encontramos justamente eso. Es práctico, fácil de utilizar y nos permite tener más orden en nuestro trabajo." } ] },
    carousel: { enabled: true, seconds: 50, items: [
      { enabled: true, name: "Andrea Fernández", photo: "", company: "Detalles & Hogar", segment: "Emprendimiento",
        text: "Cuando uno empieza un emprendimiento, tiene que encargarse de absolutamente todo. LISTO fue una gran ayuda para comenzar a organizarme mejor y trabajar de una manera más profesional. Me gusta porque es fácil de entender y no tiene esa complicación que muchas veces tienen otros sistemas." },
      { enabled: true, name: "Patricia Ramírez", photo: "", company: "Restaurante Sabor Casero", segment: "Gastronomía",
        text: "En nuestro rubro necesitamos rapidez y organización. LISTO nos ayudó bastante a simplificar el trabajo. El equipo pudo aprender a utilizarlo sin complicaciones y ahora tenemos una herramienta que realmente nos facilita las tareas de todos los días." },
      { enabled: true, name: "Miguel González", photo: "", company: "Lubricentro El Motor", segment: "Lubricentro",
        text: "Lo que más valoro es que es sencillo y práctico. No necesitás ser un experto para aprender a utilizarlo. Desde que empezamos a trabajar con LISTO tenemos un mejor control de nuestro negocio y eso nos facilita muchísimo el día a día." },
      { enabled: true, name: "Carlos Benítez", photo: "", company: "Ferretería San Miguel", segment: "Ferretería",
        text: "La verdad que estamos muy conformes con LISTO. Es un sistema fácil de usar y nos ayuda muchísimo a tener todo más organizado. Antes perdíamos bastante tiempo llevando los controles manualmente. Ahora tenemos todo mucho más práctico y podemos trabajar con mayor tranquilidad." } ] } },

  // Precios y módulos por plan: edite libremente (price, popular, badge y la lista de recursos).
  pricing: { enabled: true, eyebrow: "Planes y precios", title: "Elegí el nivel que necesita tu negocio",
    subtitle: "Cada plan habilita más módulos y niveles de acceso. Valores en guaraníes.",
    currency: "Gs.", locale: "es-PY",
    plans: [
      { id: "basic", enabled: true, name: "Plan Básico", subtitle: "Vender y cobrar", description: "Lo esencial para vender, cobrar y llevar el control del día.",
        price: 159000, oldPrice: null, period: "/mes", note: "Sin permanencia.", popular: false, badge: "", buttonText: "Contratar Básico",
        message: "¡Hola! Me interesa el Plan Básico de Listo System.",
        features: [ y("Productos, categorías y clientes"), y("Punto de venta (POS) con ticket"), y("Historial de ventas, devoluciones y anulaciones"),
          y("Apertura y cierre de caja"), y("Acceso: propietario y vendedor"),
          n("Cierres X y Z, retiros e ingresos"), n("Presupuestos y pedidos de WhatsApp"), n("Venta en cuotas con recargo y mora"),
          n("Cuentas por cobrar y estado de cuenta"), n("Inventario físico y etiquetas"), n("Actualización masiva de precios"),
          n("Delivery con prueba de entrega"), n("Varias cajas y cotización USD/BRL"), y("Soporte por WhatsApp") ] },
      { id: "professional", enabled: true, name: "Plan Profesional", subtitle: "Crédito y control", description: "Crédito en cuotas, caja completa y control de stock para crecer con orden.",
        price: 199000, oldPrice: null, period: "/mes", note: "El mejor equilibrio entre recursos y precio.", popular: true, badge: "MÁS VENDIDO", buttonText: "Contratar Profesional",
        message: "¡Hola! Me interesa el Plan Profesional de Listo System.",
        features: [ y("Productos, categorías y clientes"), y("Punto de venta (POS) con ticket"), y("Historial de ventas, devoluciones y anulaciones"),
          y("Apertura y cierre de caja"), y("Acceso: propietario, gerente y vendedor"),
          y("Cierres X y Z, retiros e ingresos"), y("Presupuestos y pedidos de WhatsApp"), y("Venta en cuotas con recargo y mora"),
          y("Cuentas por cobrar y estado de cuenta"), y("Inventario físico y etiquetas"), y("Actualización masiva de precios"),
          n("Delivery con prueba de entrega"), n("Varias cajas y cotización USD/BRL"), y("Soporte por WhatsApp") ] },
      { id: "premium", enabled: true, name: "Plan Premium", subtitle: "Todo incluido", description: "Todos los módulos, varias cajas, delivery y soporte prioritario.",
        price: 499000, oldPrice: null, period: "/mes", note: "Ideal para varios puntos de venta.", popular: false, badge: "", buttonText: "Contratar Premium",
        message: "¡Hola! Me interesa el Plan Premium de Listo System.",
        features: [ y("Productos, categorías y clientes"), y("Punto de venta (POS) con ticket"), y("Historial de ventas, devoluciones y anulaciones"),
          y("Apertura y cierre de caja"), y("Acceso: propietario, gerente y vendedor"),
          y("Cierres X y Z, retiros e ingresos"), y("Presupuestos y pedidos de WhatsApp"), y("Venta en cuotas con recargo y mora"),
          y("Cuentas por cobrar y estado de cuenta"), y("Inventario físico y etiquetas"), y("Actualización masiva de precios"),
          y("Delivery con prueba de entrega"), y("Varias cajas y cotización USD/BRL"), y("Soporte prioritario por WhatsApp") ] }
    ] },

  faq: { enabled: true, title: "Preguntas frecuentes", subtitle: "Resolvé tus dudas antes de empezar.",
    whatsappText: "¿No encontraste tu respuesta? Escribinos por WhatsApp.",
    whatsappMessage: "¡Hola! Tengo algunas dudas sobre Listo System y me gustaría hablar con un asesor.",
    items: [
      { enabled: true, q: "¿Puedo vender a crédito en cuotas?", a: "Sí. Elegís cantidad de cuotas, frecuencia (mensual, quincenal o semanal) y fecha del primer vencimiento. El sistema calcula recargo, entrega mínima y cronograma. Solo gerente y propietario pueden ofrecer cuotas, y por ahora son en guaraníes." },
      { enabled: true, q: "¿Mis vendedores ven los costos?", a: "No. Los costos y las finanzas quedan reservados a los niveles de propietario y gerente." },
      { enabled: true, q: "¿Funciona sin internet?", a: "No. El sistema necesita conexión a internet para guardar y consultar la información." },
      { enabled: true, q: "¿El ticket tiene validez fiscal?", a: "El ticket es un comprobante interno, sin validez fiscal. Consultá con tu contador por la facturación legal." },
      { enabled: true, q: "¿Puedo cambiar de plan más adelante?", a: "Sí. Escribinos por WhatsApp y te ayudamos a pasar al plan que mejor se adapte a tu negocio." },
      { enabled: true, q: "¿Qué pasa si me equivoco en una venta?", a: "Podés anular o devolver desde el historial de ventas. Siempre se pide un motivo, para que quede registro." } ] },

  about: { enabled: true, eyebrow: "Sobre nosotros", title: "Hecho para comercios que venden en serio",
    description: "Listo System reúne ventas, caja, stock y crédito en un solo lugar, con permisos por nivel para que cada persona haga lo que le corresponde.",
    mission: "Nuestra misión: que cada comerciante controle su negocio con claridad.", image: "images/about.svg",
    highlights: [
      { enabled: true, title: "Crédito bajo control", text: "Cuotas, mora y cuentas por cobrar en un solo lugar." },
      { enabled: true, title: "Atención humana", text: "Un equipo disponible por WhatsApp para ayudarte." },
      { enabled: true, title: "Permisos por nivel", text: "Propietario, gerente y vendedor con accesos distintos." } ],
    button: { enabled: true, text: "Hablar con el equipo", message: "¡Hola! Me gustaría conocer mejor Listo System." } },

  security: { enabled: true, eyebrow: "Seguridad y confianza", title: "Acceso controlado, acciones con registro",
    subtitle: "Así protege Listo System la operación de tu negocio.",
    items: [
      { enabled: true, title: "Ingreso con usuario y contraseña", text: "Solo entra quien tiene una cuenta." },
      { enabled: true, title: "Registro cerrado", text: "Los usuarios se crean únicamente desde el sistema." },
      { enabled: true, title: "Permisos por nivel", text: "Propietario, gerente y vendedor ven y hacen cosas distintas." },
      { enabled: true, title: "Acciones con motivo", text: "Anular, devolver o perdonar mora exige escribir el motivo." } ] },

  finalCta: { enabled: true, title: "¿Listo para ordenar tu negocio?", text: "Escribinos por WhatsApp y te ayudamos a elegir el plan indicado.",
    primary: { enabled: true, text: "Hablar por WhatsApp", message: "¡Hola! Quisiera solicitar información para contratar Listo System." },
    secondary: { enabled: true, text: "Ver planes", href: "#pricing" } },

  contact: { email: "", address: "" },

  socialMedia: {
    instagram: { enabled: false, name: "Instagram", short: "IG", url: "" },
    facebook:  { enabled: false, name: "Facebook",  short: "FB", url: "" },
    tiktok:    { enabled: false, name: "TikTok",    short: "TT", url: "" },
    linkedin:  { enabled: false, name: "LinkedIn",  short: "in", url: "" },
    youtube:   { enabled: false, name: "YouTube",   short: "YT", url: "" },
    x:         { enabled: false, name: "X",         short: "X",  url: "" } },

  footer: { enabled: true, description: "Sistema de ventas, caja, stock y crédito en cuotas para comercios.",
    showNav: true, showContact: true, showSocial: true, copyright: "Todos los derechos reservados.", legal: [] }
};
