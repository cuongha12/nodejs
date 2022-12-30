import express from "express";
import addProduct from "../controller/addProduct";
import deleteProduct from "../controller/deleteProduct";
import getProduct from "../controller/getProduct";
import updateProduct from "../controller/updateProduct";
const router = express.Router();

const product = (app) => {
    router.get('/', getProduct);
    router.post('/', addProduct);
    router.put('/:id', updateProduct);
    router.delete('/:id', deleteProduct);
    return app.use('/product', router);
}

export default product