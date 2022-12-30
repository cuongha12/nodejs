import express from "express";
import passport from "passport";
import google from "../controller/google";
const router = express.Router();
const PassPort = (app) => {
    google();
    router.get('/google',
        passport.authenticate('google', { scope: ['profile'] }
        ));
    router.get('/callback',
        passport.authenticate('google',
            { failureRedirect: '/login/check', successRedirect: '/login/check' }
        ));
    return app.use('/auth', router);
}

export default PassPort