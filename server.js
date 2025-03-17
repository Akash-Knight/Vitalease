const express = require('express');
const app = express();
require('dotenv').config();
const userRoute = require('./routes/userRoute');
const dbconfig = require('./config/dbconfig');

app.use(express.json());
app.use('/api/user' , userRoute);
const port = process.env.PORT || 5001;
app.listen(port, () => console.log(`nodemon server started at  ${port}`));
