const express = require('express');
const router = express.Router();
const ImagesControllers = require('../Controllers/ImagesControllers');



                            // Upload User Profile Image //

const upload = require('../Middlewares/Multer-Users-ProfileImage'); // parser
router.post('/profile-image', upload.single('image'), ImagesControllers.uploadPhoto);

                             // Upload Rules Images//
const Rule = require('../Middlewares/Multer-Rules-Images'); // parser
router.post('/rule-image', Rule.single('image'), ImagesControllers.uploadPhoto);


module.exports = router;
