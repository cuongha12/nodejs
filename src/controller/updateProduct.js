import connection from "../config/connectDB";


const updateProduct = async (req, res, next) => {
    const { id } = req.params
    const { name, image, price, sale, category } = req.body
    await connection.execute('update product set name = ?, image = ?, price = ?, sale = ?,category_id = ? where id = ?', [name, image, price, sale, category, id])
}

export default updateProduct