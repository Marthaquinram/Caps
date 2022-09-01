const { io } = require('socket.io-client');
const chance = require("chance");
const Chance = chance();
const socket = io('ws://localhost:3500/vendor1');


// this getAll event will fetch all messages from the server that in the Vendors Queue(events/,messages that they didnt receive yet.)

// let getAll = {};

// - As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered.
// - As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log.

function newPackage() {
  setInterval(() => {
    let store = Chance.pickone(['acme-widets', '1-800-flowers']);
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
    // console.log('WE MADE IT', payload);


  }, 3000);
}


socket.on('Confirmation-delivered', (payload) => {
  setTimeout(() => {
    console.log('Thank you:', payload.customer, 'for your order', payload.orderID);

  }, 3500);
});



newPackage();
