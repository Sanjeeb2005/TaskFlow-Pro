const mongoose = require('mongoose');

async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://taskflow_admin:KituBt@cluster0.qeqlx54.mongodb.net/taskflowpro?retryWrites=true&w=majority&appName=Cluster0');

        console.log('MongoDB Connected Successfully');
    } catch (error) {
        console.log('Database Connection Failed');
        console.log(error);
    }
}

module.exports = connectDB;