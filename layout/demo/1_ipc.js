const { ipcRenderer } = require('electron')

// 测试ipc渲染进程和ipc主进程之间的通信
function ipcRender() {
    console.log(ipcRenderer.sendSync('synchronous-message', 'ping')) // prints "pong"
    ipcRenderer.on('asynchronous-reply', (event, arg) => {
        console.log(arg) // prints "pong"
    })
    ipcRenderer.send('asynchronous-message', 'ping')
}

module.exports = {
    ipcRender
}