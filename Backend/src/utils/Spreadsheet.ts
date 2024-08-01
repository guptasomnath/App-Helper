import { parse } from "papaparse";

export class Sheet {
  private API = "https://docs.google.com/spreadsheets/d/";

  private COLUMNNAMEANDID : any = {
    ID: "A",
    CATEGORY: "B",
    THUMBNAIL: "C",
    PROJECTNAME: "D",
    DATE: "E",
    STORENAME: "F",
    TOTALDOWNLOAD: "G",
    VERSION: "H",
    DOWNLOADLINK: "I",
    PRICE: "J",
    PLATFORM: "K",
    SCREENSHOTS: "L",
    DESCRIPTION: "M",
  };

  public async fetchData(sql: string) {
    let newSql = "";

    Object.keys(this.COLUMNNAMEANDID).forEach((key) => {
      newSql = sql.replace(key, this.COLUMNNAMEANDID[key]);
      console.log(this.COLUMNNAMEANDID[key])
    });

    console.log(newSql);

    let QUERY =
      this.API +
      process.env.SHEET_ID +
      "/gviz/tq?tqx=out:csv&sheet=" +
      process.env.SHEET_NAME +
      "&tq=" +
      newSql;

    // const response = await fetch(QUERY);
    // const result = await response.json();

    // //parse method will convart csv data to json
    // const { data } = parse(result, { header: true });
    // return data;
  }
}
