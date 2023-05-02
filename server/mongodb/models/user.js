import mongoose from "mongoose";

const User = new mongoose.Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    location: {type: String, required: true},
    artstyle: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    posts: {type: Array, required: false},
    likedposts: {type: Array, required: false},
})

const UserSchema = mongoose.model('User', User);

export default UserSchema;