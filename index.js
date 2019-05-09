const {app, BrowserWindow} = require('electron');

const ipcTest = require('./layout/demo/1_ipc_main');
ipcTest.ipcMain1()

app.on('ready', () => {

    const win = new BrowserWindow({
        width: 540,
        height: 720,
        frame: false,
        resizable: false
    });

    // win.webContents.openDevTools();

    win.loadFile('./layout/index.html');

});


