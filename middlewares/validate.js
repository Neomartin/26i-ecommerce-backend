const { validationResult } = require('express-validator')

const validate = (req, res, next) => {
    const errors = validationResult(req);
    console.log(errors);
    
    if(errors.isEmpty()) {
        console.log(`isEmpty`)
        next();
    } else {
        const extractedErrors = errors.array().map(err => {
            console.log(`extrated error`, err);
            return {
                [err.param]: err.msg
            }
        })
    
        return res.status(422).send({
            ok: false,
            errors: extractedErrors
        })
    }



}

module.exports = validate