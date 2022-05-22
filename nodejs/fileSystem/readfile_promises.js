const fs = require("fs").promises;

fs.readFile("./read.txt").then((data)=>{
    console.log(data);
    console.log(data.toString());
}).catch((err)=>{
    throw err;
});