import ShareFile from "../models/ShareFile";
import File from "../models/File";
import moment from "moment";
import { Request, Response } from "express";
const getSharedFiles = async (req: Request, res: Response) => {
  try {
    const sharedFiles = await ShareFile.find();
    if (!sharedFiles)
      return res.status(404).send({ message: "No files found" });
    return res.status(200).json({ result: sharedFiles });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

const getSharedFileById = async (req: Request, res: Response) => {
  try {
    if (!req?.params?.id)
      return res.status(400).json({ message: "ID is required" });
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ message: "ID is not valid" });
    const id = req.params.id;
    const sharedFile = await ShareFile.findById(id);
    if (!sharedFile) return res.status(201).json({ message: "file not found" });

    const now = moment().toDate();
    const expiresAt = moment(sharedFile.expiresAt).toDate();
    if (now > expiresAt) {
      // await ShareFile.findByIdAndDelete(id);
      return res.status(403).json({ message: "file expired" });
    }

    const filesIds = sharedFile.filesIds;
    const files = await File.find({ _id: { $in: filesIds } });
    if (!files) return res.status(404).json({ message: "No files found" });
    return res.status(200).json({ result: files });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export { getSharedFiles, getSharedFileById };
