import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"

const app = express()
dotenv.config()

mongoose.connect(process.env.MONGO_URL)
.then(()=>console.log("DB Connection successfull"))
.catch((error)=>{console.log(error);})

app.listen(process.env.PORT || 5000,()=>{
    console.log("server listening");
})