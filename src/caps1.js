const socketIo = require("socket.io");
const io = socketIo(3500);
// const { pickUp, inTransit, delivered } = require('./driver1');


io.on("connection", (client) => {


  client.on('newOrder', (pickUp) => {
    consoleEvents(pickUp, 'pickUp');
    io.emit('orderForDriver', pickUp);

  });

  client.on('pickUp', (payload) => {
    // consoleEvents(inTransit, 'pickUp');
    // console.log('EVENT', pickUp);
  });




});
function consoleEvents(payload, str) {
  const date = Date.now();
  // const dateFormat = new Date(date).toUTCString();
  console.log('WE ARE HEREEEEEEE', payload);
  // console.log(`
  // EVENT: {\n
  //   event: "${str}",\n
  //   time: "${dateFormat}",\n
  //   payload: {\n
  //     store: "${payload.store}", \n
  //     orderID: "${payload.orderID}", \n
  //     customer: "${payload.customer}", \n
  //     address: "${payload.address}", \n
  //   },
  // } `);
}
// client.on('pickUp', inTransit);
  // client.on('inTransit', delivered);
