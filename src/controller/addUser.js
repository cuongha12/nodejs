import connection from "../config/connectDB"
import bcrypt from "bcrypt";
const addUser = async (req, res, next) => {
    const { name, email, password } = req.body
    await connection.execute('insert into account (name, email,password) values (?, ?, ?)', [name, email, bcrypt.hashSync(password, 10)]);
    return res.redirect('/login/sigin')
}

export default addUser 