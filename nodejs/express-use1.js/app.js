const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const multer = require("multer");
const dotenv = require("dotenv");

dotenv.config();
//dotenv는 상위에 있을 수록 좋다.
// 최소한 express() 보다 높이 올리자!

const indexRouter = require("./routes");
const userRouter = require("./routes/user");

const app = express();



app.set("port", process.env.PORT || 3000);
// 포트 설정

app.use(morgan("dev"));
// morgan("dev")를 사용하면 요청 및 오류가 터미널에 표시된다.
//      - 개발시 많이 사용함
// morgan("combined")를 사용하면 ip,시간, 요청사항, 사용한 브라우저 등 자세히 알수 있다.
//      - 배포시 많이 사용함

app.use("/",express.static(__dirname + "/public"));
//    요청경로                     실제경로
// 요청경로가 실제경로가 다르기 때문에 보안에 좋다.
// static은 morgan 다음에 넣는게 좋다.
// 이유는 다른 미들웨어들은 대부분 next를 내부적으로 가지고 있지만
// static의 경우 내부에 next가 없어서 실행이 되면 여기서 종료가 되서
// 아래 있는 모든 코드가 실행되지 않는다.
// 만약 static이 미들웨어 중 가장 아래에 있다면 
// 의미 없이 쿠키를 파싱하고 바디 파싱을 하고 등등 할 수 있기 때문이다.
// ★ 하지만 간혹 로그인 한 유저에게만 정적인 페이지를 제공할때는 
// ★ 쿠키파서와 세션 다음에 넣어 줄 때도 있다.
/*
★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
확장법
app.use("/", (req,res,next)=>{
    if(session.id){
        express.static(__dirname,"public")(req,res,next)
    }else{
        next();
    }
});
로그인을 했으면 세션 아이디가 생기니까 true가 되고
true가 된 것은 static이 실행된다.
★★★★★★★★★★★★★★★★★★★★★★★★★★★★★
*/


// app.use(cookieParser());
app.use(cookieParser(process.env.COOKIE_SECRET));
// cookie를 암호화 할때는 이렇게 하고
// 밑에서 req.cookie 대신 req.signedCookie를 한다.
// 하지만 이 소스코드를 누군가 볼 수 있기 때문에 불안하다.
// ★ 해결법
// dotenv npm을 설치한다.
// 같은 폴더 안에 파일명 .env 을 만든다.
// KEYNAME = VALUE 이렇게 작성한다.
// ; 같은 건 적지 않는다.
// 사용할떄는 process.env.COOKIE_SECRET

app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    //cookieparser와 똑같이 해준다.
    cookie : {
        httpOnly : true,
        // 자바스크립트의 해킹 시도 방어
    },
    name : "connect.sid",
    // secret이 있기 때문에 읽을 수 없는 문자열로 되어있다.
}))

app.use(express.json());
//json 은 클라이언트에서 json으로 보냈을때 그걸 파싱해서 req.body에 넣어준다.
app.use(express.urlencoded({extended:true}));
// 클라이언트에서 form을 보냈을때 그걸 파싱하는 역할
// extended >> true : ps || false : querystring
// ps가 querystring보다 강력하기 때문에 true를 추천한다.
// form에서 이미지나 파일을 보내는 경우에는 역할 수행하지 않는다.
// >> 이미지나 파일의 경우는 multer를 사용한다.
// 위 두개를 적으면 자동으로 body가 파싱된다.

const upload = multer({
    storage : multer.diskStorage({
        destination(req,res,done){
            done(null, "uploads/");
        },
        filename(req,res,done){
            const ext = path.extname(file.originalname);
            done(null, path.basename(file.originalname,ext) + Date.now()+ext);
        },
    }),
    limits : {fileSize : 5* 1024 *1024},
});
app.get("/upload", (req,res)=>{
    res.sendFile(path.join(__dirname, "multipart.html"));
});

app.post("/upload", upload.single("image"), (req,res)=>{
    // html form에서 한개만 업로드 한다면 single
    // html에서 같은 name으로 여러개를 업로드할때는 array로
    // html에서 각각 다른 name으로 여러개를 업로드할 때는
    //      ->fields([{name:image1},{name:image2}...]);
    // 
    console.log(req.files);
    //fields일때는 req.files.image1 이런식으로
    res.send("ok");
});



// app.use ((req,res,next)=>{ // 미들웨어
//     console.log("모든 요청에 실행하고 싶어요.");
//     next();
// },(req,res, next)=>{
//     try{
//         console.log("에러가 발생했따~");
//     } catch(error){
//         next(error);
//         // next()이거는 지금 주소의 값을 가진 라우터로 이동하지만
//         // next(error)는 Error 미들웨어가 있는 곳으로 이동한다.
//     }
// });
//(req, res, next)=>{ // 강제로 에러 발생시켜보기
//    throw new Error("에러가 발생했지요");
//});
// next를 해주지 않으면 아래 있는 라우터들을 실행하지 못한다.
/*
위 코드에서 미들웨어는 어떤 걸 말하는걸까?
(req,res,next)=>{ // 미들웨어
    console.log("모든 요청에 실행하고 싶어요.");
    next();}
이게 미들웨어이고 app.use에 장착한것이다.

만약 특정 주소에서만 미들웨어를 사용하고 싶을때는 
app.use ("/about", (req,res,next)=>{ // 미들웨어
    console.log("about에서만 실행하고 싶어요.");
    next();
});
이런식으로 사용할 수 있다.

미들웨어는 중복으로 사용이 가능하다.
app.use ((req,res,next)=>{ // 미들웨어
    console.log("1. 모든 요청에 실행하고 싶어요.");
    next();
}, (req,res,next)=>{ // 미들웨어
    console.log("2. 모든 요청에 실행하고 싶어요.");
    next();
}, (req,res,next)=>{ // 미들웨어
    console.log("3. 모든 요청에 실행하고 싶어요.");
    next();
});
*/

app.get("/",(req,res)=>{ // 이런게 라우터다.
    req.body;  
    req.cookies; // { mycookie : "test" }
    //req.cookies에서 자동으로 쿠기가 파싱된다.
    req.session.id = "hello";
    res.cookie("name", encodeURIComponent(name),{
        expires:new Date(),
        httpOnly:true,
        path:"/",
    });
    // set cookie
    res.clearCookie("name", encodeURIComponent(name),{
        httpOnly:true,
        path:"/", 
    });
    // cookie 지우기
    
    // res.sendFile(path.join(__dirname,"index.html")); // 웹서버 만들때 주로 사용
    res.json({hello : "jang"}); // API 만들때 주로 사용 
    // res.render() // 이런 거도 있음.
});
// 한개의 라우터에는 send, sendFile, json 중 1개만 있어야합니다.
/*
예시
app.use ((req,res,next)=>{ // 미들웨어
    console.log("모든 요청에 실행하고 싶어요.");
    res.send("안녕하세요.");
    next();
});
app.get("/",(req,res)=>{ // 이런게 라우터다.
    res.sendFile(path.join(__dirname,"index.html"));
});

이거도 에러가 발생합니다.
이유는 미들웨어에 send가 있는 상태인데 next를 통해 "/" 주소로 오면
sendFile이 있기 때문입니다.
*/

app.post("/",(req,res)=>{
    res.send("hello node");
});

app.get("/category/Javascript",(req,res)=>{
    res.send("hello Javascript");
});

app.get("/category/:name", (req,res)=>{
    res.send(`hello Wildcard`);
});
// /category/:name >> :name에 아무거나 집어넣어도 이게 실행된다.
// : 변수명<< 와일드 카드 
// 와일드 카드에 들어간 값을 쓰고 싶을때는  req.params.변수명
// 만약 /category/Javascript 에 대해 따로 만들고 싶다면
// 와일드 카드보다 위에 넣어줘야한다.
// 그러지 않으면 와일드 카드가 실행된다.

app.get("/about", (req,res)=>{
    res.send("hello express");
});

// app.get("*",(req,res) => {
//     res.send("hello everybody");
// });
// get 요청에 모든 주소에 대해 답하는 방법
// 이게 가장 위쪽에 올라가면 어떤 주소를 쳐도 이게 나오기 때문에 조심해야한다.

app.use((req,res,next)=>{
    res.send("404 지요~");
})
// 라우터들보다는 아래에 에러 미들웨어보다는 위에 만들어주면
// 404 처리 미들웨어를 만들 수 있습니다.

app.use((err, req, res, next)=>{
    console.error(err);
    res.send("에러가 발생했지롱~ 근데 안알려주지롱~");
});
// Nodejs는 싱글스레드이기 때문에 에러 처리를 잘 해주어야합니다.
// ★★ Error 미들웨어에는 꼭 4개의 매개변수가 들어갑니다.


app.listen(app.get("port"),()=>{
    console.log("express server...");
});

