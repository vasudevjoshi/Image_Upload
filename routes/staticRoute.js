const express = require('express');
const router = express.Router();

router.get('/upload', (req, res) => {
    res.render('upload'); // Render the index.ejs file
});

router.get('/index', (req, res) => {
    res.render('index'); // Render the images.ejs file
});