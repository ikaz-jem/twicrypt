const Joi = require('joi');

const userExistence = Joi.object({
  bodyAddress: Joi.string().required().max(50),
  signature : Joi.string().optional().max(136)
})

module.exports = userExistence