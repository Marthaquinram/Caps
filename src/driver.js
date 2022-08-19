// 'use strict';
// const eventPool = require('./event-pool');

// socket.on('newOrder', pickUp);
// socket.on('pickUp', inTransit);
// socket.on('inTransit', delivered);
// // eventPool.addListener('delivered', inTransit);

// function pickUp(payload) {
//   setTimeout(() => {
//     console.log(`DRIVER picked up: ${payload.orderID}`);
//     socket.emit('pickUp', payload);
//   }, 1000);
// }

// function inTransit(payload) {
//   setTimeout(() => {
//     console.log(`DRIVER in transit: ${payload.orderID}`);
//     socket.emit('inTransit', payload);
//   }, 2000);
// }

// function delivered(payload) {
//   setTimeout(() => {
//     console.log(`DRIVER delivered: ${payload.orderID}`);
//     socket.emit('delivered', payload);
//   }, 3000);
// }

// module.exports = {
//   pickUp,
//   inTransit,
//   delivered
// }
