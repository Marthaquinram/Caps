const socketIo = require("socket.io");
const io = require('./event-io');



io.on("connection", (client) => {


  client.on('newOrder', (payload) => {
    consoleEvents(payload, 'pickUp');
    io.emit('orderForDriver', payload);
  });

  client.on('pickUp', (payload) => {
    io.emit('inTransit', payload);
  });

  client.on('Driver-inTransit', (payload) => {
    consoleEvents(payload, 'inTransit');
    io.emit('Driver-delivered', payload);
  });
  client.on('delivered', (payload) => {
    setTimeout(() => {
      consoleEvents(payload, 'delivered');
    }, 2000);
    io.emit('Confirmation-delivered', payload);
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


// const { createClient } = require("redis");
// const { createAdapter } = require("@socket.io/redis-adapter");

// const pubClient = createClient({ url: "redis://localhost:6379" });
// const subClient = pubClient.duplicate();

// io.adapter(createAdapter(pubClient, subClient));
