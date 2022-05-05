const express = require('express');
const api = express.Router();

api.get('/user', (req, res) => {
    return res.send({ user: {
        name: "Jose",
        lastName: "Perez",
        age: 40,
        active: true
    }})
});

api.post('/user', (req, res)=> {
    return res.status(200).send({
        message: 'Método POST'
    })
})

api.delete('/user', (req, res)=> {
    return res.status(200).send({
        message: 'El usuario será BORRADO'
    })
})

api.put('/user', (req, res)=> {
    return res.status(200).send({
        message: 'El usuario será ACTUALIZADO'
    })
})

api.post('/login', (req,res)=> {
    return res.send({ message: 'Login de usuario'})
})

module.exports = api