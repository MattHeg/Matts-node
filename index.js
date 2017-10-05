var express = require("express");
var app = express();
app.get("/", function(req, res){
	res.send("server 3000")
})
app.listen(3000, function(){
	console.log("server 3000")
})