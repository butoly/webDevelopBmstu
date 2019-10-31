const express = require("express");
const body = require("body-parser");

var expressLogging = require("express-logging"),
	logger = require("logops");

const app = express();

app.use(express.json());
app.use(body.json());
app.use(expressLogging(logger));
app.use(express.static("public"));

let u = {
	"j@yandex.ru":"John",
	"i@yandex.ru":"Ivan",
	"m@yandex.ru":"Maks"
};

function getIndex(req, res) {
	var options = {
		root: './public/html',
		dotfiles: 'deny',
		headers: {
				'x-timestamp' : Date.now(),
				'x-sent': true
				//'Content-Type' : 'text/plain' 
		}
	};

	var fileName = "index.html";
	res.sendFile(fileName, options, function(err){
		if(err) {
			console.log(err);
			res.status(err.status).end();
		}
		else {
			console.log('Sent: ', fileName);
		}
	});
}

function getHack(req, res) {
	var options = {
		root: './public/html',
		dotfiles: 'deny',
		headers: {
				'x-timestamp' : Date.now(),
				'x-sent': true
		}
	};

	var fileName = "hack.html";
	res.sendFile(fileName, options, function(err){
		if(err) {
			console.log(err);
			res.status(err.status).end();
		}
		else {
			console.log('Sent: ', fileName);
		}
	});
}

function users(req, res){
	res.status(200).json(u);
}

function addUser(req,res) {
	const username = req.body.username;
	const email = req.body.email;

	u[email] = username;
	res.status(200).json({message: 'Success'});
}

function updateUser(req,res){
	const newName = req.body.newUserName;
	const email = req.body.email;
	

	u[email] = newName;
	res.status(200),json(u);
	
}

function deleteUser(req,res){
	const email = req.body.email;
	delete u[email];
	res.status(200).json(u);
}

function optReq(req,res){
	res.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
	res.end();
}

app.get("/hack",getIndex);
app.get("/", getHack);

app.get("/users", users);
app.post("/users", addUser);
app.put("/users", updateUser);
app.delete("/users/",deleteUser);
app.options("/users",optReq);

app.listen(3001, function() {
	console.log("listening...3001");
});

app.listen(3002, function() {
	console.log("listening...3002");
});

app.listen(3003, function() {
	console.log("listening...3003");
});