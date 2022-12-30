
import jwt from "jsonwebtoken";
const checkData = (req, res, next) => {
    const check = req.cookies.access
    const checkSession = req.session
    if (check) {
        const accessToken = jwt.verify(check, 'mk')
        if (accessToken.role === 'user') {
            // res.render('check.ejs', { data: accessToken })
            return res.status(200).json(accessToken)
        } else {
            next()
        }
    } else if (checkSession) {
        const checkPassPort = req.session.passport.user
        res.render('check.ejs', { data: checkPassPort })
    } 
    else {
        res.redirect('sigin')
    }

}

export default checkData