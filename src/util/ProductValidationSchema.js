const zod = require('zod');
const productValidationSchema = zod.object({
    body: zod.object({
        name: zod.string().min(1).max(255),
        price: zod.number().min(0),
        qty: zod.number().min(0),
        availableColors: zod.array(zod.string()).min(1),
    }).strict(),
})
module.exports = productValidationSchema;