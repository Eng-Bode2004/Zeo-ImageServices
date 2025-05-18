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
router.post('/store-category', StoreCategories.single('image'), ImagesControllers.uploadPhoto);

                             // Upload Store-PII Images//
const StorePII = require('../Middlewares/Multer-Users-StorePII'); // parser
router.post('/store-PII', StorePII.single('image'), ImagesControllers.uploadPhoto);

                            // Upload Store-Logo Images//
const StoreLogo = require('../Middlewares/Multer-Users-StoreLogo'); // parser
router.post('/store-logo', StoreLogo.single('image'), ImagesControllers.uploadPhoto);

                                // Upload Store-Cover Image Images//
const StoreCover = require('../Middlewares/Multer-Users-StoreCoverImage'); // parser
router.post('/store-cover', StoreCover.single('image'), ImagesControllers.uploadPhoto);

                                // Upload Mamas Kitchen Item  Images//
const MamasKitchenItem = require('../Middlewares/Multer-Users-MamasKitchenItem'); // parser
router.post('/mamas-kitchen', MamasKitchenItem.single('image'), ImagesControllers.uploadPhoto);





module.exports = router;
