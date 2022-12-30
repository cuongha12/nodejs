import express from "express";
import addUser from "../controller/addUser";
import CheckAmin from "../controller/CheckAmin";
import checkData from "../controller/checkData";
import checkUser from "../controller/checkUser";
import Logout from "../controller/Logout";
const router = express.Router();

const Login = (app) => {
    router.get('/register', (req, res, next) => {
        return res.render('login.ejs')
    });
    router.post('/register', addUser);
    router.get('/sigin', (req, res, next) => {
        return res.render('sigin.ejs')
    });
    router.post('/sigin', checkUser);
    router.get('/check', checkData,CheckAmin);
    router.post('/logout',Logout)
    return app.use('/login', router);
}

export default Login;