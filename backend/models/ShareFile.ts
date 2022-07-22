import mongoose, { Document, Schema } from "mongoose";

export interface IShareFileInterface extends Document {
  filesIds: string[];
  expiresAt: string;
}
const fileShareSchema = new Schema(
  {
    filesIds: {
      type: [String],
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
