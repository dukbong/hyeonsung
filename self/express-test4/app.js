const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const cookParser = require("cookie-parser");
const dotenv = require("dotenv");
const session = require("express-session");
const {sequelize} = require("./models/index");

dotenv.config();

const indexRouter = require("./routes/index");

const app = express();
app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");
nunjucks.configure("views",{
    express : app,
    watch : true,
});

sequelize.sync({force : false})
    .then(()=>{
        console.log(`Database connection successful...!`);
    }).catch((err)=>{
        console.error(err);
    });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookParser(process.env.COOKIE_SECRET));
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure : false,
    },
}));

app.use("/", indexRouter);

app.use((req,res,next)=>{
    const error = new Error(`${req.method} ${req.url} This page is missing...`);
    res.status(404).send(error);
    next(error);
});

app.use((err,req,res,next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status(err.status || 500);
    res.render("error");
})

app.listen((app.set("port")),()=>{
    console.log(`Wait for server on port ${app.set("port")}`);
});