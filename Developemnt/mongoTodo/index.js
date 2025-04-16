const express = require('express');
const app = express();
const {signIn,signUp,todo,todos} = require('./middleware');
const dbConnect = require('./db.connect');
const auth = require('./auth');

app.use(express.json());

app.post('/signin',signIn);

app.post('/signup',signUp);

app.post('/todo',auth,todo);

app.get('/todos',auth,todos);

app.listen(3000, ()=> {
    console.log(`app is listening at port 3000`);
})