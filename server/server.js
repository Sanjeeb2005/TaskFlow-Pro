const express = require('express');
const cors = require('cors');
const bcrypt = require('bcrypt');
const connectDB = require('../database/db');
const User = require('../models/user');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", async function(req, res){
    const {fullName, email, password, confirmPassword} = req.body;
    
    if(!fullName || !email || !password || !confirmPassword){
        return res.status(404).send("All fields are required.");
    }
    if (password !== confirmPassword){
        return res.status(400).send("Passwords do not match");
    }
    const existingUser = await User.findOne({email});
    if(existingUser){
        return res.status(409).send("Email already exist");
    }
    const hashedPassword = await bcrypt.hash(password, 10);
const user = new User({
    fullName,
    email,
    password: hashedPassword,
});
await user.save();

    res.send("signUp Successfully");
});

connectDB();

app.listen(3000, function(){
    console.log('Server is running');
});