const sockets = require("./sockets")


/**
 * @param {Number} port
 * @param {Number} bufferSize
 * @param {Number} packetsPerBatch
 */
const launchBroadcaster = port => {

    let websocket = sockets.getSocket(port)
    let mainBuffer = Buffer.from([])

    return {
        /**
         * @param {Buffer} buffer
         */
        appendBuffer : buffer => mainBuffer = Buffer.concat([mainBuffer, buffer]),

        broadcast : () => {
        
            websocket.clients.forEach( client => client.send(mainBuffer))
            process.stdout.write(`[ ${new Date().toLocaleTimeString()} ] ${mainBuffer.length} bytes sent to ${websocket.clients.size} listeners \r`)
            mainBuffer = Buffer.from([])
        
    
        }
    }
}



module.exports = {

    launchBroadcaster

}
