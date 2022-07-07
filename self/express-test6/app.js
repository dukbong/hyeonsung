const express       = require("express"),
      morgan        = require("morgan"),
      session       = require("express-session"),
      cookieParser  = require("cookie-parser"),
      dotenv        = require("dotenv"),
      nunjucks      = require("nunjucks"),
      {sequelize}   = require("./models/index"),
      app           = express(),
      indexRouter   = require("./routes/index");

dotenv.config();

app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
nunjucks.configure("views", {
    express : app,
    watch   : true,
});

sequelize.sync({force : true})
    .then(() => {
        console.log("MySQL Connection Success!");
    }).catch((err) => {
        console.error(err);
    });

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser(process.env.COOKIE));

app.use(session({
    resave            : false,
    saveUninitialized : false,
    secret            : process.env.COOKIE,
    cookie : {
        httpOnly : true,
        secure   : true,
    },
}));

app.use("/",indexRouter);

app.use((req, res, next) => {
    const err = new Error(`${req.method} ${req.url} No route was found here!`);
    err.status(400);
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.message  =  err.message;
    res.locals.error    =  process.env.ERROR !== "production" ? err : {};
    res.status(err.status || 500);
    res.render("error");
});

app.listen(app.set("port"), () => {
    console.log(`${app.set("port")} waiting on Server!`);
});