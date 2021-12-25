// Modules to control application life and create native browser window
const { app, BrowserWindow, screen } = require('electron')

app.on('ready', () => {
    const mainWindow = new BrowserWindow({
      width: 600,
      height: 600,
      show: false,
      webPreferences: {
        nodeIntegration: true,
        contextIsolation: false
      }
    })

    //mainWindow.maximize();
    //mainWindow.setPosition(screen.getPrimaryDisplay().bounds.width - 600,0);
    mainWindow.show();
    //mainWindow.loadURL(`http://localhost:3000`);
    mainWindow.loadURL(`file:///C:/img2text/resources/app/frontend/build/index.html`);
})