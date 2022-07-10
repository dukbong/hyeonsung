const express       = require("express"),
      path          = require("path"),
      morgan        = require("morgan"),
      session       = require("express-session"),
      cookieParser  = require("cookie-parser"),
      dotenv        = require("dotenv"),
      nunjucks      = require("nunjucks"),
      {sequelize}   = require("./models/index"),
      app           = express(),
      passport      = require("passport");
      indexRouter   = require("./routes/index");

dotenv.config();

const { addHook } = require("./models/user");
const passportConfig = require("./passport/index");
app.set("port", process.env.PORT || 3000);
app.set("view engine", "html");
nunjucks.configure("views", {
    express : app,
    watch   : true,
});

sequelize.sync({force : false})
    .then(() => {
        console.log("MySQL Connection Success!");
    }).catch((err) => {
        console.error(err);
    });
passportConfig();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use(session({
    resave            : false,
    saveUninitialized : false,
    secret            : process.env.COOKIE_SECRET,
    cookie : {
        httpOnly : true,
        secure   : false,
        // 이거 true로 해두면 쿠키가 생성되지 않는다.
    },
}));
app.use(passport.initialize());
app.use(passport.session());
// 역할 : express session에 저장되있는걸 passport deserializeUser 하기 위해 필요하다.
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