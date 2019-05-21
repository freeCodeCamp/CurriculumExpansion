const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());

/* 
Create a variable named `uri` using `const`. Set it equal to an environment variable called `DB_URI`. Here is how you would get an environment variable called `URL`: `process.env.URL`. 

Normally, you would have to set the environment variable on your machine to the MongoDB connection URI used to connect to a MongoDB deployment. But in this practice environment, that is not necessary. 
*/