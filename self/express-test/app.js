const express = require("express");
const path = require("path");
const nunjucks = require("nunjucks");
const {sequelize} = require("./models/index");
const morgan = require("morgan");

const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const app = express();
app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");
nunjucks.configure("views", {
    express : app,
    watch : true,
});
sequelize.sync({force : false})
    .then(()=>{
        console.log("데이터베이스 접속 성공");
    }).catch((err)=>{
        console.error(err);
    });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/", indexRouter);
app.use("/users", usersRouter);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우트 없습니다.`);
    res.status(404).send(error);
});
app.use((err,req,res,next)=>{
    console.error(err);
});

app.listen((app.set("port")),()=>{
    console.log(`${app.set("port")}번 서버 대기중...`);
});