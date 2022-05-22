const fs = require("fs");

// fs.readFile("./read.txt", (err, data)=>{
//     if(err){
//         throw err;
//     }
//     console.log("1번",data.toSting());
// });
// 비동기일때 이렇게 작성되었다.


// fs는 아래처럼 동기화 시킬수 있지만
// 서버가 실제로 실행될때는 사용되지 않는다.
// 이유는 동기의 경우 한줄한줄 코드가 실행되기 때문이다.
let data = fs.readFileSync("./read.txt");
console.log("1번",data.toString());
data = fs.readFileSync("./read.txt");
console.log("2번",data.toString());
data = fs.readFileSync("./read.txt");
console.log("3번",data.toString());
data = fs.readFileSync("./read.txt");
console.log("4번",data.toString());

