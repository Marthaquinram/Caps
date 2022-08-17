'use strict';
const eventPool = require('./event-pool.js');
const chance = require("chance");
const Chance = chance();

eventPool.addListener('startOrder', newPackage);
eventPool.addListener('delivered', delivered);

function newPackage() {
  setInterval(() => {
    let store = Chance.company();
    let orderId = Chance.integer({ min: 0, max: 100000 });
    let customerName = Chance.name();
    let city = Chance.city();
    let state = Chance.state();

    let orders = {
      store: store,
      orderID: orderId,
      customer: customerName,
      address: city + ', ' + state
    }
    eventPool.emit('newOrder', orders)


  }, 10000);
}
function delivered(payload) {
  setTimeout(() => {
    console.log(`Thank you: ${payload.customer}`);

  }, 1000);
}


module.exports = {
  newPackage,
  delivered,
}
