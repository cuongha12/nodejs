import connection from "../config/connectDB";


const uploadfileData = async (req, res, next) => {
    const { name, price, sale, category } = req.body;
    const image = req.file.filename;
    if (req.fileValidationError) {
        return res.send(req.fileValidationError);
    }
    else if (!req.file) {
        return res.send('Please select an image to upload');
    }
    // Display uploaded image for user validation
    res.send(`You have uploaded this image: <hr/><img src="/image/${image}" width="500"><hr /><a href="/upload">Upload another image</a>`);
    await connection.execute('insert into product (name,image,price,sale,category_id) values (?,?,?,?,?)', [name, image, parseInt(price), parseInt(sale), parseInt(category)])
   
}

export default uploadfileData