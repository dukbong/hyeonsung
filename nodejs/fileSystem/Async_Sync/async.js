// 비동기 함수이기 때문에 이런식으로 작성했을때
// 어떤거 부터 실행될지를 사람이 알수가 없다.

const fs = require("fs");

fs.readFile("./read.txt", (err, data)=>{
    if(err){
        throw err;
    }
    console.log("1번", data.toString());  
});
fs.readFile("./read.txt", (err, data)=>{
    if(err){
        throw err;
    }
    console.log("2번", data.toString());  
});
fs.readFile("./read.txt", (err, data)=>{
    if(err){
        throw err;
    }
    console.log("3번", data.toString());  
});
fs.readFile("./read.txt", (err, data)=>{
    if(err){
        throw err;
    }
    console.log("4번", data.toString());  
});