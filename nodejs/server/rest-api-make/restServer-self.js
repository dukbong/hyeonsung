const http = require("http");
const fs = require("fs");

const users = {};

http.createServer(async (req, res) => {
  try {
    if (req.method === "GET") {
      if (req.url === "/") {
        const data = fs.readFile("./restFront.html");
        res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
        return res.end(data);
      } else if (req.url === "about") {
        const data = fs.readFile("./about.html");
        res.writeHead(200, { "content-Type": "text/html; charset=utf-8" });
        return res.end(data);
      } else if (req.url === "./users") {
        res.writeHead(201, {
          "Content-type": "application/json; charset=utf-8",
        });
        return res.end(JSON.stringify(users));
      }
      try {
        const data = await fs.readFile(`./${req.url}`);
        return res.end(data);
      } catch (err) {
        // 주소에 해당하는 라우트 못찾으면 404 Nor Found error 발생
      }
    } else if (req.method === "POST") {
      if (req.url === "./user") {
        let body = "";
        req.on("data", (data) => {
          body = body + data;
        });
        return req.on("end", () => {
          console.log("POST 본문(Body) : ", body);
          const { name } = JSON.parse(body);
          const id = Date.now();
          users[id] = name;
          res.writeHead(201, { "Content-Type": "text/plain; charset=utf-8" });
          res.end("ok");
        });
      }
    } else if (req.method === "PUT"){
        if(req.url.startsWith("./user/")){
            const key = req.url.split("/")[2];
            let body = "";
            req.on("data", (data)=>{
                body = body + data;
            });
            return req.on("end",()=>{
                console.log("PUT 본문(Body) : ", body);
                users[key] = JSON.parse(body).name;
                res.writeHead(200,{"Content-Type" : "text/plain; charset=utf-8"});
                return res.end("ok");
            });
        }
    } else if (req.method === "DELETE"){
        if (req.url.startsWith("./user/")){
            const key = req.url.split("/")[2];
            delete users[key];
            res.writeHead(200, {"Content-Type" : "text/plain; charset=utf-8"});
            return res.end("ok");
        }
    }
    res.writeHead(404);
    return res.end("NOT FOUND");
  } catch (err) {
    console.error(err);
    res.writeHead(500, { "Content-Type": "text/plain; charset=utf-8" });
    res.end(err.message);
  }
});
