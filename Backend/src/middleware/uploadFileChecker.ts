import { Request, Response, NextFunction } from "express";
import { upload } from "../config/multer.config";
import { uploadFileValidator } from "../validator/projects.validator";
import { ErrorHandler } from "../utils/ErrorHandler";

const uploadFileFildes = upload.fields([
  { name: "thumbnail", maxCount: 1 },
  { name: "download-file", maxCount: 1 },
  { name: "screenshots", maxCount: 3 },
]);


export const uploadFileChecker = (req : Request, res : Response, next : NextFunction) => {
  
  const { error } = uploadFileValidator.validate(req.body);

  if(error) {
    throw new ErrorHandler(400, error.message);
  }


  next();
}
