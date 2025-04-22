require('dotenv').config();
const connectDB = require('./config/dbconfig');
const express = require('express');
const app = require('express')();
const path = require('path'); // Import path module for setting views directory

app.set('view engine', 'ejs'); // Set EJS as the templating engine
app.set('views', path.join(__dirname, 'views')); // Set the views directory

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));

connectDB();

const imageRouter = require('./routes/imageRoute');
const userRouter = require('./routes/userRoute');
const staticRouter = require('./routes/staticRoute');

app.use('/api/image', imageRouter);
app.use('/api/user', userRouter);

app.listen(process.env.PORT || 5000, () => {
    console.log(`Server is running on port ${process.env.PORT || 5000}`);
});