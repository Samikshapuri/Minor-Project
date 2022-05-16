const express = require('express')
const cors = require('cors');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());

const uri = process.env.URI;
mongoose.connect(uri);

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log('MongoDB database connected');
})


const predictorsRouter = require('./routes/predictor');
app.use('/predictor',predictorsRouter);

const registersRouter = require('./routes/register');
app.use('/users', registersRouter);

const port = process.env.port || 5000;
app.listen(port, ()=>{
    console.log(`Server running on port ${port}`);
})