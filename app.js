const express = require('express')
const app = express();
const cors = require('cors')

const user_routes = require('./routes/user.routes');

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    return res.send('Ruta principal de mi servidor NODEMON')
})

app.use('/api', [
    user_routes
])

module.exports = app;