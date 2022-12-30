import jwt from "jsonwebtoken";

const CheckAmin = (req, res, next) => {
    const check = req.cookies.access
    const accessToken = jwt.verify(check, 'mk')
    res.render('admin.ejs', { data: accessToken })
}

export default CheckAmin