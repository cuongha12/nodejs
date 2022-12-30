import express from "express";
import getCategory from "../controller/getCategory";
const router = express.Router();

const category = (app) => {
    router.get('/', getCategory);
    return app.use('/category', router);
}

export default category