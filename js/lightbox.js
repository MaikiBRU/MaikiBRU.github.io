/* Visor de imagenes: agrupa por data-lightbox, navega con teclado y hace zoom.
   La imagen se crea con document.createElement, nunca con innerHTML. */
(function () {
  "use strict";

  var dialog = document.getElementById("lightbox");
  var triggers = Array.prototype.slice.call(document.querySelectorAll("[data-lightbox][data-src]"));
  if (!dialog || !triggers.length) return;

  var stage = document.getElementById("lb-stage");
  var captionEl = document.getElementById("lb-caption");
  var countEl = document.getElementById("lb-count");
  var zoomEl = document.getElementById("lb-zoom-value");
  var closeBtn = dialog.querySelector(".dialog-close");

  var group = [];
  var index = 0;
  var zoom = 1;
  var media = null;
  var lastFocused = null;

  function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
  }

  function setZoom(value) {
    zoom = clamp(value, 0.5, 3);
    if (media) media.style.transform = "scale(" + zoom + ")";
    if (zoomEl) zoomEl.textContent = Math.round(zoom * 100) + "%";
  }

  function captionFor(trigger) {
    var img = trigger.querySelector("img");
    return trigger.dataset.caption || (img && (img.dataset.caption || img.alt)) || "";
  }

  function altFor(trigger) {
    var img = trigger.querySelector("img");
    return (img && img.alt) || captionFor(trigger);
  }

  function render() {
    var trigger = group[index];
    if (!trigger) return;

    if (media) media.remove();
    media = document.createElement("img");
    media.src = trigger.dataset.src;
    media.alt = altFor(trigger);
    media.draggable = false;
    stage.appendChild(media);

    captionEl.textContent = captionFor(trigger);
    countEl.textContent = group.length > 1 ? index + 1 + " / " + group.length : "";
    setZoom(1);
  }

  function open(trigger) {
    var name = trigger.dataset.lightbox;
    group = triggers.filter(function (item) {
      return item.dataset.lightbox === name;
    });
    index = Math.max(0, group.indexOf(trigger));
    lastFocused = document.activeElement;

    render();
    dialog.hidden = false;
    dialog.classList.add("is-open");
    document.body.classList.add("is-locked");
    if (closeBtn) closeBtn.focus();

    var single = group.length < 2;
    dialog.querySelectorAll("[data-lb-step]").forEach(function (btn) {
      btn.hidden = single;
    });
  }

  function close() {
    dialog.classList.remove("is-open");
    dialog.hidden = true;
    document.body.classList.remove("is-locked");
    if (media) {
      media.remove();
      media = null;
    }
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  function step(delta) {
    if (group.length < 2) return;
    index = (index + delta + group.length) % group.length;
    render();
  }

  /* Nombre accesible explicito: el boton abre una vista ampliada, no solo
     "es" la imagen. Se recalcula al cambiar de idioma. */
  function labelTriggers() {
    var prefix = (window.PF && window.PF.t("lb_expand")) || "";
    triggers.forEach(function (trigger) {
      var text = captionFor(trigger);
      trigger.setAttribute("aria-label", prefix ? prefix + ": " + text : text);
    });
  }

  triggers.forEach(function (trigger) {
    trigger.addEventListener("click", function () {
      open(trigger);
    });
  });

  labelTriggers();

  dialog.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", close);
  });

  dialog.querySelectorAll("[data-lb-step]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      step(Number(btn.dataset.lbStep));
    });
  });

  dialog.querySelectorAll("[data-lb-zoom]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var dir = Number(btn.dataset.lbZoom);
      setZoom(dir === 0 ? 1 : zoom + dir * 0.25);
    });
  });

  stage.addEventListener(
    "wheel",
    function (event) {
      if (dialog.hidden) return;
      event.preventDefault();
      setZoom(zoom + (event.deltaY > 0 ? -0.12 : 0.12));
    },
    { passive: false }
  );

  document.addEventListener("keydown", function (event) {
    if (dialog.hidden) return;
    if (event.key === "Escape") {
      close();
    } else if (event.key === "ArrowRight") {
      step(1);
    } else if (event.key === "ArrowLeft") {
      step(-1);
    } else if (event.key === "Tab") {
      /* Mantiene el foco dentro del dialogo mientras esta abierto. */
      var focusables = dialog.querySelectorAll("button:not([hidden])");
      if (!focusables.length) return;
      var first = focusables[0];
      var last = focusables[focusables.length - 1];
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }
  });

  /* Al cambiar de idioma se actualizan los data-caption; refrescamos el visible. */
  document.addEventListener("pf:langchange", function () {
    labelTriggers();
    if (!dialog.hidden && group[index]) captionEl.textContent = captionFor(group[index]);
  });
})();
