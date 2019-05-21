const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');

/* 
The server will receive JSON payloads, so add Express middleware to parse incoming request containing JSON. You can specify middleware to use with `app.use()`. In the parentheses, put `express.json()`.
*/