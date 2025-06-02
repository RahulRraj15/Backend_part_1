import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'express'
import userRouter from './Routes/user.js'
import productRouter from './Routes/product.js'
import cartRouter from './Routes/cart.js'
import addressRouter from './Routes/address.js'

import cors from 'cors';

const app = express();

app.use(bodyParser.json())

app.use(cors({
  origin:true,
  methods:[ "GET","POST","PUT","DELETE"],
  credentials:true
}))

// home testing route
app.get('/',(req,res)=>res.json({messge:'This is home route'}))

// user Router
app.use('/api/user',userRouter)

// product Router
app.use('/api/product',productRouter)

// cart Router
app.use('/api/cart',cartRouter)

// address Router
app.use('/api/address',addressRouter)



mongoose.connect(
  "mongodb+srv://rajrahul18122003:P6e6j8R2GevsGtyW@cluster0.o8lsqcp.mongodb.net/",{
    dbName:"Backend_part_1"
  }
).then(()=>console.log("MongoDB Connected Succssfully...!")).catch((err)=>console.log(err));

const port = 10001;
app.listen(port,()=>console.log(`Server is running on port ${port}`))


