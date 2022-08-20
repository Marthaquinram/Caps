# Event Driven Applications
Today, we will leverage the ability of Javascript to raise events, monitor events, and perform operations in response to events occurring.

# Phase 1
CAPS Phase 1: Begin the build of an application for a product called CAPS - The Code Academy Parcel Service. In this sprint, we’ll build out a system that emulates a real world supply chain. CAPS will simulate a delivery service where vendors (such a flower shops) will ship products using our delivery service and when our drivers deliver them, each vendor will be notified that their customers received what they purchased.
This will be an event driven application that “distributes” the responsibility for logging to separate modules, using only events to trigger logging based on activity.

### Pull Request

- Lab11 PR
  - <https://github.com/Marthaquinram/Caps/pull/1>
- Lab12 PR
  -

### UML
 ![UML](UML.png)


# Starting up

- Lab 11 instruction
  - In terminal run npm i to install dependencies and then run npm test to run all test.
  - npm i jest express chance nodemon.
  - in terminal run node src/caps.js to see logs of orders being picked up, in transit and delivered.
- Lab 12 Instructions
  - In terminal run npm i socket.io socket.io-client
  - in caps file require
    - const socketIo = require("socket.io");
    - const io = require('./event-io');
  - in vendor1.js bring in
    - const socket = io('ws://localhost:3500');
    - const { io } = require('socket.io-client');
    - const chance = require("chance");
    - const Chance = chance();
  - in driver1.js bring in
    - const { io } = require('socket.io-client');
    - const socket = io('ws://localhost:3500');

#### Notes

- lab 11 almost completed, working on UML and testing.
- Completed lab 12 but havent done testing.

#### Collaborators
- Tony R., Sarah T., Danny C.
