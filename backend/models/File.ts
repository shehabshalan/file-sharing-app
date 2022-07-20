import mongoose, { Document, Schema } from "mongoose";

interface IFileInterface extends Document {
  fileName: string;
  fileUrl: string;
  fileType: string;
  fileSizeInBytes: number;
  fileSizeInMb: string;
  downloads: number;
}

const fileSchema = new Schema(
  {
    fileName: {
      type: String,
      required: true,
    },
    fileUrl: {
      type: String,
      required: true,
    },
    fileType: {
      type: String,
      required: true,
    },
    fileSizeInBytes: {
      type: Number,
      required: true,
    },
    fileSizeInMb: {
      type: String,
      required: true,
    },
    downloads: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  }
);

const File = mongoose.model<IFileInterface>("File", fileSchema);
export default File;
