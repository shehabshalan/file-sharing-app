import checkFormat from "./checkFormat";
const formatData = (files: any, filesUploaded: any) => {
  const FROM_BYTES_TO_MB = 1000000;
  let result = [] as any;
  files.map((file: any, i: any) => {
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
