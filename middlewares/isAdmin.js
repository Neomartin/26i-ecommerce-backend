// Middleware para verificar si el usuario es administrador
function isAdmin(req, res, next) {
    if(req.user.role !== 'ADMIN_ROLE') {
        return res.status(401).send({
            ok: false,
            message: `No tiene permisos para realizar esta acción`
        })
    }

    next()
}

module.exports = isAdmin