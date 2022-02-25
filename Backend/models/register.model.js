const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;

const registerSchema = new Schema({ 
    username : { type: String},
    email : { type: String,  unique:true },
    password : { type: String}
});

const Register = mongoose.model('Register', registerSchema);

module.exports = Register;