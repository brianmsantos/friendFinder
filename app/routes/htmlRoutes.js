// Your htmlRoutes.js file should include two routes:
// A GET Route to /survey which should display the survey page.
// A default, catch-all route that leads to home.html which displays the home page.
//Default route to get to the homepage
const path = require("path");
const fs = require("fs")

//Routing
module.exports = function(app) {

    // app.get("/home", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });





    app.get('/', function(req, res) {
        fs.readFile("./app./public./home.html", function(err, data) {
            if (err) {
                return console.log(err);
            }
            res.set('Content-Type', 'text/html');
            res.send(data)
        })
    });
};