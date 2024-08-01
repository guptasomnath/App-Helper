import papaparse from "papaparse";

export class Spreadsheet {
  private APP_SCRIPT: string;
  private SHEET_ID: string;
  private SHEET_NAME: string;
  private COLUMNS_NAMES_MAP = new Map<string, string>();

  private ALPHABET_ARRAY = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  private API = "https://docs.google.com/spreadsheets/d/";

  constructor(options: {
    APP_SCRIPT: string;
    SHEET_ID: string;
    SHEET_NAME: string;
    COLUMNS_NAMES: string[];
  }) {
    this.SHEET_ID = options.SHEET_ID;
    this.SHEET_NAME = options.SHEET_NAME;
    this.APP_SCRIPT = options.APP_SCRIPT;

    options.COLUMNS_NAMES.map((column, index) => {
      //ex : column1 -> A, column2 -> B
      this.COLUMNS_NAMES_MAP.set(column, this.ALPHABET_ARRAY[index]);
    });
  }

  public async query(sql: string) {
    let QUERY =
      this.API +
      this.SHEET_ID +
      "/gviz/tq?tqx=out:csv&sheet=" +
      this.SHEET_NAME +
      "&tq=" +
      sql;

    let loopIndex = -1;
    let hasColumnsFound = false;
    const userMentionColumns: string[] = [];
    const querySpliteList = QUERY.replaceAll(",", " ").split(" ");

    this.COLUMNS_NAMES_MAP.forEach((value, key) => {
      //this logic is for convart user mention columns to sheet column id like Student_Name -> A, Gender -> B
      QUERY = QUERY.replaceAll(key, value);
      loopIndex++;

      //this logic is for get the user mention columns names
      if (loopIndex > 0 && hasColumnsFound === false) {
        const columnName = querySpliteList[loopIndex];
        if (columnName !== "") {
          if (!this.COLUMNS_NAMES_MAP.has(columnName))
            return (hasColumnsFound = true);
          userMentionColumns.push(columnName);
        }
      }
    });

    const response = await fetch(encodeURI(QUERY));
    let result = await response.text();

    result = userMentionColumns.toString() + "\n" + result;

    const { data, errors } = papaparse.parse(result, { header: true });
    // if(errors.length !== 0) throw errors[0].message;
    if(errors.length !== 0) return [];
    
    return data;
  }

  public async increaseCount(id: string, columnName: string) {
    if (!id) throw "id is required";
    if (!columnName) throw "columnName is required";

    const searchParams = new URLSearchParams();
    searchParams.set("id", id);

    if (!this.COLUMNS_NAMES_MAP.has(columnName))
      throw "enter a valid column name";

    searchParams.set("columnID", this.COLUMNS_NAMES_MAP.get(columnName) || "");
    searchParams.set("func", "increaseDownload");

    const QUERY = `${this.APP_SCRIPT}?${searchParams.toString()}`;

    const response = await fetch(QUERY);
    const result = await response.text();

    const parse = JSON.parse(result) as {status : boolean, message : string};

    

    if (parse.status === true) return parse.message; //it will return the download link
    throw "Some error happend";
  }
}
