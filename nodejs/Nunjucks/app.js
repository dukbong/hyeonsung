const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const path = require("path");
const nunjucks = require("nunjucks");

dotenv.config();

const app = express();
app.set("port", process.env.POST || 3000);

//★★★★★★★★★★★★★★★
app.set("view engine","html");
nunjucks.configure("views",{
    express : app,
    watch : true,
});
// nunjucks 사용할 때 작성해줘야하는 코드
//★★★★★★★★★★★★★★★
app.use(morgan("dev"));