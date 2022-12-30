
import connection from "../config/connectDB"
const addProduct = async (req, res, next) => {
    const {name,image,price,sale,category} = req.body
    await connection.execute('INSERT INTO product(name,image,price,sale,category_id) VALUES (?,?,?,?,?)',[name,image,price,sale,category])
    return res.json('ok');
}

export default addProduct