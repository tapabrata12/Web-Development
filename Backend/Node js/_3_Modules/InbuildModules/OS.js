// Here We will see some of the method of OS module

const os = require('os');

console.log(os.version());
console.log(os.hostname());
console.log(os.platform());
console.log(os.totalmem());
console.log(os.freemem());
console.log((os.totalmem() - os.freemem()) / os.totalmem() * 100 + " % used");