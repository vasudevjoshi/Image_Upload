const Image = require('../models/image');
const User = require('../models/user');
require('dotenv').config();

const uploadImage = async(req,res) =>{
    try{
        const{loggedemail,description} = req.body;
        const user  = await User.findOne(loggedemail);

        if (!req.file) {
            return res.status(400).json({ error: 'No file uploaded' });
        }
    const url = req.file.location; // S3 public URL
    const createdBy = user._id;
    const image = new Image({ url,createdBy,description });
    await image.save();
        
    res.render('index.ejs');
   
  } catch (error) {
    res.status(500).json({ error: 'Upload failed' });
  }
}

const getImages = async (req, res) => {
    try {
      const images = await Image.find({}).sort({ createdAt: -1 }); // Fetch all images from the database
      res.render('gallery', { images }); // Render the gallery view and pass the images
    } catch (err) {
      console.error(err.message);
      res.status(500).render('error', { message: 'Server error' });
    }
  };

module.exports ={uploadImage, getImages};