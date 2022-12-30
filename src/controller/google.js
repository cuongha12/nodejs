import passport from 'passport';
var GoogleStrategy = require('passport-google-oauth20').Strategy;

const google = (req, res, next) => {
    passport.use(new GoogleStrategy({
        clientID: "1022482540453-blqnoghvd62c5uvuc7bsf2616ai7abkd.apps.googleusercontent.com",
        clientSecret: "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",
        callbackURL: "http://localhost:3002/auth/callback"
    },
        function (accessToken, refreshToken, profile, cb) {
            const newData = {
                id: profile.id,
                name: profile._json.name,
                image: profile._json.picture
            }
            return cb(null, newData)
        }
    ));
}
passport.serializeUser(function (user, done) {
    done(null, user);
});

passport.deserializeUser(function (id, done) {
    done(null, id);
});
export default google   