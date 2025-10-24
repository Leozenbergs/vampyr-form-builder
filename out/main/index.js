import { app, BrowserWindow } from "electron";
import { join } from "path";
import __cjs_mod__ from "node:module";
const __filename = import.meta.filename;
const __dirname = import.meta.dirname;
const require2 = __cjs_mod__.createRequire(import.meta.url);
const VITE_DEV_SERVER_URL = "http://localhost:5173/";
function createWindow() {
  console.log("createWindow called");
  const mainWindow = new BrowserWindow({
    width: 1e3,
    height: 700,
    show: true,
    webPreferences: {
      preload: join(__dirname, "../preload/index.js"),
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true
      // Enable DevTools
    }
  });
  mainWindow.webContents.openDevTools();
  {
    mainWindow.loadURL(VITE_DEV_SERVER_URL).catch((err) => console.error("Failed to load URL:", err));
  }
}
app.whenReady().then(() => {
  createWindow();
}).catch((err) => console.error("App failed to be ready:", err));
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
