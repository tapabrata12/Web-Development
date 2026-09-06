// In Node.js, a Buffer is a global class that provides a way to handle binary data directly. It represents a fixed-size chunk of memory (allocated outside of V8's heap) that can store raw binary data. Buffers are particularly useful for working with streams of data, such as reading from files, network sockets, or other I/O operations where data comes in as bytes rather than strings.

const buffer = Buffer.from("Hello");
console.log(buffer);

// If we have huge amount of data, we uses Stream.

const fs = require("fs");
readStream = fs.createReadStream("_3_Modules/InbuildModules/bigData.txt");

readStream.on("data", (chunk) => {
  console.log(chunk);
});

// In Node.js, a Stream is an abstract interface for working with streaming data. It allows you to read data from a source or write data to a destination in a continuous manner, rather than loading everything into memory at once. This is particularly efficient for handling large amounts of data, such as files, network requests, or other I/O operations.