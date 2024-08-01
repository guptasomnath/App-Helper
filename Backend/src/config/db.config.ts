import { Spreadsheet } from "../spreadsheetDB/spreadsheetDB";

export const sheetDB = (COLUMNS_NAMES : string[]) => {
  return new Spreadsheet({
    APP_SCRIPT : process.env.APP_SCRIPT || "",
    SHEET_ID: process.env.SHEET_ID || "",
    SHEET_NAME: process.env.SHEET_NAME || "",
    COLUMNS_NAMES: COLUMNS_NAMES
  });
};
