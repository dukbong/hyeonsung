const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const nunjucks = require("nunjucks");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const {sequelize} = require("./models/index");

dotenv.config();
const app = express();
app.set("port", process.env.PORT || 8005);
app.set("view engine", "html");
nunjucks.configure("views",{
    express : app,
    watch : true,
});

sequelize.sync({force : false})
    .then(()=>{
        console.log("데이터 베이스 연결성공")
    }).catch((err)=>{
        console.error(err);
    });

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    }
}));

app.use((req,res,next)=>{
    const err = new Error(`${req.method} ${req.url} 라우터 없습니다.`);
    err.status = 404;
    next(err);
});

app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

app.listen(app.get("port"),()=>{
    console.log(`${app.get("port")}번 포트 대기중입니다.`);
});