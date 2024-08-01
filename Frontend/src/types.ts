export interface ISuccess<T> {
  data?: T;
  statusCode: number;
  message: string;
  success: boolean;
}

export interface IProjects {
  ID: string;
  CATEGORY: string;
  THUMBNAIL: string;
  PROJECTNAME: string;
  DATE: string;
  STORENAME: string;
  TOTALDOWNLOAD: string;
  VERSION: string;
  // DOWNLOADLINK: string;
  PRICE: string;
  PLATFORM: string;
  SCREENSHOTS: string;
  DESCRIPTION: string;
}

export interface IUserInfo {
  picture : string;
  name : string;
  email : string;
  "access-key" : string
}
