const { app, BrowserWindow } = require("electron");
const path = require("path");

function isProduction() {
  // Detecta produção pelo empacotamento do Electron
  return !process.defaultApp && process.env.NODE_ENV !== "development";
}

function createWindow() {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    icon: path.join(__dirname, "logo.png"),
    webPreferences: {
      preload: path.join(__dirname, "preloader.js"),
    },
  });
  // win.loadURL(
  //   isProduction()
  //     ? `file://${path.join(__dirname, "../build/index.html")}`
  //     : "https://jiu-jitsu-pontuation.vercel.app/"
  // );
  win.loadURL(`file://${path.join(__dirname, "../build/index.html")}`);
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
