const mongoose = require("mongoose");

const internSchema = new mongoose.Schema({
    firstname : {
        type:String,
        required:true
    },
    lastname : {
        type:String,
        required:true
    },
    
    email : {
        type:String,
        required:true,
        unique: true
    },
    username : {
        type:String,
        required:true,
        unique:true
    },
    password : {
        type:String,
        required:true,
        unique:true
    },
    confirm_password : {
        type:String,
        required:true,
        unique:true
    }
})


const Register = new mongoose.model("Register", internSchema);

module.exports = Register;