//Dependencies
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//Setup express 
const app = express();
const PORT = 1337;
//Sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());