import connection from "../config/connectDB";


const deleteProduct = async (req, res, next) => {
    const {id} = req.params
    await connection.execute('delete from product where id = ?', [id])
    return res.json('ok');
}

export default deleteProduct