/* Internacionalizacion ES / EN.
   No usa innerHTML en ningun momento: el marcado enfatizado (**texto**) se
   construye con nodos de texto y elementos <b> creados con la API del DOM. */
(function () {
  "use strict";

  var DICT = window.PF_TRANSLATIONS || {};
  var STORE_KEY = "portfolio_lang";
  var SUPPORTED = ["es", "en"];

  function readStored() {
    try {
      var saved = window.localStorage.getItem(STORE_KEY);
      if (SUPPORTED.indexOf(saved) !== -1) return saved;
    } catch (err) {
      /* localStorage puede estar bloqueado; se ignora y se usa el idioma por defecto */
    }
    var nav = (navigator.language || "es").slice(0, 2).toLowerCase();
    return nav === "en" ? "en" : "es";
  }

  var lang = readStored();

  /* Puede haber mas de un boton de idioma: el de la cabecera y el del panel movil. */
  function toggles() {
    return Array.prototype.slice.call(document.querySelectorAll("#lang-toggle, #lang-toggle-mobile"));
  }

  function t(key) {
    var pack = DICT[lang] || {};
    if (Object.prototype.hasOwnProperty.call(pack, key)) return pack[key];
    var fallback = DICT.es || {};
    return Object.prototype.hasOwnProperty.call(fallback, key) ? fallback[key] : null;
  }

  /* Renderiza "texto **resaltado** texto" sin innerHTML. */
  function renderRich(el, value) {
    var parts = String(value).split("**");
    var frag = document.createDocumentFragment();
    for (var i = 0; i < parts.length; i += 1) {
      if (!parts[i]) continue;
      if (i % 2 === 1) {
        var strong = document.createElement("strong");
        strong.textContent = parts[i];
        frag.appendChild(strong);
      } else {
        frag.appendChild(document.createTextNode(parts[i]));
      }
    }
    el.replaceChildren(frag);
  }

  function applyAttr(selector, dataKey, apply) {
    document.querySelectorAll(selector).forEach(function (el) {
      var value = t(el.dataset[dataKey]);
      if (value !== null) apply(el, value);
    });
  }

  function apply() {
    document.documentElement.lang = lang;

    applyAttr("[data-i18n]", "i18n", function (el, value) {
      el.textContent = value;
    });
    applyAttr("[data-i18n-rich]", "i18nRich", renderRich);
    applyAttr("[data-i18n-placeholder]", "i18nPlaceholder", function (el, value) {
      el.setAttribute("placeholder", value);
    });
    applyAttr("[data-i18n-alt]", "i18nAlt", function (el, value) {
      el.setAttribute("alt", value);
    });
    applyAttr("[data-i18n-caption]", "i18nCaption", function (el, value) {
      el.setAttribute("data-caption", value);
    });
    applyAttr("[data-i18n-aria]", "i18nAria", function (el, value) {
      el.setAttribute("aria-label", value);
    });

    toggles().forEach(function (toggle) {
      toggle.textContent = lang === "es" ? "EN" : "ES";
      toggle.setAttribute("aria-label", t("lang_aria") || "");
    });

    document.dispatchEvent(new CustomEvent("pf:langchange", { detail: { lang: lang } }));
  }

  function setLang(next) {
    if (SUPPORTED.indexOf(next) === -1 || next === lang) return;
    lang = next;
    try {
      window.localStorage.setItem(STORE_KEY, lang);
    } catch (err) {
      /* sin persistencia, el cambio sigue valiendo para esta visita */
    }
    apply();
  }

  window.PF = window.PF || {};
  window.PF.t = t;
  window.PF.getLang = function () {
    return lang;
  };
  window.PF.setLang = setLang;

  toggles().forEach(function (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      setLang(lang === "es" ? "en" : "es");
    });
  });

  apply();
})();
