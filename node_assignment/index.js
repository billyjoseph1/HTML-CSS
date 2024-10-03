const EventEmitter = require('events');
const logEvents = require('./LogEvents');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

// Emit an event with a log message
setTimeout(() => {
  myEmitter.emit('log', 'I AM WHO I AM ');
}, 2000);

// Listen for the 'log' event
myEmitter.on('log', (message) => {
  logEvents(message);
});
