const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());

const uri = process.env.DB_URI;

/* 
Connect to the MongoDB database with the `mongoose.connect()` method. Specify the database uri and settings by passing in the the following parameters: `uri, { useNewUrlParser: true}`.
*/