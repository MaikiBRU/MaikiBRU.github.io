const translations = {
  es: {
    cv_role: "Full Stack Junior - Diseño Web Freelance",
    cv_summary: "Disponible full time para empresas y tambien para proyectos freelance.",
    cv_pdf: "Descargar PDF",
    cv_portfolio: "Portfolio",
    cv_location: "Rosario, Santa Fe",
    cv_profile_title: "Perfil",
    cv_profile_text:
      "Estudiante del ultimo año de Desarrollo de Software. Full Stack Junior con foco en diseño web freelance y busco mi primera experiencia IT.",
    cv_skills_title: "Habilidades tecnicas",
    cv_skills_1: "Python, C#, JavaScript",
    cv_skills_2: "SQL / MySQL Workbench",
    cv_skills_3: "UI/UX y diseño web",
    cv_skills_4: "Frameworks: Django, Flask, FastAPI",
    cv_skills_5: "Aprendiendo: Haskell y Unity",
    cv_soft_title: "Habilidades complementarias",
    cv_soft_1: "Atencion al cliente",
    cv_soft_2: "Control de stock",
    cv_soft_3: "Responsabilidad y trabajo en equipo",
    cv_education_title: "Educacion",
    cv_education_school: "Instituto Belgrano, Rosario",
    cv_education_program: "Desarrollo de Software - 2024 - 2026 (en curso)",
    cv_education_secondary: "Secundaria completa - Maria Bicecci (2019 - 2023)",
    cv_education_primary: "Primaria completa - Padre Cantilo - Pablo Richeri (2011 - 2018)",
    cv_languages_title: "Idiomas",
    cv_language_1: "Español nativo",
    cv_language_2: "Ingles intermedio",
    cv_language_3: "Portugues basico",
    cv_project_title: "Proyecto destacado",
    cv_project_name: "StockARG",
    cv_project_desc:
      "Sistema de gestion de stock, ventas y clientes. Interfaz moderna en Tkinter. Desarrollado en 2 semanas.",
    cv_project_1: "ABM de clientes, proveedores y productos.",
    cv_project_2: "Ventas con control de stock y reportes exportables.",
    cv_project_meta_1: "Python",
    cv_project_meta_2: "Tkinter",
    cv_project_meta_3: "MySQL",
    cv_project_meta_4: "2 semanas",
    cv_experience_title: "Experiencia",
    cv_exp1_title: "Vendedor y atencion al cliente",
    cv_exp1_company: "Local de Ropa \"KINGU\" - 03/2025 - 11/2025",
    cv_exp1_text: "Atencion personalizada, manejo de caja, cobros y cierres. Orden y mantenimiento del local.",
    cv_exp2_title: "Vendedor y control de stock",
    cv_exp2_company: "Almacen \"Tina\" - 02/2024 - 12/2024",
    cv_exp2_text: "Atencion al cliente y control de mercaderia. Orden y organizacion.",
    cv_exp3_title: "Pasantia administrativa",
    cv_exp3_company: "S.I.S.O SRL - 11/2023 - 12/2023",
    cv_exp3_text: "Carga y correccion de datos en software contable.",
    cv_availability_title: "Disponibilidad",
    cv_availability_text: "Lunes a sabado: full time. Disponible para empresa y proyectos freelance."
  },
  en: {
    cv_role: "Junior Full Stack - Freelance Web Design",
    cv_summary: "Available full time for companies and also for freelance projects.",
    cv_pdf: "Download PDF",
    cv_portfolio: "Portfolio",
    cv_location: "Rosario, Santa Fe",
    cv_profile_title: "Profile",
    cv_profile_text:
      "Final-year Software Development student. Junior Full Stack focused on freelance web design and seeking my first IT role.",
    cv_skills_title: "Technical skills",
    cv_skills_1: "Python, C#, JavaScript",
    cv_skills_2: "SQL / MySQL Workbench",
    cv_skills_3: "UI/UX and web design",
    cv_skills_4: "Frameworks: Django, Flask, FastAPI",
    cv_skills_5: "Learning: Haskell and Unity",
    cv_soft_title: "Complementary skills",
    cv_soft_1: "Customer service",
    cv_soft_2: "Stock control",
    cv_soft_3: "Responsibility and teamwork",
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
    cv_project_1: "CRUD for customers, suppliers, and products.",
    cv_project_2: "Sales with stock control and exportable reports.",
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
