const cloudinary = require("cloudinary").v2;
import { CloudinaryUploadResult } from "../types/fileTypes";
import checkFormat from "./checkFormat";
const fileUploader = async (
  file: Express.Multer.File
): Promise<CloudinaryUploadResult> => {
  try {
    const fileUploaded = await cloudinary.uploader.upload(file.path, {
      folder: "library-files",
      resource_type: "auto",
      format: checkFormat(file.mimetype),
    });
    return fileUploaded;
  } catch (err: any) {
    throw new Error(err.message);
    return err;
  }
};

export default fileUploader;
