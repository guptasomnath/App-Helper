import { NextFunction, Request, Response } from "express";
import { ApiResponse } from "../utils/ApiResponse";
import { ErrorHandler } from "../utils/ErrorHandler";
import jwt from "jsonwebtoken";
import { IGAuth, IGAuthProfile } from "../types";

export const loginWithGoogle = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${process.env.CLIENT_ID}&redirect_uri=${process.env.REDIRECT_URI}&response_type=code&scope=profile email`;
  res.status(200).json(new ApiResponse(200, "Google Login Uri Generated", url));
};

export const verifyLogin = async (req: Request, res: Response) => {
  const { code } = req.query;

  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
      redirect_uri: process.env.REDIRECT_URI,
      grant_type: "authorization_code",
    }),
  });

  if (!response.ok)
    throw new ErrorHandler(
      400,
      "Some error happened while verifying login with google"
    );

  const result = await response.json();
  const { access_token } = result as IGAuth;

  const profileResponse = await fetch(
    "https://www.googleapis.com/oauth2/v1/userinfo",
    {
      headers: { Authorization: `Bearer ${access_token}` },
    }
  );

  if (!profileResponse.ok)
    throw new ErrorHandler(
      400,
      "Some error happened while fetching user profile info"
    );

  const profile = (await profileResponse.json()) as IGAuthProfile;

  //create jwt token
  const jwt_token = jwt.sign(
    { email: profile.email, name: profile.name },
    process.env.JWT_SECRET_KEY || "",
    { expiresIn: "10d" }
  );

  res.redirect(
    `${process.env.FRONTEND_URL}?email=${profile.email}&name=${profile.name}&picture=${profile.picture}&access-key=${jwt_token}`
  );
};
