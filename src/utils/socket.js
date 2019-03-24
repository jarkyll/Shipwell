// Import socket.io with a connection to a channel (i.e. tops)
const Initsocket = () => {
  const socket = require('socket.io-client')('https://cloud-sse.iexapis.com/beta/stocksUS')
  // Listen to the channel's messages
  socket.on('message', message => {
    console.log('hi');
    console.log(message)
  })
  
  // Connect to the channel
  socket.on('connect', () => {
  
    // Subscribe to topics (i.e. appl,fb,aig+)
    socket.emit('subscribe', 'snap,fb,aig+')
  
    // Unsubscribe from topics (i.e. aig+)
    socket.emit('unsubscribe', 'aig+')
  })
  
  // Disconnect from the channel
  socket.on('disconnect', () => console.log('Disconnected.'))
  return socket;
}

export default Initsocket;