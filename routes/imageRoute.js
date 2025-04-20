const express = require('express');

const router = express.Router();
const {uploadImage, getImages} = require('../controllers/image');

router.post('/upload', uploadImage);
router.get('/getImages', getImages);

module.exports = router;