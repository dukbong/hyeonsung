//서버를 만든다.
const http = require("http");

const server = http.createServer((req,res)=>{
    res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
    // 브라우저 HTML인지 문자열인지 모를 수 있기 때문에 위에 코드를 작성해준다.
    res.write("<h1>hello Node!</h1>");
    res.write("<p>Hello server</p>");
    res.end("<p>Hello Jang</p>");
    // Stream 방식이다.
    // html 코드를 이렇게 계속 적는거는 비효율적이기때문에
    // server2.js을 참고 해야한다.
}).listen(8080);

server.on("listening", ()=>{
    console.log("8080번 포트에서 서버 대기 중입니다.");
});

server.on("error", (err)=>{
    console.error(err);
});
// 비동기 함수 이기 때문에 에러 처리를 해줘야한다.

// 브라우저에서 local:8080으로 가면 만든 서버가 실행되는걸 볼 수 있다.

/*

const http = require("http");

http.createServer((req,res)=>{
    res.write("<h1>hello Node!</h1>");
    res.write("<p>Hello server</p>");
    res.end("<p>Hello Jang</p>");
    //Stream 방식이다.
}).listen(8080, ()=>{
    console.log("8080번 포트에서 서버 대기 중입니다.");
});

*/