//파일을 생성하여 내용을 작성하고 그내용을읽어온다.

const fs = require("fs").promises;

fs.writeFile("./write_read.txt", "내용이 입력됩니다~")
    .then(()=>{
        return fs.readFile("./write_read.txt");
    }).then((data)=>{
        console.log(data.toString());
    }).catch((err)=>{
        throw err;
    });