const { body } = require('express-validator');

function userLoginValidator() {
    return [
        body('email', 'El email es obligatorio').exists(),
        body('email', 'El email es inválido').isEmail(),
        body('password', 'El password es obligatorio').exists(),
        body('password').isLength({ min: 3, max: 30 }).withMessage('Longitud del password es inválida')
    ]
}



module.exports = {
    userLoginValidator,
}