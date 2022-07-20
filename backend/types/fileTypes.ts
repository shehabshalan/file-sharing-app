type FileUploadResult = {
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSizeInBytes: number;
  fileSizeInMb: string;
  downloads: number;
  _id?: string;
  __v?: number;
  createdAt?: string;
  updatedAt?: string;
};

type CloudinaryUploadResult = {
  asset_id: string;
  public_id: string;
  version: number;
  version_id: string;
  signature: string;
  width: number;
  height: number;
  format: string;
  resource_type: string;
  created_at: string;
  tags: any[];
  bytes: number;
  type: string;
  etag: string;
  placeholder: boolean;
  url: string;
  secure_url: string;
  folder: string;
  original_filename: string;
  api_key: string;
};

export { FileUploadResult, CloudinaryUploadResult };
