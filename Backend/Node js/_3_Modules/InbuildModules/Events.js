// Node.js Events are part of the event-driven programming model in Node.js, implemented through the built-in events module. The core component is the EventEmitter class, which allows objects to emit named events and register listeners (handlers) for those events.
const EventEmmiter = require('events');

Event = new EventEmmiter();

Event.on('greet', (name)=>{
    console.log(`Hello ${name}`);
});

Event.emit('greet', 'Tapabrata');