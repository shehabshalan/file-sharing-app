import { CloudinaryUploadResult, FileUploadResult } from "../types/fileTypes";
import checkFormat from "./checkFormat";
const formatData = (
  files: Express.Multer.File[],
  filesUploaded: CloudinaryUploadResult[]
): FileUploadResult[] => {
  const FROM_BYTES_TO_MB = 1000000;
  let result: FileUploadResult[] = [];
  files.map((file, i) => {
    result.push({
      fileName: file.originalname,
      fileUrl: filesUploaded[i].secure_url,
      fileSizeInBytes: filesUploaded[i].bytes,
      fileSizeInMb: `${(filesUploaded[i].bytes / FROM_BYTES_TO_MB).toFixed(
        2
      )} MB`,
      fileType: checkFormat(file.mimetype),
      downloads: 0,
    });
  });
  return result;
};

export default formatData;
