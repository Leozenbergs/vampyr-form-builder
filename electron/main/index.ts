import { app, BrowserWindow } from 'electron';
import { join } from 'path';

const VITE_DEV_SERVER_URL = process.env.VITE_DEV_SERVER_URL

function createWindow() {
  console.log('createWindow called');
  const mainWindow = new BrowserWindow({
    width: 1000,
    height: 700,
    show: true,
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      nodeIntegration: true,
      contextIsolation: false,
      devTools: true, // Enable DevTools
    }
  });

  mainWindow.webContents.openDevTools(); // Open DevTools automatically

  if (VITE_DEV_SERVER_URL) {
    mainWindow.loadURL(VITE_DEV_SERVER_URL).catch(err => console.error('Failed to load URL:', err));
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html')).catch(err => console.error('Failed to load file:', err));
  }
}

app.whenReady().then(() => {
  createWindow();
}).catch(err => console.error('App failed to be ready:', err));

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});