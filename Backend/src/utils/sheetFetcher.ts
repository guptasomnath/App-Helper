import { parse } from "papaparse";

export const sheetFetcher = async (sql: string) => {
  const API = "https://docs.google.com/spreadsheets/d/";
  let QUERY =
    API +
    process.env.SHEET_ID +
    "/gviz/tq?tqx=out:csv&sheet=" +
    process.env.SHEET_NAME +
    "&tq=" +
    sql;

  const response = await fetch(QUERY);
  const result = await response.json();

  const { data } = parse(result, { header: true });
  return data;
};
