/* Arranque del idioma, antes del primer pintado.
   El HTML trae el texto en espanol. Si el visitante va a ver la pagina en
   ingles, se oculta el contenido hasta que i18n.js lo traduce: sin esto se
   ve un instante en espanol y el cambio de largo de los textos mueve todo
   el layout. Si i18n.js no llega a correr, base.css vuelve a mostrar la
   pagina sola a los 1.5 segundos. */
(function () {
  "use strict";

  var saved = null;
  try {
    saved = window.localStorage.getItem("portfolio_lang");
  } catch (err) {
    /* localStorage bloqueado: se decide por el idioma del navegador */
  }

  var lang = saved === "es" || saved === "en" ? saved : (navigator.language || "es").slice(0, 2).toLowerCase();
  if (lang === "en") document.documentElement.classList.add("lang-pending");
})();
