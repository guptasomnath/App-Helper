import { Router } from "express";

//custom imports
import {
  downloadFile,
  getAllProjects,
  getProjectWithId,
  uploadFile,
} from "../controller/projects.controller";
import asyncErrorHandler from "../middleware/asyncErrorHandler";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { getProjectsRateLimit, downloadProjectsRateLimit } from "../middleware/rateLimit";
import { uploadFileChecker } from "../middleware/uploadFileChecker";

const projectrouter = Router();

projectrouter
  .get("", getProjectsRateLimit, asyncErrorHandler(getAllProjects))
  .post("/download", downloadProjectsRateLimit, isAuthenticated, asyncErrorHandler(downloadFile))
  .get("/:id", getProjectsRateLimit, asyncErrorHandler(getProjectWithId))

  .post("/upload", asyncErrorHandler(uploadFileChecker), asyncErrorHandler(uploadFile))

export default projectrouter;
