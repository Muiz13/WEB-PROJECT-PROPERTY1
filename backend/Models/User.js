const mongoose = require("mongoose")
const UserSchema1 = mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    }
},
{ timestamps: true }
);






const User = mongoose.model('User', UserSchema1);

module.exports = User;