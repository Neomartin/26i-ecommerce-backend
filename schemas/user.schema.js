const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const validRoles = [
    'SUPER_ADMIN',
    'ADMIN_ROLE',
    'USER_ROLE',
    'CLIENT_ROLE'
]

const UserSchema = new Schema({
    fullName: { type: String, required: true, minlength: 5, maxlength: 40 },
    email: { type: String, required: true, unique: true, index: true },
    password: { type: String, required: true },
    bornDate: { type: Date },
    active: { type: Boolean, required: true, default: false }, //
    role: {type: String, enum: validRoles },
    age: { type: Number, required: true, min: 12, max: 100 }
})

module.exports = mongoose.model('User', UserSchema)
                               //en mongoDB busca una collecion llamada **users**