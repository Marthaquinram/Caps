'use strict';
const eventPool = require('./event-pool');

eventPool.addListener('newOrder', pickUp);
eventPool.addListener('pickUp', inTransit);
eventPool.addListener('inTransit', delivered);
// eventPool.addListener('delivered', inTransit);

function pickUp(payload) {
  setTimeout(() => {
    console.log(`DRIVER picked up: ${payload.orderID}`);
    eventPool.emit('pickUp', payload);
  }, 1000);
}

function inTransit(payload) {
  setTimeout(() => {
    console.log(`DRIVER in transit: ${payload.orderID}`);
    eventPool.emit('inTransit', payload);
  }, 2000);
}

function delivered(payload) {
  setTimeout(() => {
    console.log(`DRIVER delivered: ${payload.orderID}`);
    eventPool.emit('delivered', payload);
  }, 3000);
}

module.exports = {
  pickUp,
  inTransit,
  delivered
}
