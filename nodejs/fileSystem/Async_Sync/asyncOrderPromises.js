// promises then으로 훨씬 깔끔해졌다.
// async / await으로 만든걸 보려면 "asyncOrderAwait"을 보면된다.

const fs = require("fs").promises;

fs.readFile("./read.txt")
    .then((data)=>{
        console.log("1번",data.toString());
    })
    .then((data)=>{
        console.log("2번",data.toString());
    })
    .then((data)=>{
        console.log("3번",data.toString());
    })
    .then((data)=>{
        console.log("4번",data.toString());
    })
    .catch((err)=>{
        throw err;
    });