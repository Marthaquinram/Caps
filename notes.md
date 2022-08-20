1. As a vendor, I want to “subscribe” to “delivered” notifications so that I know when my packages are delivered.
2. As a vendor, I want to “catch up” on any “delivered” notifications that I might have missed so that I can see a complete log.
3. As a driver, I want to “subscribe” to “pickup” notifications so that I know what packages to deliver.
4. As a driver, I want to “catch up” on any “pickup” notifications I may have missed so that I can deliver everything.
5. As a driver, I want a way to “scan” a delivery so that the vendors know when a package has been delivered.


 # And as developers, here are some of the development stories that are newly relevant to the above.

1. As a developer, I want to create a system of tracking who is subscribing to each event.
2. As a developer, I want to place all inbound messages into a “queue” so that my application knows what events are to be delivered.
3. As a developer, I want to create a system for communicating when events have been delivered and received by subscribers.
4. As a developer, I want to delete messages from the queue after they’ve been received by a subscriber, so that I don’t re-send them.
5. As a developer, I want to create a system for allowing subscribers to retrieve all undelivered messages in their queue.
