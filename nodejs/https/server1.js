const https = require("https");
// 실무에서 배포할때는 https 가 아니라 http2로 해야한다.
const fs = require("fs");

https.createServer({
    cert : fs.readFileSync("도메인 인증서 경로"),
    key : fs.readFileSync("도메인 비밀키 경로"),
    ca : [
        fs.readFileSync("상위 인증서 경로"),
        fs.readFileSync("상위 인증서 경로"),
    ] // readFileSync는 초기화 할때만 거의 사용된다.
      // https 신청을하면 위에 3가지 Key 값을 준다.
      // 그럼 그걸 저장하고 불러오면 된다.  
},(req,res)=>{
    res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
    res.write("<h1>Hello ~ HTTPS</h1>");
    res.end("<p>made in node.js</p>");
}). listen(443,()=>{
    console.log("443번 포트에서 서버 대기중입니다.")
})