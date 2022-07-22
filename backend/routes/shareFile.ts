import express from "express";

import {
  getSharedFileById,
  getSharedFiles,
} from "../controllers/shareFileController";

const router = express.Router();

router.route("/").get(getSharedFiles);
router.get("/:id", getSharedFileById);

const shareFileRoute = router;
export default shareFileRoute;
