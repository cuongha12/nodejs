import connection from "../config/connectDB"
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
require('dotenv').config();
const checkUser = async (req, res, next) => {
    const { email, password } = req.body
    const [rows, fields] = await connection.execute('select * from account where email = ? ', [email])
    const check = bcrypt.compareSync(password, rows[0].password)
    const data = {
        id: rows[0].id,
        name: rows[0].name,
        email: rows[0].email,
        role: rows[0].role,
    }
    const token = jwt.sign(data, 'mk', { expiresIn: "24h" })
    if (check) {
        res.cookie("access", token, {
            httpOnly: true
        }).redirect('/login/check');

    } else {
        res.redirect('/login/sigin')
    }
}

export default checkUser