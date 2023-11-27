const os = require('os');

// console.log("CPU Architecture" + os.arch());
// console.log("Free Space" +os.freemem());
// console.log("Total Space" +os.totalmem());
// console.log("Network Interface" + JSON.stringify(os.networkInterfaces()));

// console.log("OS TEMP DIR" + os.tmpdir);

console.log("Endianess: " + os.endianness());
console.log("Hostname:" + os.hostname());
console.log("OS Type:" + os.type());

console.log("OS Platform" + os.platform());
console.log("OS Release" + os.release());