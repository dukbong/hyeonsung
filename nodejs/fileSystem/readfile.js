// 파일 시스템에 접근하는 모듈
// 파일,폴더 생성 및 삭제, 읽기 쓰기 가능
// 웹 브라우저에서는 제한적이었으나 노드는 권한을 가지고 있음

const fs = require("fs");

fs.readFile("./read.txt", (err,data)=>{
    if (err){
        throw err;
    }
    console.log(data);
    //그냥 data를 가져오면 2진수, 16진수로 표시된다.
    console.log(data.toString());
    //data를 제대로 보려면 toString으로 바꿔줘야한다.
});

//buffer_stream에서 배우지만 지금 위에 코드는 buffer 방식이다.