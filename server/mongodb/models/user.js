import mongoose from "mongoose";

const User = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    location: {type: String, required: true},
    artstyle: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    posts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
    likedposts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Post' }],
})

const UserSchema = mongoose.model('User', User);

export default UserSchema;