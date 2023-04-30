import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";

const app = express()
app.use(bodyParser.json())
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>app.listen(process.env.PORT || 5000,()=>{
    console.log(`server listening at ${process.env.PORT}`);
}))
.catch((error)=>{console.log(error);})

