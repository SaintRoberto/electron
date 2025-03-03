const{ app, BrowserWindow } = require('electron');

const createWindow = () => {
    const win = new BrowserWindow({
        width: 800,
        height: 600,
        minHeight: 400,
        minWidth: 600,
        webPreferences: {
            nodeIntegration: true
        },
    });

    win.loadFile('index.html');
  //  win.loadURL('https://porfolio-rldev.vercel.app/')
}

app.whenReady().then(createWindow);