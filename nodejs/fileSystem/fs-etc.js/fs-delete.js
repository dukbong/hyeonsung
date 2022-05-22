const fs = require("fs").promises;

fs.readdir("./folder")
    .then((dir)=>{
        console.log("폴더 내용 확인", dir);
        return fs.unlink("./folder/newfile.js");
        // 파일을 삭제할때는 unlink
    })
    .then(()=>{
        console.log("파일 삭제 성공");
        return fs.rmdir("./folder");
        // 폴더를 삭제할떄는 rmdir
    })
    .then(()=>{
        console.log("폴더 삭제 성공");
    })
    .catch((err)=>{
        console.error(err);
    });