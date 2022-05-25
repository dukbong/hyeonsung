const cluster = require("cluster");
const http = require("http");
const numCPUs = require("os").cpus().length;

if (cluster.isMaster) {
  console.log(`마스터 프로세스 아이디 : ${process.pid}`);
  //CPU 개수 만큼 워커를 생산
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }
  //워커 종료되었을때
  cluster.on("exit", (worker, code, signal) => {
    console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
    console.log("code : ", code, "signal : ", signal);
    cluster.fork();
    //cluster.fork()가 하는일은 위에 코드에서는 특정 워커가 종료되면 새로운 워커를 실행시킨다.
  });
} else {
  http
    .createServer((req, res) => {
      res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
      res.write("<h1>Hello Node!</h1>");
      res.write("<p>hello cluster</p>");
      setTimeout(() => {
        process.exit(1);
      }, 1000);
    })
    .listen(8086);

  console.log(`${process.pid}번 워커 실행`);
}
