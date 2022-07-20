const cloudinary = require("cloudinary").v2;
import checkFormat from "./checkFormat";
const fileUploader = async (file: Express.Multer.File) => {
  try {
    const fileUploaded = await cloudinary.uploader.upload(file.path, {
      folder: "library-files",
      resource_type: "auto",
      format: checkFormat(file.mimetype),
    });
    return fileUploaded;
  } catch (err) {
    console.log("Cloudinary error: ", err);
  }
};

export default fileUploader;
