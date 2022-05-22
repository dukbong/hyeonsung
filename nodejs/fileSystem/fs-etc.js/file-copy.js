const fs = require("fs").promises;

fs.copyFile("./read.txt", "writeme.txt")
// read.txt 파일의 내용을 writeme.txt 파일에 복사한다. 
    .then(()=>{
        console.log("복사완료");
    })
    .catch((err)=>{
        console.error(err);
    });