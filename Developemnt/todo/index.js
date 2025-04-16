const express = require('express');
const jwt = require('jsonwebtoken');
const {signUp , signIn, endPoint, todoDelete, todoGet, todoPost} = require('./middleware');
const jwt_secret_key = "key";
const method = require('./method');
const users = require('./data');
const auth = require('./auth');


const app = express();
app.use(express.json());
app.use(express.static('public'));

app.get("/",(req,res) => {
    res.sendFile(__dirname + "/public/signup.html");
})

app.get("/signin",(req,res) => {
    res.sendFile(__dirname + "/public/signin.html");
})

app.get('/todo', (req,res) => {
    res.sendFile(__dirname + "/public/todo.html");
})

app.post('/signup',method , signUp);

app.post('/signin',method ,signIn);

app.get("/me", method ,auth,endPoint);

app.get("/todo",method ,auth, todoGet);

app.post("/todo",method ,auth , todoPost);

app.delete("/todo",method ,auth, todoDelete);

app.listen(3000,()=> {
    console.log("app is listening at port 3000");
})