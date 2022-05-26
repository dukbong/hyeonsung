const http = require("http");
const cluster = require("cluster");
const numCPUs = require("os").cpus().length;
const fs = require("fs").promises;

if (cluster.isMaster) {
  console.log(`Master Process ID : ${process.pid}`);
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on("exit", (worker, code, signal) => {
    console.log(`${worker.process.pid}번 Process 종료`);
    console.log("CODE : ", code, "SIGNAL : ", signal);
    cluster.fork();
  });
} else {
  http
    .createServer(async (req, res) => {
      try {
        if (req.method === "GET") {
          if (req.url === "/") {
            const data = await fs.readFile("./index.html");
            res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
            return res.end(data);
          } else if (req.url === "/snp"){
            fs.readFile("./SNP.jpg", (data, err)=>{
              console.log("snp img loading...");
              res.writeHead(200,{"Content-Type" : "text/html; charset=utf-8"});
              res.write(data);
              res.end();
            });
          }
        }
      } catch (err) {
        console.error(err);
        res.end(err.message);
      }
    }).listen(8000);

  console.log(`${process.pid}번 WORKER 실행...`);
}
