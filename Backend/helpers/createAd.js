const Joi = require('joi');

const createAd = Joi.object({
  name: Joi.string()
    .required()
    .max(15)
    .trim(),

  link: Joi.string()
    .required()
    .max(250)
    .uri(),

  image: Joi.string()
    .required()
    .max(250)
    .uri(),

  icon: Joi.string()
    .required()
    .max(250)
    .uri(),
});

module.exports = createAd