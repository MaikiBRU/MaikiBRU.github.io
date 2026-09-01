/* Formulario de contacto sin backend.
   Valida en el cliente, descarta envios automatizados con un campo trampa y
   arma el mensaje para Gmail, Outlook o el cliente de correo del visitante. */
(function () {
  "use strict";

  var TO = "aaronbru.dev@gmail.com";
  var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  var form = document.getElementById("contact-form");
  var status = document.getElementById("form-status");
  var dialog = document.getElementById("mail-dialog");
  var mailStatus = document.getElementById("mail-status");
  if (!form || !dialog) return;

  var payload = { subject: "", body: "" };
  var lastFocused = null;

  function t(key) {
    return (window.PF && window.PF.t(key)) || "";
  }

  function say(el, message, state) {
    if (!el) return;
    el.textContent = message;
    if (state) el.setAttribute("data-state", state);
    else el.removeAttribute("data-state");
  }

  function openDialog() {
    lastFocused = document.activeElement;
    dialog.hidden = false;
    dialog.classList.add("is-open");
    document.body.classList.add("is-locked");
    say(mailStatus, "");
    var first = dialog.querySelector("[data-mail]");
    if (first) first.focus();
  }

  function closeDialog() {
    dialog.classList.remove("is-open");
    dialog.hidden = true;
    document.body.classList.remove("is-locked");
    if (lastFocused && typeof lastFocused.focus === "function") lastFocused.focus();
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    /* Campo trampa: invisible para personas, tentador para bots. */
    if (form.elements.company && form.elements.company.value.trim() !== "") return;

    var name = form.elements.name.value.trim();
    var email = form.elements.email.value.trim();
    var message = form.elements.message.value.trim();

    if (!name || !email || !message) {
      say(status, t("form_err_required"), "error");
      return;
    }
    if (!EMAIL_RE.test(email)) {
      say(status, t("form_err_email"), "error");
      form.elements.email.focus();
      return;
    }
    if (message.length < 10) {
      say(status, t("form_err_short"), "error");
      form.elements.message.focus();
      return;
    }

    say(status, "");
    payload = {
      subject: t("mail_subject") + " — " + name,
      body:
        t("mail_body_name") +
        ": " +
        name +
        "\n" +
        t("mail_body_email") +
        ": " +
        email +
        "\n\n" +
        t("mail_body_message") +
        ":\n" +
        message
    };
    openDialog();
  });

  dialog.querySelectorAll("[data-close]").forEach(function (el) {
    el.addEventListener("click", closeDialog);
  });

  dialog.querySelectorAll("[data-mail]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var to = encodeURIComponent(TO);
      var su = encodeURIComponent(payload.subject);
      var body = encodeURIComponent(payload.body);
      var provider = btn.dataset.mail;
      var url;

      if (provider === "gmail") {
        url = "https://mail.google.com/mail/?view=cm&fs=1&to=" + to + "&su=" + su + "&body=" + body;
      } else if (provider === "outlook") {
        url = "https://outlook.live.com/mail/0/deeplink/compose?to=" + to + "&subject=" + su + "&body=" + body;
      } else {
        window.location.href = "mailto:" + TO + "?subject=" + su + "&body=" + body;
        closeDialog();
        return;
      }

      window.open(url, "_blank", "noopener,noreferrer");
      closeDialog();
    });
  });

  var copyBtn = dialog.querySelector("[data-mail-copy]");
  if (copyBtn) {
    copyBtn.addEventListener("click", function () {
      var text = TO + "\n" + payload.subject + "\n\n" + payload.body;
      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(text).then(
          function () {
            say(mailStatus, t("mail_copied"), "ok");
          },
          function () {
            say(mailStatus, t("mail_copy_fail"), "error");
          }
        );
      } else {
        say(mailStatus, t("mail_copy_fail"), "error");
      }
    });
  }

  document.addEventListener("keydown", function (event) {
    if (event.key === "Escape" && !dialog.hidden) closeDialog();
  });
})();
