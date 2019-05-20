const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

app.use(express.json());

const uri = process.env.DB_URI;

mongoose.connect(uri, { useNewUrlParser: true});

/* 
Now create a variable with `const` named `db`. Access the database connection you created in the last step by assigning `mongoose.connection` to the `db` variable.
*/