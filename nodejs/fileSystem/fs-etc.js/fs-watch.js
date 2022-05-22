// 파일을 감시하는 방법 (변경이 발생하면 이벤트 호출)

const fs = require("fs");

fs.watch("./target.txt", (eventType, filename)=>{
    console.log(eventType, filename);
});
