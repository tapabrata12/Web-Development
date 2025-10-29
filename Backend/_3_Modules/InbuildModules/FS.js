const fs = require('fs');

// If you know that the writting will be Synchronous then use writeFileSync

fs.writeFileSync('_3_Modules/InbuildModules/data1.txt','Hello from data 1');
const data1 = fs.readFileSync('_3_Modules/InbuildModules/data1.txt','utf-8');
console.log(data1);

// For Asynchronous writting use writeFile

fs.writeFile('_3_Modules/InbuildModules/data2.txt','Hello from data 2',(err)=>{
    if(err) throw err;
    console.log('File written successfully');
});

fs.readFile('_3_Modules/InbuildModules/data2.txt','utf-8',(err,data2)=>{
    if(err) throw err;
    console.log(data2);
});