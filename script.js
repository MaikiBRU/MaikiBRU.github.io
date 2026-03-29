const translations = {
  es: {
    nav_about: "Sobre mi",
    nav_services: "Servicios",
    nav_process: "Proceso",
    nav_skills: "Habilidades",
    nav_projects: "Proyectos",
    nav_architecture: "Arquitectura",
    nav_certificates: "Certificados",
    nav_experience: "Experiencia",
    nav_education: "Educacion",
    nav_notes: "Notas",
    nav_contact: "Contacto",
    nav_cta: "Contactar",
    hero_eyebrow: "Disponible para primer rol IT",
    hero_title: "Aaron Brumat <span>Junior Software Engineer</span>",
    hero_sub: "Construyo software interno para stock y ventas con foco en datos confiables y flujos claros.",
    hero_cta_freelance: "Proyecto freelance",
    hero_cta_primary: "Ver proyecto principal",
    hero_cta_secondary: "Contactar",
    hero_cta_cv: "Ver CV",
    hero_response: "Busco mi primer rol IT. Disponible full time.",
    hero_meta_1_label: "Proyecto principal",
    hero_meta_1_value: "StockARG (inventario + ventas)",
    hero_meta_2_label: "Stack",
    hero_meta_2_value: "Python, Tkinter, MySQL",
    hero_meta_3_label: "Enfoque",
    hero_meta_3_value: "Datos confiables y procesos claros",
    profile_title: "Perfil",
    profile_name: "Aaron Brumat",
    profile_status: "Disponible",
    profile_summary: "Junior enfocado en sistemas internos con datos confiables y reportes claros.",
    profile_tag_python: "Python",
    profile_tag_sql: "SQL",
    profile_tag_tkinter: "Tkinter",
    profile_tag_js: "JavaScript",
    profile_tag_django: "Django",
    profile_tag_flask: "Flask",
    profile_tag_fastapi: "FastAPI",
    profile_cta: "Coordinar entrevista",
    profile_cta_secondary: "Explorar",
    about_eyebrow: "Sobre mi",
    about_title: "Lo que aporto como junior",
    about_text: "Busco mi primer rol IT. Aporto orden, pensamiento en datos y foco en procesos. En proyectos, priorizo integridad de datos, validaciones y una UI clara.",
    about_card_1_title: "Pensamiento en datos",
    about_card_1_text: "Arranco por entidades, relaciones y reglas para reducir errores.",
    about_card_2_title: "Calidad y claridad",
    about_card_2_text: "Validaciones, manejo de errores y reportes para decision rapida.",
    about_card_3_title: "Trabajo en equipo",
    about_card_3_text: "Comunico avances, documento decisiones y recibo feedback temprano.",
    skills_eyebrow: "Habilidades",
    skills_title: "Tecnologias y herramientas principales",
    skills_text: "Tecnologias aplicadas en proyectos reales y en formacion continua.",
    skills_block_1_title: "Lenguajes",
    skills_block_1_list: "Python, C#, JavaScript",
    skills_block_2_title: "Datos",
    skills_block_2_list: "MySQL (modelado, consultas, integridad)",
    skills_block_3_title: "Frameworks",
    skills_block_3_list: "Django, Flask, FastAPI, Tkinter",
    skills_block_4_title: "En foco",
    skills_block_4_list: "Testing basico, APIs REST, buenas practicas",
    projects_eyebrow: "Proyectos",
    projects_title: "Proyecto principal",
    projects_text: "Un proyecto grande con decisiones tecnicas claras y foco en calidad.",
    project_1_title: "StockARG",
    project_1_tag: "Gestion interna",
    project_1_text: "Sistema de stock y ventas para centralizar datos y evitar errores operativos. Construido en 2 semanas.",
    project_1_breakdown_label: "Problema → Solucion → Resultado",
    project_1_problem: "Procesos en planillas separadas generan errores y falta de trazabilidad.",
    project_1_solution: "App de escritorio con login, modulos de clientes/productos/ventas y base MySQL.",
    project_1_result: "Flujo completo de ventas y stock con reportes exportables y panel de estado.",
    project_1_decisions_label: "Decisiones tecnicas clave",
    project_1_decision_1: "Tkinter para entregar rapido una interfaz usable en escritorio.",
    project_1_decision_2: "Modelo relacional en MySQL para integridad y consistencia de datos.",
    project_1_decision_3: "Separacion por modulos y validaciones para evitar errores de stock.",
    project_1_stack_1: "Python",
    project_1_stack_2: "Tkinter",
    project_1_stack_3: "MySQL",
    project_1_stack_4: "2 semanas",
    project_btn_code: "Ver codigo",
    project_btn_arch: "Ver arquitectura",
    project_btn_readme: "Ver README",
    cert_eyebrow: "Certificados",
    cert_title: "Certificaciones",
    cert_text: "Formacion complementaria en inteligencia artificial.",
    cert_1_title: "Certificado de Inteligencia Artificial",
    cert_1_text: "Finalizacion de un curso de IA centrado en fundamentos, modelos basicos y aplicaciones practicas.",
    case_eyebrow: "Caso de estudio",
    case_title: "StockARG en 2 semanas",
    case_intro: "Proyecto individual enfocado en integridad de stock, ventas y reportes.",
    case_1_title: "Problema",
    case_1_text: "Sin una base unica, los errores de stock y ventas se multiplican.",
    case_2_title: "Solucion",
    case_2_text: "Modelo de datos, modulos principales y reportes exportables en Python + Tkinter + MySQL.",
    case_3_title: "Resultados",
    case_3_item_1: "Flujo end-to-end: alta de productos → venta → descuento de stock.",
    case_3_item_2: "Reportes CSV/PDF para control diario.",
    case_3_item_3: "UI clara para usuarios no tecnicos.",
    case_tag_1: "Proyecto individual",
    case_tag_2: "2 semanas",
    project_highlights_eyebrow: "Aporte tecnico",
    project_highlights_title: "Decisiones de ingenieria",
    project_highlights_text: "Priorice datos confiables, flujos claros y soporte a usuarios no tecnicos.",
    project_highlight_1_title: "Modelo de datos primero",
    project_highlight_1_text: "Defini entidades, relaciones y validaciones para evitar inconsistencias de stock.",
    project_highlight_2_title: "Calidad en operaciones",
    project_highlight_2_text: "Flujos completos de alta, venta y movimiento con control de errores.",
    project_highlight_3_title: "Entrega util",
    project_highlight_3_text: "Reportes exportables y panel de estado para decisiones diarias.",
    architecture_eyebrow: "Arquitectura",
    architecture_title: "Como esta construido StockARG",
    architecture_text: "Quiero que se entienda que hay modelo, reglas y decisiones tecnicas detras de la UI.",
    architecture_card_1_title: "Estructura por capas",
    architecture_card_1_text: "Separacion entre UI, logica de negocio y persistencia para mantener orden y escalabilidad.",
    architecture_card_2_title: "Modelo de datos",
    architecture_card_2_text: "Entidades clave: clientes, productos, ventas, movimientos y proveedores con relaciones claras.",
    architecture_card_3_title: "Reglas de integridad",
    architecture_card_3_text: "Validaciones de stock, precios y cantidades para evitar errores operativos.",
    architecture_card_4_title: "Edge cases resueltos",
    architecture_card_4_text: "Bloqueo de ventas sin stock, control de duplicados y manejo de errores en reportes.",
    architecture_card_5_title: "Documentacion y pruebas",
    architecture_card_5_text: "README con instalacion, diagrama ERD y decisiones tecnicas. Tests basicos de Utils.",
    architecture_card_6_title: "Diagrama ERD",
    architecture_card_6_text: "Resumen visual del modelo de datos para explicar entidades y relaciones principales.",
    experience_eyebrow: "Experiencia",
    experience_title: "Experiencia y transferencia a IT",
    experience_text: "Experiencia en operaciones, stock y datos. Busco mi primer rol IT y aporto orden, responsabilidad y foco en calidad de datos.",
    exp_1_title: "Vendedor y atencion al cliente",
    exp_1_company: "Local de Ropa 'KINGU' | 03/2025 - 11/2025",
    exp_1_text: "Atencion al cliente, manejo de caja y cierres. Orden operativo, puntualidad y trabajo en equipo.",
    exp_2_title: "Vendedor y control de stock",
    exp_2_company: "Almacen 'Tina' | 02/2024 - 12/2024",
    exp_2_text: "Control de stock y registro de mercaderia. Orden, responsabilidad y consistencia diaria.",
    exp_3_title: "Pasantia administrativa",
    exp_3_company: "S.I.S.O SRL | 11/2023 - 12/2023",
    exp_3_text: "Carga y correccion de datos en software contable. Cumplimiento de procesos y atencion al detalle.",
    experience_transfer_title: "Transferencias a IT",
    experience_transfer_item_1: "Procesos y orden",
    experience_transfer_item_2: "Calidad de datos y registros",
    experience_transfer_item_3: "Trabajo en equipo y atencion al detalle",
    education_eyebrow: "Educacion",
    education_title: "Formacion",
    education_text: "Estudiante en el ultimo año de Desarrollo de Software.",
    edu_1_title: "Desarrollo de Software",
    edu_1_place: "Instituto Belgrano, Rosario | Ultimo año",
    edu_1_text: "Formacion tecnica con foco en desarrollo y buenas practicas.",
    edu_2_title: "En formacion continua",
    edu_2_place: "Cursos y practicas personales",
    edu_2_text: "Refuerzo constante en lenguajes y herramientas.",
    edu_3_title: "Aprendizaje autodidacta",
    edu_3_place: "Proyectos personales",
    edu_3_text: "Aplicacion de conceptos en proyectos reales.",
    contact_eyebrow: "Contacto",
    contact_title: "Disponible para entrevistas",
    contact_text: "Si buscas un junior con base en Python/SQL y foco en procesos, escribime.",
    contact_email_label: "Email",
    contact_call_label: "WhatsApp (opcional)",
    contact_call_cta: "Abrir WhatsApp",
    contact_availability_label: "Disponibilidad",
    contact_availability_text: "Full time para mi primer rol IT.",
    contact_response_label: "Tiempo de respuesta",
    contact_response_text: "Respondo en 24-48h.",
    contact_linkedin_label: "LinkedIn",
    contact_github_label: "GitHub",
    form_name: "Nombre",
    form_email: "Email",
    form_message: "Mensaje",
    form_submit: "Enviar mensaje",
    form_disclaimer: "Se abrira un selector para Gmail o Outlook con el mensaje listo.",
    mail_picker_title: "Elegi como enviar",
    mail_picker_text: "Podes abrir Gmail o Outlook Web con el mensaje listo.",
    mail_picker_gmail: "Abrir Gmail",
    mail_picker_outlook: "Abrir Outlook",
    mail_picker_copy: "Copiar mensaje",
    mail_picker_note: "Si usas un cliente local, copia el mensaje y pegalo.",
    form_name_placeholder: "Tu nombre",
    form_email_placeholder: "tucorreo@email.com",
    form_message_placeholder: "Contame sobre la vacante o el proceso",
    footer_text: "Desarrollador de software - Portfolio 2026",
    footer_back: "Volver arriba",
    mail_subject: "Contacto por rol junior",
    mail_body_name: "Nombre",
    mail_body_email: "Email",
    mail_body_message: "Mensaje"
  },
  en: {
    nav_about: "About",
    nav_services: "Services",
    nav_process: "Process",
    nav_skills: "Skills",
    nav_projects: "Projects",
    nav_architecture: "Architecture",
    nav_certificates: "Certificates",
    nav_experience: "Experience",
    nav_education: "Education",
    nav_notes: "Notes",
    nav_contact: "Contact",
    nav_cta: "Contact",
    hero_eyebrow: "Open to first IT role",
    hero_title: "Aaron Brumat <span>Junior Software Engineer</span>",
    hero_sub: "I build internal stock and sales tools focused on reliable data and clear workflows.",
    hero_cta_freelance: "Freelance project",
    hero_cta_primary: "See main project",
    hero_cta_secondary: "Contact",
    hero_cta_cv: "View CV",
    hero_response: "Looking for my first IT role. Full-time available.",
    hero_meta_1_label: "Main project",
    hero_meta_1_value: "StockARG (inventory + sales)",
    hero_meta_2_label: "Stack",
    hero_meta_2_value: "Python, Tkinter, MySQL",
    hero_meta_3_label: "Focus",
    hero_meta_3_value: "Reliable data and clear processes",
    profile_title: "Profile",
    profile_name: "Aaron Brumat",
    profile_status: "Available",
    profile_summary: "Junior focused on internal systems with reliable data and clear reporting.",
    profile_tag_python: "Python",
    profile_tag_sql: "SQL",
    profile_tag_tkinter: "Tkinter",
    profile_tag_js: "JavaScript",
    profile_tag_django: "Django",
    profile_tag_flask: "Flask",
    profile_tag_fastapi: "FastAPI",
    profile_cta: "Schedule interview",
    profile_cta_secondary: "Explore",
    about_eyebrow: "About",
    about_title: "What I bring as a junior",
    about_text: "Looking for my first IT role. I bring order, data thinking, and process focus. I prioritize data integrity, validations, and a clear UI.",
    about_card_1_title: "Data thinking",
    about_card_1_text: "Start with entities, relationships, and rules to reduce errors.",
    about_card_2_title: "Quality and clarity",
    about_card_2_text: "Validations, error handling, and reports for faster decisions.",
    about_card_3_title: "Teamwork",
    about_card_3_text: "Share progress, document decisions, and seek early feedback.",
    skills_eyebrow: "Skills",
    skills_title: "Core technologies and tools",
    skills_text: "Technologies applied in real projects and continuous training.",
    skills_block_1_title: "Languages",
    skills_block_1_list: "Python, C#, JavaScript",
    skills_block_2_title: "Data",
    skills_block_2_list: "MySQL (modeling, queries, integrity)",
    skills_block_3_title: "Frameworks",
    skills_block_3_list: "Django, Flask, FastAPI, Tkinter",
    skills_block_4_title: "In focus",
    skills_block_4_list: "Basic testing, REST APIs, good practices",
    projects_eyebrow: "Projects",
    projects_title: "Main project",
    projects_text: "One deep project with clear technical decisions and quality focus.",
    project_1_title: "StockARG",
    project_1_tag: "Internal ops",
    project_1_text: "Inventory and sales system to centralize data and avoid operational errors. Built in 2 weeks.",
    project_1_breakdown_label: "Problem → Solution → Result",
    project_1_problem: "Separate spreadsheets cause errors and weak traceability.",
    project_1_solution: "Desktop app with login, customer/product/sales modules, and a MySQL database.",
    project_1_result: "End-to-end sales and stock flow with exportable reports and a status dashboard.",
    project_1_decisions_label: "Key technical decisions",
    project_1_decision_1: "Tkinter for fast delivery of a usable desktop UI.",
    project_1_decision_2: "Relational model in MySQL for data integrity and consistency.",
    project_1_decision_3: "Module separation and validations to prevent stock errors.",
    project_1_stack_1: "Python",
    project_1_stack_2: "Tkinter",
    project_1_stack_3: "MySQL",
    project_1_stack_4: "2 weeks",
    project_btn_code: "View code",
    project_btn_arch: "View architecture",
    project_btn_readme: "View README",
    cert_eyebrow: "Certificates",
    cert_title: "Certifications",
    cert_text: "Complementary training in artificial intelligence.",
    cert_1_title: "Artificial Intelligence Certificate",
    cert_1_text: "Completed an AI course focused on fundamentals, core models, and practical applications.",
    case_eyebrow: "Case study",
    case_title: "StockARG in 2 weeks",
    case_intro: "Solo project focused on stock integrity, sales, and reporting.",
    case_1_title: "Problem",
    case_1_text: "Without a single source of truth, stock and sales errors multiply.",
    case_2_title: "Solution",
    case_2_text: "Data model, core modules, and exportable reports in Python + Tkinter + MySQL.",
    case_3_title: "Results",
    case_3_item_1: "End-to-end flow: product intake → sale → stock decrement.",
    case_3_item_2: "CSV/PDF reports for daily control.",
    case_3_item_3: "Clear UI for non-technical users.",
    case_tag_1: "Solo project",
    case_tag_2: "2 weeks",
    project_highlights_eyebrow: "Technical value",
    project_highlights_title: "Engineering decisions",
    project_highlights_text: "Prioritized reliable data, clear workflows, and support for non-technical users.",
    project_highlight_1_title: "Data model first",
    project_highlight_1_text: "Defined entities, relationships, and validations to avoid stock inconsistencies.",
    project_highlight_2_title: "Operational quality",
    project_highlight_2_text: "Complete flows with error control in each step.",
    project_highlight_3_title: "Useful delivery",
    project_highlight_3_text: "Exportable reports and a status panel for daily decisions.",
    architecture_eyebrow: "Architecture",
    architecture_title: "How StockARG is built",
    architecture_text: "I want it to be clear there is a model, rules, and real technical decisions behind the UI.",
    architecture_card_1_title: "Layered structure",
    architecture_card_1_text: "Separation between UI, business logic, and persistence for order and scalability.",
    architecture_card_2_title: "Data model",
    architecture_card_2_text: "Core entities: customers, products, sales, movements, and suppliers with clear relations.",
    architecture_card_3_title: "Integrity rules",
    architecture_card_3_text: "Stock, pricing, and quantity validations to prevent operational errors.",
    architecture_card_4_title: "Resolved edge cases",
    architecture_card_4_text: "Block sales without stock, duplicate controls, and error handling in reports.",
    architecture_card_5_title: "Docs and tests",
    architecture_card_5_text: "README with setup, ERD diagram, and decisions. Basic Utils tests.",
    architecture_card_6_title: "ERD diagram",
    architecture_card_6_text: "Visual summary of the data model to explain entities and main relationships.",
    experience_eyebrow: "Experience",
    experience_title: "Experience and transfer to IT",
    experience_text: "Operations, stock, and data experience. Seeking my first IT role with order, responsibility, and data quality focus.",
    exp_1_title: "Sales and customer service",
    exp_1_company: "KINGU Clothing Store | 03/2025 - 11/2025",
    exp_1_text: "Customer service, cash handling, and closing. Operational order, punctuality, and teamwork.",
    exp_2_title: "Sales and stock control",
    exp_2_company: "Tina Grocery Store | 02/2024 - 12/2024",
    exp_2_text: "Stock control and inventory records. Order, responsibility, and daily consistency.",
    exp_3_title: "Administrative internship",
    exp_3_company: "S.I.S.O SRL | 11/2023 - 12/2023",
    exp_3_text: "Data entry and corrections in accounting software. Process compliance and attention to detail.",
    experience_transfer_title: "Transferable skills to IT",
    experience_transfer_item_1: "Processes and order",
    experience_transfer_item_2: "Data quality and records",
    experience_transfer_item_3: "Teamwork and attention to detail",
    education_eyebrow: "Education",
    education_title: "Training",
    education_text: "Final-year Software Development student.",
    edu_1_title: "Software Development",
    edu_1_place: "Instituto Belgrano, Rosario | Final year",
    edu_1_text: "Technical training focused on development and best practices.",
    edu_2_title: "Continuous training",
    edu_2_place: "Courses and personal practice",
    edu_2_text: "Constant reinforcement of languages and tools.",
    edu_3_title: "Self-learning",
    edu_3_place: "Personal projects",
    edu_3_text: "Applying concepts in real projects.",
    contact_eyebrow: "Contact",
    contact_title: "Open to interviews",
    contact_text: "If you need a junior with Python/SQL foundations and process focus, write me.",
    contact_email_label: "Email",
    contact_call_label: "WhatsApp (optional)",
    contact_call_cta: "Open WhatsApp",
    contact_availability_label: "Availability",
    contact_availability_text: "Full time for my first IT role.",
    contact_response_label: "Response time",
    contact_response_text: "Reply within 24-48h.",
    contact_linkedin_label: "LinkedIn",
    contact_github_label: "GitHub",
    form_name: "Name",
    form_email: "Email",
    form_message: "Message",
    form_submit: "Send message",
    form_disclaimer: "A chooser will open for Gmail or Outlook with the message ready.",
    mail_picker_title: "Choose how to send",
    mail_picker_text: "Open Gmail or Outlook Web with the message ready.",
    mail_picker_gmail: "Open Gmail",
    mail_picker_outlook: "Open Outlook",
    mail_picker_copy: "Copy message",
    mail_picker_note: "If you use a local mail app, copy and paste the message.",
    form_name_placeholder: "Your name",
    form_email_placeholder: "yourmail@email.com",
    form_message_placeholder: "Share the role or process",
    footer_text: "Software developer - Portfolio 2026",
    footer_back: "Back to top",
    mail_subject: "Junior role contact",
    mail_body_name: "Name",
    mail_body_email: "Email",
    mail_body_message: "Message"
  }
};

const langToggle = document.getElementById("lang-toggle");
let currentLang = localStorage.getItem("portfolio_lang") || "es";

const setLanguage = (lang) => {
  currentLang = lang;
  localStorage.setItem("portfolio_lang", lang);
  document.documentElement.lang = lang;
  langToggle.textContent = lang === "es" ? "EN" : "ES";

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.dataset.i18nHtml;
    if (translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.dataset.i18nPlaceholder;
    if (translations[lang][key]) {
      el.setAttribute("placeholder", translations[lang][key]);
    }
  });
};

langToggle.addEventListener("click", () => {
  const next = currentLang === "es" ? "en" : "es";
  setLanguage(next);
});

setLanguage(currentLang);

const revealElements = document.querySelectorAll("[data-reveal]");
revealElements.forEach((el) => el.classList.add("reveal"));

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.2 }
);

revealElements.forEach((el) => observer.observe(el));

const contactForm = document.getElementById("contact-form");
const mailPicker = document.getElementById("mail-picker");
const mailLink = document.querySelector("[data-mail-link]");
let mailData = { to: "aaronbru.dev@gmail.com", subject: "", body: "" };

const buildMailDataFromForm = () => {
  const name = contactForm.name.value.trim();
  const email = contactForm.email.value.trim();
  const message = contactForm.message.value.trim();
  const subject = translations[currentLang].mail_subject;
  const body = `${translations[currentLang].mail_body_name}: ${name}\n${translations[currentLang].mail_body_email}: ${email}\n\n${translations[currentLang].mail_body_message}:\n${message}`;
  return { to: "aaronbru.dev@gmail.com", subject, body };
};

const openMailPicker = (data) => {
  if (!mailPicker) {
    return;
  }
  mailData = data;
  mailPicker.classList.add("open");
  mailPicker.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
};

const closeMailPicker = () => {
  if (!mailPicker) {
    return;
  }
  mailPicker.classList.remove("open");
  mailPicker.setAttribute("aria-hidden", "true");
  document.body.classList.remove("lightbox-open");
};

const openWebmail = (provider) => {
  const { to, subject, body } = mailData;
  const encodedTo = encodeURIComponent(to);
  const encodedSubject = encodeURIComponent(subject || "");
  const encodedBody = encodeURIComponent(body || "");
  let url = "";

  if (provider === "gmail") {
    url = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedTo}&su=${encodedSubject}&body=${encodedBody}`;
  } else if (provider === "outlook") {
    url = `https://outlook.live.com/mail/0/deeplink/compose?to=${encodedTo}&subject=${encodedSubject}&body=${encodedBody}`;
  }

  if (url) {
    window.open(url, "_blank", "noopener,noreferrer");
  }
  closeMailPicker();
};

const copyMailText = async () => {
  const { to, subject, body } = mailData;
  const text = `Para: ${to}\nAsunto: ${subject}\n\n${body}`;
  try {
    await navigator.clipboard.writeText(text);
  } catch (error) {
    window.prompt("Copiar mensaje:", text);
  }
};

if (contactForm) {
  contactForm.addEventListener("submit", (event) => {
    event.preventDefault();
    openMailPicker(buildMailDataFromForm());
  });
}

if (mailLink) {
  mailLink.addEventListener("click", (event) => {
    event.preventDefault();
    openMailPicker({ to: "aaronbru.dev@gmail.com", subject: "", body: "" });
  });
}

if (mailPicker) {
  mailPicker.querySelectorAll("[data-mail-close]").forEach((btn) => btn.addEventListener("click", closeMailPicker));
  mailPicker.querySelectorAll("[data-mail-open]").forEach((btn) => {
    btn.addEventListener("click", () => openWebmail(btn.dataset.mailOpen));
  });
  const copyBtn = mailPicker.querySelector("[data-mail-copy]");
  if (copyBtn) {
    copyBtn.addEventListener("click", copyMailText);
  }
  document.addEventListener("keydown", (event) => {
    if (!mailPicker.classList.contains("open")) {
      return;
    }
    if (event.key === "Escape") {
      closeMailPicker();
    }
  });
}

const lightbox = document.getElementById("lightbox");
if (lightbox) {
  const lightboxMedia = document.getElementById("lightbox-media");
  const lightboxCaption = document.getElementById("lightbox-caption");
  const triggers = Array.from(document.querySelectorAll("[data-lightbox]"));
  const prevButton = lightbox.querySelector("[data-lightbox-prev]");
  const nextButton = lightbox.querySelector("[data-lightbox-next]");
  const closeButtons = lightbox.querySelectorAll("[data-lightbox-close]");
  const zoomButtons = lightbox.querySelectorAll("[data-lightbox-zoom]");
  const zoomValue = document.getElementById("lightbox-zoom-value");
  const stage = lightbox.querySelector(".lightbox-stage");
  let currentIndex = 0;
  let zoom = 1;
  let activeItems = [];
  let activeMedia = null;

  const clamp = (value, min, max) => Math.min(max, Math.max(min, value));

  const setZoom = (value) => {
    zoom = clamp(value, 0.5, 3);
    if (activeMedia) {
      activeMedia.style.transform = `scale(${zoom})`;
    }
    if (zoomValue) {
      zoomValue.textContent = `${Math.round(zoom * 100)}%`;
    }
  };

  const setActiveItems = (group) => {
    activeItems = triggers.filter((item) => item.dataset.lightbox === group);
  };

  const clearMedia = () => {
    if (!lightboxMedia) {
      activeMedia = null;
      return;
    }
    lightboxMedia.innerHTML = "";
    activeMedia = null;
  };

  const updateImage = () => {
    const item = activeItems[currentIndex];
    if (!item) {
      return;
    }
    const source = item.dataset.lightboxSrc || item.src;
    const caption = item.dataset.caption || item.alt || "";

    clearMedia();
    if (lightboxMedia && source) {
      const img = document.createElement("img");
      img.src = source;
      img.alt = item.alt || "";
      img.draggable = false;
      lightboxMedia.appendChild(img);
      activeMedia = img;
    }
    lightboxCaption.textContent = caption;
    setZoom(1);
  };

  const openLightbox = (item) => {
    if (!item) {
      return;
    }
    const group = item.dataset.lightbox || "default";
    setActiveItems(group);
    currentIndex = Math.max(0, activeItems.indexOf(item));
    updateImage();
    lightbox.classList.add("open");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("lightbox-open");
  };

  const closeLightbox = () => {
    lightbox.classList.remove("open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("lightbox-open");
    clearMedia();
  };

  const showNext = (direction) => {
    if (!activeItems.length) {
      return;
    }
    currentIndex = (currentIndex + direction + activeItems.length) % activeItems.length;
    updateImage();
  };

  triggers.forEach((item) => {
    const button = item.closest("button");
    const handler = () => openLightbox(item);
    if (button) {
      button.addEventListener("click", handler);
    } else {
      item.addEventListener("click", handler);
    }
  });

  if (prevButton) {
    prevButton.addEventListener("click", () => showNext(-1));
  }

  if (nextButton) {
    nextButton.addEventListener("click", () => showNext(1));
  }

  closeButtons.forEach((btn) => btn.addEventListener("click", closeLightbox));

  zoomButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const action = btn.dataset.lightboxZoom;
      if (action === "in") {
        setZoom(zoom + 0.2);
      } else if (action === "out") {
        setZoom(zoom - 0.2);
      } else {
        setZoom(1);
      }
    });
  });

  if (stage) {
    stage.addEventListener(
      "wheel",
      (event) => {
        if (!lightbox.classList.contains("open")) {
          return;
        }
        event.preventDefault();
        const delta = event.deltaY > 0 ? -0.1 : 0.1;
        setZoom(zoom + delta);
      },
      { passive: false }
    );
  }

  document.addEventListener("keydown", (event) => {
    if (!lightbox.classList.contains("open")) {
      return;
    }
    if (event.key === "Escape") {
      closeLightbox();
      return;
    }
    if (event.key === "ArrowRight") {
      showNext(1);
    }
    if (event.key === "ArrowLeft") {
      showNext(-1);
    }
  });
}
