import { CorsOptions } from "cors";

export const CORS_OPTIONS: CorsOptions = {
  origin: "*",
  methods: "GET", //for multiple "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus : 200,
};
