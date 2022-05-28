const express = require("express");
const path = require("path");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const dotenv = require("dotenv");

dotenv.config();

const app5 = express();

app5.use(morgan("dev"));
app5.use(express.json());
app5.use(express.urlencoded({extended : false}));
app5.use(cookieParser(process.env.COOKIE_SECRET));
app5.use(session({
    resave : false,
    saveUninitialized : false,
    cookie : {
        httpOnly : true,
    },
    name : "session_cookie",
}));