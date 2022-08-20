const { io } = require('socket.io-client');
const chance = require("chance");
const Chance = chance();
const socket = io('ws://localhost:3500');

function newPackage() {
  setInterval(() => {
    let store = Chance.company();
    let orderId = Chance.integer({ min: 0, max: 100000 });
    let customerName = Chance.name();
    let city = Chance.city();
    let state = Chance.state();
    let alert = '';

    let payload = {
      store: store,
      orderID: orderId,
      customer: customerName,
      address: city + ', ' + state,
      status: alert
    }
    socket.emit('newOrder', payload)


  }, 12000);
}


socket.on('Confirmation-delivered', (payload) => {
  setTimeout(() => {
    console.log('Thank you:', payload.customer);

  }, 3500);
});



newPackage();
