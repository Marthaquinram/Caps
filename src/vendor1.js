const { io } = require('socket.io-client');
const chance = require("chance");
const Chance = chance();
const socket = io('ws://localhost:3500');

// socket.on('startOrder', newPackage);
// eventPool.addListener('delivered', delivered);

function newPackage() {
  setInterval(() => {
    let store = Chance.company();
    let orderId = Chance.integer({ min: 0, max: 100000 });
    let customerName = Chance.name();
    let city = Chance.city();
    let state = Chance.state();
    let alert = '';

    let orders = {
      store: store,
      orderID: orderId,
      customer: customerName,
      address: city + ', ' + state,
      status: alert
    }
    socket.emit('newOrder', orders)


  }, 10000);
}

function delivered(payload) {
  setTimeout(() => {
    console.log(`Thank you: ${payload.customer}`);

  }, 1000);
}
newPackage();
delivered();
