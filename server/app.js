//this is the server side app.js file
//the order of this pages' content does matter
var express = require("express");
var path = require("path");
var peopleData = require("./public/data/classlist.json");

var app = express();

app.set("port", (process.env.PORT || 5000));

app.get('/data', function(req, res){
    res.json(peopleData);
});

app.get("/*", function(req, res){
    var file = req.params[0] || "views/index.html";
    res.sendFile(path.join(__dirname, "./public", file));
});

app.listen(app.get("port"), function(){
    console.log("Listening on port: " + app.get("port"));
});