import { Router } from "express";

//custom imports
import {
  downloadFile,
  getAllProjects,
  getProjectWithId,
} from "../controller/projects.controller";
import asyncErrorHandler from "../middleware/asyncErrorHandler";
import { isAuthenticated } from "../middleware/isAuthenticated";
import { getProjectsRateLimit, downloadProjectsRateLimit } from "../middleware/rateLimit";

const projectrouter = Router();

projectrouter
  .get("", getProjectsRateLimit, asyncErrorHandler(getAllProjects))
  .post("/download", downloadProjectsRateLimit, isAuthenticated, asyncErrorHandler(downloadFile))
  .get("/:id", getProjectsRateLimit, asyncErrorHandler(getProjectWithId));

export default projectrouter;
