const { io } = require('socket.io-client');
const socket = io('ws://localhost:300');

// socket.on('newOrder', pickUp);
// socket.on('pickUp', inTransit);
// socket.on('inTransit', delivered);

function pickUp(payload) {
  setTimeout(() => {
    socket.on('orderForDriver', (payload) => {
      console.log(`DRIVER picked up: ${payload.orderID}`);
      socket.emit('pickUp', payload);
    }, 1000);
  })
}

function inTransit(payload) {
  setTimeout(() => {
    consoleEvents(payload, 'inTransit');
    console.log(`DRIVER in transit: ${payload.orderID}`);
    socket.emit('inTransit', payload);
  }, 2000);
}

function delivered(payload) {
  setTimeout(() => {
    consoleEvents(payload, 'delivered');
    console.log(`DRIVER delivered: ${payload.orderID}`);
    socket.emit('delivered', payload);
  }, 3000);
}

pickUp();


module.exports = {
  pickUp,
  inTransit,
  delivered
}
