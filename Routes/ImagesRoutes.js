const express = require('express');
const router = express.Router();
const ImagesControllers = require('../Controllers/ImagesControllers');



                            // Upload User Profile Image //

const upload = require('../Middlewares/Multer-Users-ProfileImage'); // parser
router.post('/profile-image', upload.single('image'), ImagesControllers.uploadPhoto);

                             // Upload Rules Images//
const Rule = require('../Middlewares/Multer-Rules-Images'); // parser
router.post('/rule-image', Rule.single('image'), ImagesControllers.uploadPhoto);

                            // Upload Store Types Images//
const StoreTypes = require('../Middlewares/Multer-Users-StoreTypes'); // parser
router.post('/store-types', StoreTypes.single('image'), ImagesControllers.uploadPhoto);


                            // Upload Store Categories Images//
const StoreCategories = require('../Middlewares/Multer-Users-StoreCategories'); // parser
router.post('/store-types', StoreCategories.single('image'), ImagesControllers.uploadPhoto);
module.exports = router;
