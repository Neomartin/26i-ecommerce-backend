const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    fullName: { type: String, required: true },
    email: {type: String, required: true },
    password: {type: String, required: true },
    bornDate: { type: Date },
    active: { type: Boolean },
    role: {type: String },
    age: { type: Number, required: true }
})

module.exports = mongoose.model('User', UserSchema)
                               //en mongoDB busca una collecion llamada **users**