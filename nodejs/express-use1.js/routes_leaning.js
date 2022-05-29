const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();

const indexRouter = require("./routes/index");
// index는 생략이 가능하다.
// const indexRouter = require("./routes") 와 같다.
const userRouter = require("./routes/user");

const app5 = express();
app5.set("port", process.env.PORT || 3000);

app5.use(morgan("dev"));
app5.use(express.json());
app5.use(express.urlencoded({extended : false}));
app5.use(cookieParser(process.env.COOKIE_SECRET));
app5.use(session({
    resave : false,
    saveUninitialized : false,
    cookie : {
        httpOnly : true,
        secure : false,
    },
    name : "session_cookie",
}));

app5.use("/",indexRouter);
app5.use("/user",userRouter);