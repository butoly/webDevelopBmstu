const express = require("express");
const body = require("body-parser");

const app = express();

app.use(express.json())
app.use(body.json())

let u = {
	"j@yandex.ru":"John",
	"i@yandex.ru":"Ivan",
	"m@yandex.ru":"Maks",
};

function users(req, res) {
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

app.get("/users", users);
app.post("/users", addUser);
app.put("/users", updateUser);
app.delete("/users/",deleteUser);
app.options("/users",optReq);

app.listen(3000, function() {
	console.log("listening...");
});
