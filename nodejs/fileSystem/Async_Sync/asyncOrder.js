// 이렇게 callback 지옥으로도 순서있게 구현이 가능하다.
// 좀더 깔끔한 방법은 "asyncOrderPromises"에 있다.
const fs = require("fs");

fs.readFile("./read.txt", (err, data)=>{
    if(err){
        throw err;
    }
    console.log("1번", data.toString());
    fs.readFile("./read.txt", (err, data)=>{
        if(err){
            throw err;
        }
        console.log("2번", data.toString());
        fs.readFile("./read.txt", (err, data)=>{
            if(err){
                throw err;
            }
            console.log("3번", data.toString());
            fs.readFile("./read.txt", (err, data)=>{
                if(err){
                    throw err;
                }
                console.log("4번", data.toString());  
            });
        });
    });
});


