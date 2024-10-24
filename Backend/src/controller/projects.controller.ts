import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { ErrorHandler } from "../utils/ErrorHandler";
import { productsDB } from "../module/products.module";
import { catchData } from "../utils/catch";

export const getAllProjects = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const skip: number = parseInt(req.query.skip?.toString() || "0");
  const limit: number = parseInt(req.query.limit?.toString() || "12");
  const orderBy: string = req.query.orderBy?.toString() || "ID";
  const filter = req.query.filter?.toString();
  const category = req.query.category;
  const search = req.query.search?.toString().toLowerCase();

  const filter_mapping: any = {
    "most-popular": "ORDER BY TOTALDOWNLOAD DESC",
    free: "PRICE LIKE '%Free%'",
    paid: "PRICE LIKE '%Paid%'",
  };

  let query = `SELECT ID,THUMBNAIL,PROJECTNAME,STORENAME,TOTALDOWNLOAD,VERSION,PRICE`;
  let final_filter = `ORDER BY ${orderBy} DESC`;

  if (category !== undefined && search !== undefined) {
    query += ` WHERE (CATEGORY LIKE '%${category}%' AND LOWER(PROJECTNAME) CONTAINS '${search}' OR LOWER(DESCRIPTION) CONTAINS '${search}' AND STATUS = 'Public')`;
  } else if (category !== undefined) {
    if (filter !== undefined && filter !== "most-popular") {
      query += ` WHERE (CATEGORY LIKE '%${category}%' AND ${filter_mapping[filter]} AND STATUS = 'Public')`;
    } else {
      query += ` WHERE (CATEGORY LIKE '%${category}%' AND STATUS = 'Public')`;
    }
  } else if (search !== undefined) {
    if (filter !== undefined && filter !== "most-popular") {
      query += ` WHERE (CATEGORY LIKE '%${category}%' AND ${filter_mapping[filter]} AND STATUS = 'Public')`;
    } else {
      query += ` WHERE LOWER(PROJECTNAME) (CONTAINS '${search}' OR LOWER(DESCRIPTION) CONTAINS '${search}' AND STATUS = 'Public')`;
    }
  } else {
    query += ` WHERE STATUS = 'Public'`;
  }

  if(filter !== undefined) {
    if(filter === "most-popular") {
      final_filter = filter_mapping[filter];
    }
  }

  query += ` ${final_filter} LIMIT ${limit} OFFSET ${skip}`;

  // const catchKey = `${skip}${limit}${category}${search}`;
  // if (catchData.has(catchKey)) {
  //   return res
  //     .status(200)
  //     .json(new ApiResponse(200, "Projects Details", catchData.get(catchKey)));
  // }

  const data = await productsDB().query(query);
  // catchData.set(catchKey, data);
  res.status(200).json(new ApiResponse(200, "Projects Details", data));
};

export const getProjectWithId = async (req: Request, res: Response) => {
  const id = req.params.id;

  if (!id) throw new ErrorHandler(400, "id is Required");

  let sql = `SELECT ID,THUMBNAIL,PROJECTNAME,DATE,STORENAME,TOTALDOWNLOAD,VERSION,PRICE,PLATFORM,SCREENSHOTS,DESCRIPTION WHERE ID = ${id} AND (STATUS = 'Public' OR STATUS = 'Unlist')`;

  const data = await productsDB().query(sql);
  if(data.length === 0) return res.status(404).json(new ApiResponse(404, "No Data Found"));
  res
    .status(200)
    .json(
      new ApiResponse(200, "Get Single Project Info", data[data.length - 1])
    );
};

export const downloadFile = async (req: Request, res: Response) => {
  const id = req.body.id;

  if (!id) throw new ErrorHandler(400, "id is required");

  //increase the download
  const downloadURL = await productsDB().increaseCount(id, "TOTALDOWNLOAD");

  res.status(200).json(new ApiResponse(200, "Download url", downloadURL));
};


/* 

upload file to db
 * user should have an account
 * user should authenticated

*/
export const uploadFile = async (req : Request, res : Response) => {


}