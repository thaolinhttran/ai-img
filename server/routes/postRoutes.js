import express from "express";
import * as dotenv from 'dotenv';
import {v2 as cloudinary} from 'cloudinary';
import Post from '../mongodb/models/post.js';
import User from '../mongodb/models/user.js';

dotenv.config();

const router = express.Router();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
})

//Get all posts
router.route('/').get(async(req, res) => {
    try{
        const posts = await Post.find({});

        res.status(200).json({success: true, data: posts})
    } catch(error){
        res.status(500).json({success: false, message: error})
    }
})

//Get post by id
router.route('/:id').get(async(req, res) => {
    const postId = req.params.id;
    const post = await Post.findById(postId).populate('userid');

    if (!post) {
        return res.status(404).send({ message: 'Post not found' });
    }

    res.send(post);
    
})

//Create post
router.route('/').post(async(req, res) => {
    try {
        const {userid, username, name, prompt, photo} = req.body;
        const photoURL = await cloudinary.uploader.upload(photo);
    
        const newPost = await Post.create({
            userid,
            username,
            name,
            prompt,
            photo: photoURL.url,
        })
        const user = await User.findOneAndUpdate({ userid },
            { $push: { posts: newPost._id } },
            { new: true });
        res.status(201).json({success: true, data: newPost});
    } catch (error) {
        res.status(500).json({ success:false, message: error})
    }
})

export default router;