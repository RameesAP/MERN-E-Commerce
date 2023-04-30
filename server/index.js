import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import morgan from "morgan";

const app = express()
app.use(bodyParser.json())
dotenv.config()
app.use(morgan('dev'))


//import Routes
import userRoutes from './Routes/user.js'


//usage of routes
app.use('/',userRoutes)


//db connection
mongoose.connect(process.env.MONGO_URL)
.then(()=>app.listen(process.env.PORT || 5000,()=>{
    console.log(`server listening at ${process.env.PORT}`);
}))
.catch((error)=>{console.log(error);})

