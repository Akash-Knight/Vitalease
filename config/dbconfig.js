const mongoose = require('mongoose');


const connectDB = mongoose.connect(process.env.mongose_URL);

const connection = mongoose.connection;

connection.on('connected', () => {
    console.log('mongodb is connect');
})

connection.on('error', (error) => {
    console.log('error in mongoDB connection', error);
})

module.exports = connectDB;
