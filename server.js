//Dependencies
const fs = require("fs")
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
//Setup express 
const app = express();
const PORT = 1337;
//Sets up express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);


//This goes in the html routes file 
// app.get('/', function(req, res) {
//     fs.readFile("../app./public./home.html", function(err, data) {
//         if (err) {
//             return console.log(err);
//         }
//         res.set('Content-Type', 'text/html');
//         res.send(data)
//     })
// });


app.listen(PORT, () => console.log('This is working!'))