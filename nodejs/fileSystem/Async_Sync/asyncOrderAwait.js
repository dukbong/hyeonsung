//async / await을 사용하면 동기화시킨 코드와 참 비슷하게 생겼다.

const fs = require("fs").promises;

async function main(){
    let data = await fs.readFile("./read.txt");
    console.log("1번",data.toString());
    data = await fs.readFile("./read.txt");
    console.log("2번",data.toString());
    data = await fs.readFile("./read.txt");
    console.log("3번",data.toString());
    data = await fs.readFile("./read.txt");
    console.log("4번",data.toString());
}

main();