/* Navegacion: cabecera adherida, menu movil accesible y seccion activa. */
(function () {
  "use strict";

  var header = document.getElementById("site-header");
  var toggle = document.getElementById("nav-toggle");
  var menu = document.getElementById("mobile-menu");
  var navLinks = Array.prototype.slice.call(document.querySelectorAll("[data-nav]"));

  /* ---- Cabecera adherida ---- */
  if (header) {
    var onScroll = function () {
      header.classList.toggle("is-stuck", window.scrollY > 8);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---- Menu movil ---- */
  /* El boton tiene texto visible: se alterna la etiqueta, no un aria-label. */
  function setMenu(open) {
    if (!menu || !toggle) return;
    menu.classList.toggle("is-open", open);
    menu.hidden = !open;
    toggle.setAttribute("aria-expanded", String(open));
    var label = toggle.querySelector("[data-i18n]");
    if (label) {
      label.dataset.i18n = open ? "nav_close" : "nav_menu";
      label.textContent = (window.PF && window.PF.t(label.dataset.i18n)) || label.textContent;
    }
    document.body.classList.toggle("is-locked", open);
  }

  if (toggle && menu) {
    menu.hidden = true;
    toggle.addEventListener("click", function () {
      setMenu(toggle.getAttribute("aria-expanded") !== "true");
    });

    menu.addEventListener("click", function (event) {
      if (event.target.closest("a")) setMenu(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape" && toggle.getAttribute("aria-expanded") === "true") {
        setMenu(false);
        toggle.focus();
      }
    });

    /* Al pasar a escritorio el panel deja de existir: hay que soltar el scroll. */
    var desktop = window.matchMedia("(min-width: 1025px)");
    var onChange = function (event) {
      if (event.matches) setMenu(false);
    };
    if (desktop.addEventListener) desktop.addEventListener("change", onChange);
    else desktop.addListener(onChange);
  }

  /* ---- Seccion activa ---- */
  if (navLinks.length && "IntersectionObserver" in window) {
    var sections = navLinks
      .map(function (link) {
        return document.querySelector(link.getAttribute("href"));
      })
      .filter(Boolean);

    var visible = new Set();

    var mark = function () {
      var current = sections.filter(function (section) {
        return visible.has(section.id);
      })[0];
      navLinks.forEach(function (link) {
        link.classList.toggle("is-active", Boolean(current) && link.getAttribute("href") === "#" + current.id);
      });
    };

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) visible.add(entry.target.id);
          else visible.delete(entry.target.id);
        });
        mark();
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });
  }
})();
