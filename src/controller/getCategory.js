
import connection from "../config/connectDB"
const getCategory = async (req, res, next) => {
    const [rows, fields] = await connection.
        execute
        ('SELECT * from category');
    return res.json(rows);
}

export default getCategory