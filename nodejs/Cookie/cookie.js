const http = require("http");

http.createServer((req,res)=>{
    console.log(req.url, req.headers.cookie);
    res.writeHead(200,{"Set-Cookie" : "mycookie=test"});
    res.end("hello Cookie");
}).listen(8083, ()=>{
    console.log("8083번 포트에서 서버 대기 중입니다.");
})

// 처음 서버에서 Set-cookie 해주면 그 다음 요청부터는
// 쿠키를 넣어서 보내주기 때문에 누군지 알 수 있다.