const joi = require('@hapi/joi');

/* These functions below are used to verify user input to ensure
 * conform to the requirements outlined 
 */ 
const registrationValidation = (formData) => {
    const registrationSchema = joi.object({
        firstName: joi.string().required(),
        lastName: joi.string().required(),
        email: joi.string().min(6).max(50).required().email(),
        password: joi.string().min(6).max(50).required()
    });
    return registrationSchema.validate(formData);
};

const loginValidation = (formData) => {
    const loginSchema = joi.object({
        email: joi.string().min(6).max(50).required().email(),
        password: joi.string().min(6).max(50).required()
    });
    return loginSchema.validate(formData);
}

module.exports.registrationValidation = registrationValidation;
module.exports.loginValidation = loginValidation;