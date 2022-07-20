import mongoose, { Document, Schema } from "mongoose";

interface IShareFileInterface extends Document {
  fileId: string;
  expiresAt: string;
}
const fileShareSchema = new Schema(
  {
    fileId: {
      type: String,
      required: true,
    },
    expiresAt: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const ShareFile = mongoose.model<IShareFileInterface>(
  "ShareFile",
  fileShareSchema
);
export default ShareFile;
