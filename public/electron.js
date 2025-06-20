const { app, BrowserWindow } = require("electron");
const path = require("path");

const isDev = require('electron-is-dev')

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
     icon: path.join(__dirname, "logo.png"), // Se o ícone estiver junto do electron.js
    webPreferences: {
      
      preload: path.join(__dirname, "preloader.js"),
    },
  });
  win.loadURL(isDev ? "https://jiu-jitsu-pontuation.vercel.app/" : `file://${path.join(__dirname, "../build/index.html")}`);
}

app.whenReady().then(() => {
  createWindow();

  app.on("active", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});