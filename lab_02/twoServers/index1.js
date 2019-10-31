var express = require('express');

var app = express();

app.get('/', function(req,res) {
   res.sendFile(__dirname + "/static/html/index1.html"); 
});

app.get('/temp', function(req,res) {
   res.sendFile(__dirname + "/static/img/nginxhero.jpg"); 
});


app.listen(4001,function(){
   console.log("listen on 4001...");
});