const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");
const passport = require("passport");

dotenv.config();
const pageRouter = require("./routes/page");
const authRouter = require("./routes/auth");
const postRouter = require("./routes/post");
const userRouter = require("./routes/user");
const {sequelize} = require("./models/index");
const passportConfig = require("./passport");

const app = express();

app.set("port",process.env.PORT || 8001);
app.set("view engine", "html");
nunjucks.configure("views",{
    express : app,
    watch : true,
});

sequelize.sync({force : false})
// sequelize 사용할 때 models에 정의한 테이블의 내용(컬럼)을 수정하면 같이 수정 안된다!★★★
// force : true를 하면 수정시 테이블이 전체 삭제 됬다가 다시 생성된다.
// ※ 주의 사항 >> 기존 데이터들도 같이 삭제된다...
// alter : true를 사용하면 테이블의 컬럼을 수정해도 데이터는 남아있는다.
// ※ 주의 사항 >> 기존은 allowNull : true 였지만 수정후 allowNull : false로 바뀌면
//                 형식이 맞지 않기 때문에 오류가 발생한다.
// 배포시에는 가장 안전한 alter : true를 사용한다.
    .then(()=>{
        console.log("데이터 베이스 연결 성공");
    }).catch((err)=>{
        console.error(err);
    });
passportConfig();

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"public")));
app.use("/img",express.static(path.join(__dirname,"uploads")));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
}));
//21~35 이해 안되면 6장 참고

app.use(passport.initialize());
app.use(passport.session());

app.use("/", pageRouter);
app.use("/auth",authRouter);
app.use("/post",postRouter);
app.use("/user",userRouter);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터 없습니다.`);
    error.status = 404;
    next(error);
});

app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

app.listen(app.get("port"),()=>{
    console.log(app.get("port"),"번 포트에서 대기중...");
});