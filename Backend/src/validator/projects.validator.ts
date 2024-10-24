import Joi from "joi";

export const uploadFileValidator = Joi.object({
  category: Joi.string().required(),
  thumbnail: Joi.object({
    mimetype: Joi.string().valid("image/jpeg", "image/png").required(),
    size: Joi.number()
      .max(5 * 1024 * 1024)
      .required(), // Max file size 5MB
  }).required(),
  "project-name": Joi.string().required(),
  version: Joi.number().required(),
  "download-file": Joi.object({
    mimetype: Joi.string().required(),
    size: Joi.number()
      .max(10 * 1024 * 1024)
      .required(),
  }).required(),
  "price-type": Joi.string().required(),
  platform: Joi.string().required(),
  screenshots: Joi.array()
    .items(
      Joi.object({
        mimetype: Joi.string().valid("image/jpeg", "image/png").required(),
        size: Joi.number()
          .max(1 * 1024 * 1024)
          .required(), // Max file size 1MB
      })
    )
    .min(1)
    .required(),
  "long-description": Joi.string().max(2000).required(),
});
