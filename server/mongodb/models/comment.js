import mongoose from "mongoose";

const Comment = new mongoose.Schema({
    postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    firstName: { type: String, required: true },
    text: { type: String, required: true },
    date: { type: Date, default: Date.now },
  });
  
  const CommentSchema = mongoose.model('Comment', Comment);
  
  export default CommentSchema;