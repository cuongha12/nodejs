import express from "express";
import product from "./routes/product";
import bodyParser from "body-parser";
import category from "./routes/category";
import uploadfile from "./routes/uploadfile";
import configViewEngine from "./config/viewEngine";
import cookieParser from "cookie-parser";
import session from "express-session";
import cors from "cors";
import Login from "./routes/login";
import passport from "passport"
import PassPort from "./routes/passport";

require('dotenv').config();

const app = express();

const port = process.env.PORT || 3002;
app.use(
    express.urlencoded({
        extended: true,
    })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

const store = session.MemoryStore()
app.use(session({
    saveUninitialized: false,
    resave: false,
    secret: "Shh, its a secret!",
    cookie: {
        maxAge: 1000 * 60 * 60 * 24 // 10s
    },
    store
}))
app.use(passport.initialize())
app.use(passport.session())
configViewEngine(app);

product(app);

category(app);

uploadfile(app);

Login(app);

PassPort(app)
app.get('/', (req, res) => {
    res.send('Hello !')
})

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})