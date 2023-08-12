const Joi = require('joi');

const userExistence = Joi.object({
  bodyAddress: Joi.string().required().max(50),
})

module.exports = userExistence