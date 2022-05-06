const mongoose = require('mongoose');
const port = 3400;


const password = require('./config/config').dbPassword


// const URL = `mongodb+srv://neotech:${password}@ecommerce.2qy88.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;
const URL = `mongodb+srv://neotech:Clav3Clav3@cluster0.lwbyo.mongodb.net/ng?authSource=admin&replicaSet=atlas-m10gyp-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`;

const app = require('./app')

// //IIFE 
async function dbConnect() {
    try {
        await mongoose.connect(URL)
        console.log(`\x1b[33m Connected to MongoDB \x1b[37m`);
        app.listen(port, () => {
            console.log(`\x1b[35m Servidor escuchando en el puerto ${port} \x1b[37m`)
        })
    } catch (error) {
        console.error(`\x1b[31m Error al conectarse a la DB \x1b[37m`, error)
    }
}

dbConnect()


