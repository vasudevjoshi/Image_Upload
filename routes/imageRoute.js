const express = require('express');

const router = express.Router();
const upload = require('../controllers/upload'); // Multer configuration
const { uploadImage, getImages } = require('../controllers/image');

// Route to handle file upload
router.post('/upload', upload.single('file'), uploadImage);

// Route to get all images
router.get('/getImages', getImages);
router.get('/upload', (req, res) => {
    res.render('upload'); // Render the index.ejs file
});

router.get('/', (req, res) => {
    res.render('index'); // Render the images.ejs file
});

module.exports = router;