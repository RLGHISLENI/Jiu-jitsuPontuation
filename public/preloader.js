// preloader.js
// Este script é executado antes do renderer process no Electron.
// Pode ser usado para expor APIs seguras ou inicializar variáveis globais.

window.addEventListener("DOMContentLoaded", () => {
  // Exemplo: Expor uma função global
  window.electronVersion = process.versions.electron;
});
