/* Internacionalizacion ES / EN.
   El espanol vive en un solo lugar: el propio HTML. Al cargar, antes de
   traducir nada, se toma una copia de cada texto marcado y esa copia es el
   diccionario espanol. El archivo de datos solo trae el ingles, mas las pocas
   cadenas en espanol que no estan en el HTML (mensajes que arma el JS).
   No usa innerHTML en ningun momento: el marcado enfatizado (**texto**) se
   construye con nodos de texto y elementos <strong> creados con la API del DOM. */
(function () {
  "use strict";

  var DICT = window.PF_TRANSLATIONS || {};
  DICT.es = DICT.es || {};
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

  /* Inverso de renderRich: vuelve a escribir los <strong> como **texto**. */
  function readRich(el) {
    var out = "";
    el.childNodes.forEach(function (node) {
      if (node.nodeType === 1 && (node.tagName === "STRONG" || node.tagName === "B")) {
        out += "**" + node.textContent + "**";
      } else {
        out += node.textContent;
      }
    });
    return out;
  }

  /* Copia el espanol del HTML al diccionario. Lo que ya esta en el
     diccionario no se pisa. Los espacios se normalizan: el HTML corta las
     lineas largas y eso no es parte del texto. */
  function snapshot(selector, dataKey, read) {
    document.querySelectorAll(selector).forEach(function (el) {
      var key = el.dataset[dataKey];
      if (!key || Object.prototype.hasOwnProperty.call(DICT.es, key)) return;
      var value = read(el);
      if (value !== null) DICT.es[key] = String(value).replace(/\s+/g, " ").trim();
    });
  }

  snapshot("[data-i18n]", "i18n", function (el) {
    return el.textContent;
  });
  snapshot("[data-i18n-rich]", "i18nRich", readRich);
  snapshot("[data-i18n-placeholder]", "i18nPlaceholder", function (el) {
    return el.getAttribute("placeholder");
  });
  snapshot("[data-i18n-alt]", "i18nAlt", function (el) {
    return el.getAttribute("alt");
  });
  snapshot("[data-i18n-caption]", "i18nCaption", function (el) {
    return el.getAttribute("data-caption");
  });
  snapshot("[data-i18n-aria]", "i18nAria", function (el) {
    return el.getAttribute("aria-label");
  });

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

    document.documentElement.classList.remove("lang-pending");
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
