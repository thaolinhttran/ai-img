import express from 'express'
import * as dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './mongodb/connect.js'
import User from './mongodb/models/user.js'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import postRoutes from './routes/postRoutes.js'
import dalleRoutes from './routes/dalleRoutes.js'
import commentRoutes from './routes/commentRoutes.js'

dotenv.config();

//init express app
const app = express();
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://craite.space');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  });
app.use(express.json({limit: '50mb'}));

app.use('/api/v1/post', postRoutes);
app.use('/api/v1/dalle', dalleRoutes);

app.use('/api/v1/comment', commentRoutes);

app.get('/', async (req, res) => {
    res.send('Hello from Dalle');
})

const startServer = async () =>{ 
    try{
        connectDB(process.env.MONGODB_URL);
        app.listen(8080, () => console.log("Server has started on port http://localhost:"))
    }
    catch(err){
        console.log(err);
    }
}

//create user
app.post('/register', async(req, res) => {
    const {firstname, lastname, location, artstyle, email, password, posts, likedposts} = req.body;
    
    const encryptedPassword = await bcrypt.hash(password, 10);
    try{
        const oldUser = await User.findOne({email});
        if(oldUser){
            return res.send({ error: "User Exists"});
        }
        const newUser = await User.create({
            firstname,
            lastname,
            location,
            artstyle,
            email,
            password: encryptedPassword,
            posts,
            likedposts
        });
        res.status(201).json({success: true, data: newUser});
    }
    catch(error){
        res.status(500).json({success: false, message: error});
    }
})

//user login
app.post("/login-user", async(req, res) => {
    const {email, password} = req.body;

    const user = await User.findOne({email});
    if(!user){
        return res.json({error: "User not found"});
    }
    if(await bcrypt.compare(password, user.password)){
        const token = jwt.sign({email:user.email}, process.env.JWT_SECRET);

        if(res.status(201)){
            return res.json({status: "ok", data: token});
        }
        else{
            return res.json({error: "error"});
        }
    }
    res.json({status: "error", error: "Invalid Password"});
})

//get user data
app.post("/user-data", async(req, res) => {
    const {token} = req.body;
    try{
        const user = jwt.verify(token, process.env.JWT_SECRET);
        const user_email = user.email;
        User.findOne({email: user_email}).then((data) =>{
            res.send({status: "ok", data: data});
        });
    } catch(error){
        res.send({status: "error", data: error});
    }
})

startServer();