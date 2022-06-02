const jwt = require('jsonwebtoken')
const secretSeed = require('../config/config').secret;

const jwtVerify = (req, res, next) => {
    // Esta función va a realizar algún check en este caso del token y si todo sale bien 
    console.log(`Funcion middleware jwtVerify`);

    const tokenFromRequest = req.headers.authorization;





    jwt.verify(tokenFromRequest, secretSeed, (err, decoded) => {
        if(err) {
            return res.status(401).send({
                message: 'Token inválido'
            });
        }


        console.log(decoded)
        req.user = decoded

        next();
    })

    
}

module.exports = jwtVerify