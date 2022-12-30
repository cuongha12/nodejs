
import connection from "../config/connectDB"
const getProduct = async (req, res, next) => {
    // let limit = 3;
    // let page = req.query.page;
    // let keyword = req.query.keyword;
    // if (page) {
    //     page = page === 0 ? 1 : page
    //     page = parseInt(page)
    //     let start = (page - 1) * limit
    //     const [rows, fields] = await connection.
    //         execute
    //         (`SELECT * from product limit ${start},${limit}`);
    //     return res.json(rows);
    // } else if (keyword && page) {
    //     const [rows, fields] = await connection.
    //         execute
    //         (`SELECT * from product where name like '%${keyword}%' limit ${start},${limit}`);
    //     return res.json(rows);
    // }
    // else {
    //     const [rows, fields] = await connection.
    //         execute
    //         ('SELECT * from product');
    //     return res.json(rows);
    // }
    const [rows, fields] = await connection.
    execute
    (`SELECT * from product RIGHT JOIN category on category.id = product.category_id`);
    console.log(rows);
}

export default getProduct