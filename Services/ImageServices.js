const Image = require("../Models/Images");
const Middleware = require("../Middlewares/Multer-Users-ProfileImage");

class ImageServices {
    async uploadPhoto(ImageData) {
        try {
            const {URL,title,description} = ImageData;
            if (!URL||!title){
                return Promise.reject(new Error("URL and Title are required"));
            }
            const newImage =new Image({
                URL,
                title,
                description,
            })
            return await newImage.save();

        }
        catch (error) {
           return Promise.reject(new Error("Upload failed"));
        }
    }
}
module.exports = new ImageServices();