const translations = {
  es: {
    cv_role: "Full Stack Junior - Diseño Web Freelance",
    cv_summary: "Disponible full time para empresas y también para proyectos freelance.",
    cv_pdf: "Descargar PDF",
    cv_portfolio: "Portfolio",
    cv_location: "Rosario, Santa Fe",
    cv_profile_title: "Perfil / Objetivo profesional",
    cv_profile_text:
      "Estudiante del último año de Desarrollo de Software. Busco mi primera experiencia en IT, aportar en equipos full stack y seguir creciendo en desarrollo y diseño web. Responsable, aprendo rápido y doy lo mejor en cada proyecto.",
    cv_skills_title: "Habilidades técnicas",
    cv_skills_1: "Python, C#, JavaScript",
    cv_skills_2: "MySQL Workbench y SQL básico",
    cv_skills_3: "HTML y CSS básico",
    cv_skills_4: "UI/UX y diseño web",
    cv_skills_5: "Frameworks: Django, Flask, FastAPI",
    cv_skills_6: "Aprendiendo: Haskell y desarrollo de videojuegos en Unity",
    cv_soft_title: "Habilidades complementarias",
    cv_soft_1: "Atención al cliente",
    cv_soft_2: "Resolución de problemas",
    cv_soft_3: "Responsabilidad y adaptabilidad",
    cv_soft_4: "Microsoft 365",
    cv_education_title: "Educación",
    cv_education_school: "Instituto Belgrano, Rosario",
    cv_education_program: "Desarrollo de Software - 2024 - 2026 (en curso)",
    cv_education_secondary: "Secundaria completa - Maria Bicecci (2019 - 2023)",
    cv_education_primary: "Primaria completa - Padre Cantilo - Pablo Richeri (2011 - 2018)",
    cv_languages_title: "Idiomas",
    cv_language_1: "Español nativo",
    cv_language_2: "Inglés intermedio",
    cv_language_3: "Portugués básico",
    cv_project_title: "Proyecto destacado",
    cv_project_name: "StockARG",
    cv_project_desc:
      "Sistema de gestión de stock, ventas y clientes con interfaz moderna en Tkinter. Desarrollado en 2 semanas.",
    cv_project_1: "Login con email/contraseña y opción Google (opcional).",
    cv_project_2: "ABM de clientes, proveedores y productos.",
    cv_project_3: "Ventas con control de stock y reportes exportables.",
    cv_project_4: "Módulo de stock con alertas, movimientos y panel de estado.",
    cv_project_meta_1: "Python",
    cv_project_meta_2: "Tkinter",
    cv_project_meta_3: "MySQL",
    cv_project_meta_4: "2 semanas",
    cv_experience_title: "Experiencia",
    cv_exp1_title: "Vendedor y atención al cliente",
    cv_exp1_company: "Local de Ropa \"KINGU\" - 03/2025 - 11/2025",
    cv_exp1_text: "Atención personalizada, manejo de caja, cobros y cierres. Orden y mantenimiento del local.",
    cv_exp2_title: "Vendedor y control de stock",
    cv_exp2_company: "Almacén \"Tina\" - 02/2024 - 12/2024",
    cv_exp2_text: "Atención al cliente y control de mercadería. Orden y organización.",
    cv_exp3_title: "Pasantía administrativa",
    cv_exp3_company: "S.I.S.O SRL - 11/2023 - 12/2023",
    cv_exp3_text: "Uso de software contable para regularización de deudas y corrección de datos de clientes.",
    cv_availability_title: "Disponibilidad",
    cv_availability_text: "Lunes a sábado: full time. Disponible para empresa y proyectos freelance."
  },
  en: {
    cv_role: "Junior Full Stack - Freelance Web Design",
    cv_summary: "Available full time for companies and also for freelance projects.",
    cv_pdf: "Download PDF",
    cv_portfolio: "Portfolio",
    cv_location: "Rosario, Santa Fe",
    cv_profile_title: "Profile / Objective",
    cv_profile_text:
      "Final-year Software Development student seeking my first IT role. I want to contribute to full stack teams and keep growing in development and web design. Responsible, fast learner, and committed to each project.",
    cv_skills_title: "Technical skills",
    cv_skills_1: "Python, C#, JavaScript",
    cv_skills_2: "MySQL Workbench and basic SQL",
    cv_skills_3: "Basic HTML and CSS",
    cv_skills_4: "UI/UX and web design",
    cv_skills_5: "Frameworks: Django, Flask, FastAPI",
    cv_skills_6: "Learning: Haskell and Unity game dev",
    cv_soft_title: "Complementary skills",
    cv_soft_1: "Customer service",
    cv_soft_2: "Problem solving",
    cv_soft_3: "Responsibility and adaptability",
    cv_soft_4: "Microsoft 365",
    cv_education_title: "Education",
    cv_education_school: "Instituto Belgrano, Rosario",
    cv_education_program: "Software Development - 2024 - 2026 (in progress)",
    cv_education_secondary: "High school completed - Maria Bicecci (2019 - 2023)",
    cv_education_primary: "Primary completed - Padre Cantilo - Pablo Richeri (2011 - 2018)",
    cv_languages_title: "Languages",
    cv_language_1: "Spanish native",
    cv_language_2: "English intermediate",
    cv_language_3: "Portuguese basic",
    cv_project_title: "Featured project",
    cv_project_name: "StockARG",
    cv_project_desc:
      "Stock, sales, and customer management system with a modern Tkinter UI. Built in 2 weeks.",
    cv_project_1: "Email/password login with optional Google sign-in.",
    cv_project_2: "CRUD for customers, suppliers, and products.",
    cv_project_3: "Sales with stock control and exportable reports.",
    cv_project_4: "Stock module with alerts, movements, and status panel.",
    cv_project_meta_1: "Python",
    cv_project_meta_2: "Tkinter",
    cv_project_meta_3: "MySQL",
    cv_project_meta_4: "2 weeks",
    cv_experience_title: "Experience",
    cv_exp1_title: "Sales and customer service",
    cv_exp1_company: "KINGU Clothing Store - 03/2025 - 11/2025",
    cv_exp1_text: "Personalized service, cash handling, payments, and closing. Order and store maintenance.",
    cv_exp2_title: "Sales and stock control",
    cv_exp2_company: "Tina Grocery Store - 02/2024 - 12/2024",
    cv_exp2_text: "Customer service and stock control. Order and organization.",
    cv_exp3_title: "Administrative internship",
    cv_exp3_company: "S.I.S.O SRL - 11/2023 - 12/2023",
    cv_exp3_text: "Data entry and corrections in accounting software.",
    cv_availability_title: "Availability",
    cv_availability_text: "Monday to Saturday: full time. Available for company roles and freelance projects."
  }
};

const langToggle = document.getElementById("cv-lang-toggle");

const setLanguage = (lang) => {
  document.documentElement.lang = lang;
  localStorage.setItem("portfolio_lang", lang);
  if (langToggle) {
    langToggle.textContent = lang === "es" ? "EN" : "ES";
  }

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.dataset.i18n;
    if (translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });
};

if (langToggle) {
  const initialLang = localStorage.getItem("portfolio_lang") || "es";
  setLanguage(initialLang);

  langToggle.addEventListener("click", () => {
    const next = document.documentElement.lang === "es" ? "en" : "es";
    setLanguage(next);
  });
}

const pdfButton = document.getElementById("cv-pdf");
if (pdfButton) {
  pdfButton.addEventListener("click", () => {
    window.print();
  });
}
