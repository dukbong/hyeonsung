const fs = require("fs").promises;

fs.writeFile("./exception.txt","예외 : 처리하지 못한에러\n\n노드는 기본적으로 싱글스레드라 스레다가 멈춘다는것은 프로세스가 멈추는것이다.\n에러처리는 필수이다.")
    .then(()=>{

    })
    .catch((err)=>{
        console.error(err);
    });