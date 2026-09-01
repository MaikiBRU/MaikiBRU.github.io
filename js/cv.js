/* CV: el boton de descarga abre el dialogo de impresion del navegador,
   que en Windows, macOS y Android permite guardar como PDF. */
(function () {
  "use strict";

  var button = document.getElementById("cv-print");
  if (!button) return;

  button.addEventListener("click", function () {
    window.print();
  });
})();
