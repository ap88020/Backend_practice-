const express = require('express');
const app = express();
const mongoose = require('mongoose');

const { userRouter } = require('./router/users.router');
const { courseRouter } = require('./router/course.router');
const { adminRouter } = require('./router/admin.router');

app.use(express.json());

app.use('/api/user',userRouter);
app.use('/api/admin',adminRouter);
app.use('/api/course',courseRouter);


async function main() {
    try {
        await mongoose.connect("mongodb+srv://sky:sky123@cluster0.c5pxnn9.mongodb.net/coursera-app");
        console.log("mongodb connected")
        app.listen(3000, () => {
            console.log("server is running on port 3000");
        })
    } catch (error) {
        console.log(error);
    }
}

main();
