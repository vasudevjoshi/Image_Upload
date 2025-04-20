const express = require('express');
const app = require('express')();
 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

const imageRouter = require('./routes/imageRoute');
const userRouter = require('./routes/userRoute');

app.use('/api/image', imageRouter);
app.use('/api/user', userRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});