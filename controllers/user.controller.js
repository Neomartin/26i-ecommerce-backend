
const res = require('express/lib/response');
const User = require('../schemas/user.schema');

function getUsers(req, response) {

    User.find({}, (error, users) => {

        return response.status(200).send({
            message: `Usuarios obtenidos correctamente`,
            users
        })
    })


}

function getUser(req, res) {
    return res.send({ user: {
        name: "Jose",
        lastName: "Perez",
        age: 40,
        active: true
    }})
}

function createUser(req, res) {
    return res.send({ message: `Se creara un NUEVO USUARIO`})
}

function deleteUser(req, res) {
    return res.status(200).send({
        message: 'El usuario será BORRADO'
    })
}

const updateUser = (req, res) => {
    return res.status(200).send({
        message: 'El usuario será ACTUALIZADO'
    })
}

const login = function (req, res) {
    return res.send({ message: 'Login de usuario'})
}

module.exports = {
    getUser,
    createUser,
    deleteUser,
    updateUser,
    login,
    getUsers
}