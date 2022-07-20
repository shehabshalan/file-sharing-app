import express from "express";

import {
  createSharedFile,
  getSharedFileById,
  getSharedFiles,
} from "../controllers/shareFileController";

const router = express.Router();

router.route("/").post(createSharedFile).get(getSharedFiles);
router.get("/:id", getSharedFileById);

const shareFileRoute = router;
export default shareFileRoute;
