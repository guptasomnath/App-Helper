export type SheetLastRangeType =
  | "A"
  | "B"
  | "C"
  | "D"
  | "E"
  | "F"
  | "G"
  | "H"
  | "I"
  | "J"
  | "K"
  | "L"
  | "M"
  | "N"
  | "O"
  | "P"
  | "Q"
  | "R"
  | "S"
  | "T"
  | "U"
  | "V"
  | "W"
  | "X"
  | "Y"
  | "Z";

export interface IError extends Error {
  message: string;
  statusCode: number;
  isOperational: boolean;
}

export interface IGAuth {
  access_token : string;
  id_token : string;
}

export interface IGAuthProfile {
  email : string;
  name : string;
  picture : string;
}