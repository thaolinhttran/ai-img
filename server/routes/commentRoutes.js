import express from "express";
import * as dotenv from 'dotenv';
import Comment from "../mongodb/models/comment.js";
dotenv.config();

const router = express.Router();

//add comment
router.route('/').post(async(req, res) => {
    try{
        const {postId, userId, firstName, text} = req.body;
        console.log(req.body)
        const newComment = await Comment.create({
            postId,
            userId,
            firstName,
            text,
            date: new Date()
        })
        res.status(200).json({success: true, data: newComment})
    } catch(error){
        res.status(500).json({success: false, message: error})
    }
})

//get comments by id
router.route('/:id').get(async(req, res) => {
    const postId = req.params.id;
    try {
        const comments = await Comment.find({ postId: postId });
        console.log(comments)
        res.status(200).json({ success: true, data: comments });
      } catch (error) {
        res.status(500).json({ success: false, message: error });
      }
})
export default router;