const WebSocket = require('ws');

const wss = new WebSocket.Server({host: '10.66.55.22', port: 4567});
console.log(wss)

wss.on('connection', (ws) => {
    console.log('Connected')
    ws.on('message', (temp) => {
        data = JSON.parse(temp)
        if (data.type == "init") {
            console.log('init')
        }
        else if (data.status == "pressed") {
            console.log('pressed')
        }
        else if (data.status == "released") {
            console.log('released')
        }
        else {
            console.log("invalid data type")
        }
        console.log(data)
    });
    ws.on('close', () => {
        console.log("The server is now closed")
    })
    ws.on('error', (error) => {
        console.log(error)
    })
})
