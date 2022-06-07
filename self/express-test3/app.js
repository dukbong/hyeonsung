const express = require("express");
const path = require("path");
const morgan = require("morgan");
const nunjucks = require("nunjucks");
const {sequelize} = require("./models/index");
const indexRouter = require("./routes/index");
const boxRouter = require("./routes/boxes");
const app = express();
app.set("port", process.env.PORT || 8001);
app.set("view engine", "html");
nunjucks.configure("views",{
    express : app,
    watch : true,
});

sequelize.sync({force : false})
    .then(()=>{
        console.log("successfully accessed the database.");
    }).catch((err)=>{
        console.error(err);
    });

app.use(morgan("dev"));
app.use(express.static(path.join(__dirname,"public")));
app.use(express.json());
app.use(express.urlencoded({extended : false}));

app.use("/", indexRouter);
app.use("/boxes", boxRouter);

app.use((req, res, next)=>{
    const error = new Error(`${req.method} ${req.url} :: There is no router here.`);
    error.status = 400;
    next(error);
});

app.use((err, req, res, next)=>{
    res.locals.message = err.message;
    res.locals.error = process.env.NODE_ENV !== "production" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

app.listen(app.set("port"),()=>{
    console.log(`${app.set("port")}번 서버 대기중...`);
});