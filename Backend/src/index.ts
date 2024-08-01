import express from "express";
import dotenv from "dotenv";
import cors from "cors";

//custom imports
import { CORS_OPTIONS } from "./constant";
import projectrouter from "./router/projects.router";
import { globalErrorController } from "./controller/error.controller";
import authRouter from "./router/auth.router";
import { ApiResponse } from "./utils/ApiResponse";
import { loginRateLimit, getProjectsRateLimit, downloadProjectsRateLimit } from "./middleware/rateLimit";

const app = express();

dotenv.config();
app.use(cors(CORS_OPTIONS));
app.use(express.json());

//api endpoints
app.use([loginRateLimit, getProjectsRateLimit, downloadProjectsRateLimit]);
app.use("/api/v1/project", projectrouter);
app.use("/api/v1/auth", loginRateLimit, authRouter);

//global error handler
app.use(globalErrorController);

//global route error
app.all("*", (req, res, next) => {
  res
    .status(404)
    .json(new ApiResponse(404, `Can't find ${req.originalUrl} on the server`));
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(`Server is running http://localhost:${PORT}`)
);
