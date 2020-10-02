# buffer-broadcaster

Websocket client for compressing and then broadcasting large buffers.

## Install

```bash
npm i buffer-broadcaster
``` 

## Usage

For using the library, you must create a broadcaster using the `launchBroadcaster` method, as such:

```javascript

const bp = require('buffer-broadcaster')
const port = 7000 // port through where the sockets will be emited

const broadcaster = bp.launchBroadcaster(port)

```

Once you've done that, you have on hold a new empity Buffer. As you gather your data, you can append it just like that:

```javascript

broadcaster.appendBuffer(dataBuffer)

```

After you have all the data you need to transmit, you broadcast it, cleaning the buffer on hold.

```javascript

broadcaster.broadcast()

```