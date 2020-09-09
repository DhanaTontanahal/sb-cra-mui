const express = require('express');

const router = express.Router();

const blog = require('../models/blog');

// Routes
router.get('/blogApi',(req,res)=>{
    blog.find({ })
        .then((blogData)=>{
            res.json(blogData);
        })
        .catch((error)=>{
            console.log("Error occurred while fetching blog data");
        })
})

router.post('/blogApi/save', (req, res) => {
   
    const data = req.body;
    console.log(data);
    
    const newBlogPost = new blog(data);

    newBlogPost.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // BlogPost
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


router.get('/name', (req, res) => {
    const data =  {
        username: 'peterson',
        age: 5
    };
    res.json(data);
});



module.exports = router;