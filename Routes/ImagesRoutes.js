const express = require('express');
const router = express.Router();
const ImagesControllers = require('../Controllers/ImagesControllers');





const upload = require('../Middlewares/Multer-Users-ProfileImage'); // parser
router.post('/profile-image', upload.single('image'), ImagesControllers.uploadPhoto);

module.exports = router;
