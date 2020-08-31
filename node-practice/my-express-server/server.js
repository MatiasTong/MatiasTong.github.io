//jshint exversion:6
const express = require("express");
const app = express();

app.get("/", function(req, res){
    res.send('<h1>Hello</h1>')
})

app.get("/contact", function(req, res){
    res.send("contact me")
})

app.get("/about", function(req, res){
    res.send("I am a full stack web developer")
})

//tuning the server to port 3000 to listen to http requests sent to the server
//second parameter is a callback function
app.listen(3000, function(){
    console.log("server has started on port 3000")
});


