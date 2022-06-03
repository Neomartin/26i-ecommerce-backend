const express = require('express');
const api = express.Router();
const userController = require('../controllers/user.controller');
const jwtVerify = require('../middlewares/jwt');
const isAdmin = require('../middlewares/isAdmin')
const { userLoginValidator, validate } = require('../middlewares/userValidators')
// * Forma extensa de definir variables
// const expressValidator = require('express-validator');
// const body = expressValidator.body;
// const sanitize = expressValidator.sanitize;
// const check = expressValidator.check;


//* Forma corta con destructuración
const { body, sanitize, check } = require('express-validator');

api.get('/users/:name?', jwtVerify, userController.getUsers);

//Necesito enviar un dato por que necesito traer 1 solo documento (user)
api.get('/user/:userID', jwtVerify, userController.getUser);

//Para escribir data en el backend se suele enviar con método POST a través del body
api.post('/users', userController.createUser);

api.delete('/users/:userToDeleteId', [jwtVerify, isAdmin], userController.deleteUser);

api.put('/users',[jwtVerify ], userController.updateUser)

api.post('/login', userLoginValidator(), validate, userController.login)


module.exports = api;