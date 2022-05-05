const express = require('express')
const app = express();

const user_routes = require('./routes/user.routes');

app.get('/', (req, res) => {
    return res.send('Ruta principal de mi servidor NODEMON')
})

app.use(user_routes)

module.exports = app;