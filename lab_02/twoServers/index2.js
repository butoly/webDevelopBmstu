var express = require('express');

var app = express();

app.get('/', function(req,res) {
   res.sendFile(__dirname + "/static/html/index2.html"); 
});

app.get('/temp', function(req,res) {
   res.sendFile(__dirname + "/static/img/Node.png");  
});


app.listen(4002,function(){
   console.log("listen on 4002...");
});