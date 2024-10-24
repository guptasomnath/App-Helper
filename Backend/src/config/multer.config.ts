import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Set the directory for file uploads
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // Set the file name
  },
});

export const upload = multer({
  storage,
});