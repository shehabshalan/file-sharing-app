import express from "express";
import multer from "multer";

import {
  getFiles,
  uploadFile,
  getFileById,
  deleteFile,
  updateFileDownload,
} from "../controllers/fileController";
const storage = multer.diskStorage({});

const router = express.Router();

let upload = multer({ storage: storage });

router.route("/").get(getFiles).post(upload.array("myfile"), uploadFile);
router.get("/:id", getFileById);
router.delete("/:id", deleteFile);
router.put("/:id", updateFileDownload);

const fileRoute = router;
export default fileRoute;
