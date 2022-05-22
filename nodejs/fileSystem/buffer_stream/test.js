const fs = require("fs").promises;

fs.writeFile("./info.txt", "buffer : 일정한 크기로 데이터를 모은 후 한번에 처리\n\nstream : 일정한 크기로 나눠서 여러번에 걸쳐서 처리\n>>버퍼의 크기를 작게 만들어서 주기적으로 데이터를 전달하는것이다.")
    .then(()=>{
        return fs.readFile("./info.txt");
    })
    .then((data)=>{
        console.log(data.toString());
    }).then(()=>{
        return fs.writeFile("./read.txt", "저는 조금씩 조금씩 나눠서 전달 됩니다. 나눠진 조각을 chunk라고 부릅니다.\n안녕하세요. 헬로 노드 헬로 스트림 헬로 버퍼");
    }).catch((err)=>{
        console.log(err);
    });