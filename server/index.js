import express from "express"
import mongoose from "mongoose";
import dotenv from "dotenv"
import bodyParser from "body-parser";
import morgan from "morgan";
import cors from "cors"

const app = express()
app.use(bodyParser.json())
dotenv.config()
app.use(morgan('dev'))
app.use(cors({
    origin: 'http://localhost:3000'
  }));


//import Routes
import authRouter from './Routes/auth.js'
import userRouter from './Routes/user.js'
import productsRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import orderRouter from './Routes/order.js'
import stripeRouter from './Routes/stripe.js'


//usage of routes
app.use('/auth', authRouter)
app.use('/user', userRouter)
app.use('/products', productsRouter)
app.use('/cart', cartRouter)
app.use('/order', orderRouter)
app.use('/stripe',stripeRouter)

//db connection
mongoose.connect(process.env.MONGO_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => app.listen(process.env.PORT || 5000, () => {
        console.log(`server listening at ${process.env.PORT}`);
    }))
    .catch((error) => { console.log(error) })

