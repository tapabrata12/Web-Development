fs = require('fs');
console.log("-------------- Async Nature of JavaScript --------------");
console.log("1.Start");

fs.readFile('file.txt', 'utf8', (err, data) => {
    if (err) {
        console.error('2.Error reading file:', err);
        return;
    }
    console.log('2.File contents:', data);
});

setTimeout(()=>{
    console.log("3.Timeout finished");
},3);

console.log("4.End");