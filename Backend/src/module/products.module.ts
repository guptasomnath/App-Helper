import { sheetDB } from "../config/db.config";

const columnNames = [
  "ID",
  "CATEGORY",
  "THUMBNAIL",
  "PROJECTNAME",
  "DATE",
  "STORENAME",
  "TOTALDOWNLOAD",
  "VERSION",
  "DOWNLOADLINK",
  "PRICE",
  "PLATFORM",
  "SCREENSHOTS",
  "DESCRIPTION"
]

export const productsDB = () => {
  return sheetDB(columnNames)
};
