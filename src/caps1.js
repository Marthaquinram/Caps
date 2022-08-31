const socketIo = require("socket.io");
const io = require('./event-io');
// const caps1 = require('./event-io');
const vendors = io.of('/vendor1');
const drivers = io.of('/driver1');

// let vendorQueue = [];
// let driverQueue = [];

io.on("connection", (client) => {


});
// connection to vendor-io
vendors.on("connection", (vendor) => {

  vendor.on('newOrder', (payload) => {
    console.log('SocketID:', vendor.id);
    console.log('creating new room for ', payload.store);
    vendor.join(payload.store);
    consoleEvents(payload, 'pickUp');
    drivers.emit('orderForDriver', payload);
  });

});


// connection to driver-io
drivers.on("connection", (driver) => {

  driver.on('pickUp', (payload) => {
    driver.emit('inTransit', payload);
  });
  driver.on('Driver-inTransit', (payload) => {
    consoleEvents(payload, 'inTransit');
    driver.emit('Driver-delivered', payload);
  });


  driver.on('delivered', (payload) => {
    setTimeout(() => {
      consoleEvents(payload, 'delivered');
    }, 2000);
    vendors.emit('Confirmation-delivered', payload);
  });

});




function consoleEvents(payload, str) {
  const date = Date.now();
  const dateFormat = new Date(date).toUTCString();
  console.log(`
  EVENT: {\n
    event: "${str}",\n
    time: "${dateFormat}",\n
    payload: {\n
      store: "${payload.store}", \n
      orderID: "${payload.orderID}", \n
      customer: "${payload.customer}", \n
      address: "${payload.address}", \n
    },
  } `);
}

// TODO:

 // - As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver.
  // - As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything.
  // - As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.
