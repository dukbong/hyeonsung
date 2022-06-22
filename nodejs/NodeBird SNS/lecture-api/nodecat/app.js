const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const session = require("express-session");
const nunjucks = require("nunjucks");

dotenv.config();
const indexRouter = require("./routes/index");

const app = express();
app.set("port", process.env.PORT || 4000);
app.set("view engine", "html");
nunjucks.configure("views",{
    express : app,
    watch : true,
});

app.use("/", indexRouter);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} 라우터 없습니다.`);
    error.status = 404;
    next(error);
});
app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

app.listen(app.set("port"), ()=>{
    console.log(`${app.set("port")}번 포트에서 대기중..`);
});