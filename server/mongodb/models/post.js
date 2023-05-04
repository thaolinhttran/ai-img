import mongoose from 'mongoose'

const Post = new mongoose.Schema({
    userid: {type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true},
    username: {type: String, required: true},
    prompt: {type: String, required: true},
    photo: {type: String, required: true},
    comments: {type: Array, required: false},
});

const PostSchema = mongoose.model('Post', Post);

export default PostSchema