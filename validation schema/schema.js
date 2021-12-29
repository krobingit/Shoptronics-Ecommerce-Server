import joi from 'joi';

const registerSchema = joi.object({
 username: joi.string().min(3).max(30).required(),
 email:joi.string().email().required(),
 password: joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)).required(),
 isAdmin: joi.boolean().default(false)

})

const loginSchema = joi.object({
email:joi.string().required(),
 password:joi.string().pattern(new RegExp(/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[^\w\s]).{8,}$/)).required()

})

const productSchema=joi.object({
        name:joi.string().required(),
        brand:joi.string().required(),
        price:joi.number().required(),
        image:joi.string().required(),
        description:joi.string().required(),
    category: joi.string().required(),
        model:joi.string().required()

    })

export {registerSchema,loginSchema,productSchema}