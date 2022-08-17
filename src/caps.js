'use strict';

const eventPool = require('./event-pool');
require('./vendor');
require('./driver');

eventPool.emit('startOrder');

eventPool.addListener('pickUp', payload => {
  const date = Date.now();
  const dateFormat = new Date(date).toUTCString();
  console.log(`
        EVENT: {\n
            event: "pickup",\n
            time: "${dateFormat}",\n
            payload: {\n
                store: "${payload.store}", \n
                orderID: "${payload.orderID}", \n
                customer: "${payload.customer}", \n
                address: "${payload.address}", \n
            },
        }`);
});


eventPool.addListener('inTransit', payload => {
  const date = Date.now();
  const dateFormat = new Date(date).toUTCString();
  console.log(`
  EVENT: {\n
  event: "pickup",\n
  time: "${dateFormat}",\n
  payload: {\n
    store: "${payload.store}", \n
    orderID: "${payload.orderID}", \n
    customer: "${payload.customer}", \n
    address: "${payload.address}", \n
  },
}`);
})



eventPool.addListener('delivered', payload => {
  const date = Date.now();
  const dateFormat = new Date(date).toUTCString();
  console.log(`
  EVENT: {\n
  event: "pickup",\n
  time: "${dateFormat}",\n
  payload: {\n
    store: "${payload.store}", \n
    orderID: "${payload.orderID}", \n
    customer: "${payload.customer}", \n
    address: "${payload.address}", \n
  },
}`);
})

module.exports = {
  eventPool
}










// As a vendor, I want to alert the system when I have a package to be picked up.
// As a driver, I want to be notified when there is a package to be delivered.
// As a driver, I want to alert the system when I have picked up a package and it is in transit.
// As a driver, I want to alert the system when a package has been delivered.
// As a vendor, I want to be notified when my package has been delivered.

// And as developers, here are some of the development stories that are relevant to the above.

// As a developer, I want to use industry standards for managing the state of each package.
// As a developer, I want to create an event driven system so that I can write code that happens in response to events, in real time.
