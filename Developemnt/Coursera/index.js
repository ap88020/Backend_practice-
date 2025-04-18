const express = require('express');
const app = express();

const { userRouter } = require('./router/users.router');
const { courseRouter } = require('./router/course.router');
const { adminRouter } = require('./router/admin.router');

app.use(express.json());

app.use('api/user',userRouter);
app.use('api/admin',adminRouter);
app.use('api/course',courseRouter);

app.listen(3000, () => {
    console.log("server is running on port 3000");
})
