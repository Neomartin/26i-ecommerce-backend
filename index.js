const mongoose = require('mongoose');
const port = 3400;
const password = 'alfab3ta';
const URL = `mongodb+srv://neotech:${password}@ecommerce.2qy88.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

const app = require('./app')

// //IIFE 
async function dbConnect() {
    try {
        await mongoose.connect(URL)
        console.log(`\x1b[32m Connected to MongoDB \x1b[37m`);
        app.listen(port, () => {
            console.log(`\x1b[36m Servidor escuchando en el puerto ${port} \x1b[37m`)
        })
    } catch (error) {
        console.error(`\x1b[31m Error al conectarse a la DB \x1b[37m`, error)
    }
}

dbConnect()


