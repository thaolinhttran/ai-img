import mongoose from "mongoose";
import User from './models/user.js'
import express from "express"
const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
    .then(() => console.log('MongoDB connected'))
    .catch((err) => console.log(err));
}

export default connectDB;