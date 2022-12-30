import express from "express";
import uploadFile from "../controller/uploadFile";
import multer from 'multer';
import path from 'path';
import appRoot from 'app-root-path';
import uploadfileData from "../controller/uploadfileData";
const router = express.Router();

const uploadfile = (app) => {
    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, appRoot + "/src/public/image/");
        },
        // By default, multer removes file extensions so let's add them back
        filename: function (req, file, cb) {
            cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
        }
    });

    const imageFilter = function (req, file, cb) {
        // Accept images only
        if (!file.originalname.match(/\.(jpg|JPG|jpeg|JPEG|png|PNG|gif|GIF)$/)) {
            req.fileValidationError = 'Only image files are allowed!';
            return cb(new Error('Only image files are allowed!'), false);
        }
        cb(null, true);
    };
    let upload = multer({ storage: storage, fileFilter: imageFilter });
    router.get('/', uploadFile);
    router.post('/upload-profile-pic', upload.single('profile_pic'), uploadfileData);
    return app.use('/upload', router);
}

export default uploadfile