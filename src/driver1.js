const { io } = require('socket.io-client');
const socket = io('ws://localhost:3500');


socket.on('orderForDriver', (payload) => {
  setTimeout(() => {
    console.log('DRIVER received order', payload.orderID);
    socket.emit('pickUp', payload);
  }, 1000);
})



socket.on('inTransit', (payload) => {
  setTimeout(() => {
    socket.emit('Driver-inTransit', payload);
  }, 1500);
});


socket.on('Driver-delivered', (payload) => {
  setTimeout(() => {
    console.log('DRIVER delivered order:', payload.orderID);
    socket.emit('delivered', payload);
  }, 4500);
});
