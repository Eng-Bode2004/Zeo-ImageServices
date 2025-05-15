const multer = require("multer");
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const cloudinary = require('../Config/Cloudinary');

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params:{
        folder:"Zeo/Stores/Logo",
        allowed_formats: ['jpg', 'png', 'jpeg'],
    }
})

const parser = multer({ storage: storage });
module.exports = parser;