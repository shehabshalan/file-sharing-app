import File from "../models/File";
import formatData from "../utils/formatData";
import fileUploader from "../utils/fileUploader";
import { Request, Response } from "express";
const getFiles = async (req: Request, res: Response) => {
  try {
    const files = await File.find();
    if (!files) return res.status(404).send({ message: "No files found" });
    res.json({ result: files });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const getFileById = async (req: Request, res: Response) => {
  try {
    if (!req?.params?.id)
      return res.status(400).json({ message: "ID is required" });
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ message: "ID is not valid" });
    const id = req.params.id;
    const file = await File.findById(id);
    if (!file) return res.status(201).json({ message: "file not found" });
    res.json({ result: file });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

type FileUploadResult = {
  fileName: string;
  fileUrl: string;
  fileSizeInBytes: number;
  fileSizeInMb: string;
  fileType: string;
  downloads: number;
};

const uploadFile = async (req: Request, res: Response) => {
  try {
    if (req?.files?.length === 0)
      return res.status(400).json({ message: "No file uploaded" });
    const files = req.files as Express.Multer.File[];
    let filesUploaded = await Promise.all(
      files.map((file) => fileUploader(file))
    );
    const result: FileUploadResult = formatData(files, filesUploaded);
    const newFiles = await File.insertMany(result);
    res.status(200).json({ result: newFiles });
  } catch (err: any) {
    res.status(500).json({ message: err.message });
  }
};

const deleteFile = async (req: Request, res: Response) => {
  try {
    if (!req?.params?.id)
      return res.status(400).json({ message: "ID is required" });
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ message: "ID is not valid" });
    const id = req.params.id;
    const file = await File.findById(id);
    if (!file) {
      return res
        .status(204)
        .json({ message: `File ID ${req.params.id} not found` });
    }
    const result = await file.remove();
    res.json({ message: "File deleted" });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

// updateFileDownload
const updateFileDownload = async (req: Request, res: Response) => {
  try {
    if (!req?.params?.id)
      return res.status(400).json({ message: "ID is required" });
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/))
      return res.status(400).json({ message: "ID is not valid" });
    const id = req.params.id;
    const file = await File.findById(id);
    if (!file) {
      return res
        .status(204)
        .json({ message: `File ID ${req.params.id} not found` });
    }
    const result = await file.updateOne({ $inc: { downloads: 1 } });
    res.json({ result: `File updated ` });
  } catch (err: any) {
    return res.status(500).json({ message: err.message });
  }
};

export { getFiles, getFileById, uploadFile, deleteFile, updateFileDownload };
