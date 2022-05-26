const http = require("http");
const fs = require("fs").promises;

http.createServer(async (req,res)=>{
    res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
    const data = await fs.readFile("./index.html");
    res.end(data);
}).listen(8089, ()=>{
    console.log("8089번 포트 서버에서 대기중..")
})