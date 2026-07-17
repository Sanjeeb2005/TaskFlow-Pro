const connectDB = require('../database/db');
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", function(req, res){
    const {fullName, email, password} = req.body;
    
    if(!fullName || !email || !password){
        return res.status(404).send("All fields are required.");
    }

    console.log(fullName);
    console.log(email);
    console.log(password);

    res.send("signUp Successfully");
});

connectDB();

app.listen(3000, function(){
    console.log('Server is running');
});