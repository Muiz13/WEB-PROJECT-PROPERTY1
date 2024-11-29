const User = require("../Models/User");
const jwt=require('jsonwebtoken')
const currentDate = new Date();


let signup = (req, res) => {
    let { username, password } = req.body;

    let user = new User({
        username,
        password
    });
    user.save().then((user) => {
        res.status(200).send({ message: "User created", user })
    }).catch(err => {
        res.status(500).send({ message: "Error", err })
    })
}
let login = (req, res) => {
    let { username, password } = req.body;
    User.findOne({ username: username }).then((user) => {
        if (!user) {
            res.status(201).send({ message: "User not Found" })
        }
        else {
            if (user.password == password) {
                const dateTimeString = currentDate.toLocaleString();
                let token = jwt.sign({
                    id: user._id,
                    username: user.username,
                    loggedInTime:dateTimeString
                }, process.env.SECRET_KEY, { expiresIn: '24h' })
                res.status(200).send({ message: "User Found", token: token })
            } else {
                res.status(201).send({ message: "Password invalid" })
            }
        }
    })
}

let updateUser = (req, res) => {
    let { oldPassword,newUsername,newPassword} = req.body;
    let { username , id} = req.decoded;    
    console.log(username,oldPassword, newUsername,newPassword)
    var myquery = { _id: id , username:username, password:oldPassword };
    var newvalues = {
        $set: {
            username:newUsername, password:newPassword
        }
    };
    User.findOneAndUpdate(myquery, newvalues, { new: true }).then((data) => {
        if(data){
            console.log(data)
            console.log("Password updated")
            res.status(201).send({ message: "Password updated" })
        }else{
            console.log("Old Password is wrong. Password could not be updated")
            res.status(200).send({ message: "Old Password is wrong. Password could not be updated" })
        }
    }).catch(err => {
        console.log("Internal Server Error. Credentials could not be updated")
        res.status(500).send({ message: "Error", err })
    })
}


module.exports = {
    login,
    updateUser
}