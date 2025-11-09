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

// Kuch Extra Jor doo existing file me
fs.appendFile('_3_Modules/InbuildModules/data2.txt',"\nAppend new line into Data 2 file",(err)=>{
    if(err) throw err;
    console.log("File Append Successfully");
});

// Rename File

fs.rename('_3_Modules/InbuildModules/data2.txt',"_3_Modules/InbuildModules/data2_Renamed.txt",(err)=>{
    if(err) throw err;
    console.log("File renamed successfully");
});

// Make Directory
fs.mkdir('_3_Modules/InbuildModules/copy',(err)=>{
    if(err) throw err;
    console.log('Directory created successfully');
});

// Copy file

fs.copyFile('_3_Modules/InbuildModules/data1.txt','_3_Modules/InbuildModules/copy/data1_Copy.txt',(err)=>{
    if (err) throw err;
    console.log('Copied successfully');
});

// Delete File 

fs.unlink('_3_Modules/InbuildModules/data1.txt',(err)=>{
    if(err) throw err;
    console.log('File deleted successfully');
});

fs.unlink("_3_Modules/InbuildModules/data2_Renamed.txt",(err)=>{
    if(err) throw err;
    console.log('File deleted successfully');
});

fs.unlink('_3_Modules/InbuildModules/copy/data1_Copy.txt',(err)=>{
    if(err) throw err;
    console.log('File deleted successfully');
});



// Remove Directory
fs.rm('_3_Modules/InbuildModules/copy',(err)=>{
    if(err) throw err;
    console.log('Directory removed successfully');
});