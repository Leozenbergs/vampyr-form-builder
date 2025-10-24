const { app, BrowserWindow } = require('electron');

function createWindow () {
  console.log("Starting Electron App...");
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadURL('http://localhost:3000')
}

app.whenReady().then(createWindow)