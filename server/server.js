const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

app.post("/signup", function(req, res){
    console.log(req.body);
    res.send("signUp Successfully");
});

app.listen(3000, function(){
    console.log('Server is running');
});