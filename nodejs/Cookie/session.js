const http = require("http");
const fs = require("fs");
const url = require("url");
const qs = require("querystring");

const parseCookies = (cookie = "") =>
    cookie 
        .split(";")
        .map(v=>v.split("="))
        .reduce((acc,[k,v])=>{
            acc[k.trim()] = decodeURIComponent(v);
            return acc;
        },{});
    
const session = {}; // 데이터 저장용

http.createServer(async(req,res)=>{
    const cookies = parseCookies(req.headers.cookie);
    if (req.url.startsWith("./login")){
        const {query} = url.parse(req.url);
        const {name} = qs.parse(query);
        const expires = new Date();
        expires.setMinutes(expires.getMinutes()+5);
        const uniqueInt = Data.now();
        session[uniqueInt] = {
            name,
            expires,
        };
        res.writeHead(302,{
            Location : "/",
            "Set-Cookie" : `session=${uniqueInt}; Expires=${expires.toGMTSting()}`
        });
        res.end();
    } else if (cookies.session && session[cookies.session].expires > new Date()){
        res.writeHead(200,{"Content-Type" : "text/plain; charset=utf-8"});
        res.end(`${session[cookies.session].name}님 안녕하세요.`);
    } else{
        try{
            const data = await fs.readFile("./cookies2.html");
            res.writeHead(200, {"Content-Type" : "text/html; charset=utf-8"});
            res.end(data);
        } catch(err){
            res.writeHead(500,{"Content-Type" : "text/plain; charset=utf-8"});
            res.end(err.message);
        }
    }
})