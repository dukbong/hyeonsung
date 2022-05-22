const fs = require("fs");

setInterval(()=>{
    fs.unlink("./asdf.js",(err)=>{
        if(err){
            console.error(err);
        }
    });
},1000);

// 1. 1초마다 unlink로 asdf.js 파일을 삭제한다.
// 2. asdf.js 파일이 없으면 err메시지가 출력된다.
// 3. 프로그램이 종료된것이 아니기 때문에 계속 반복한다.