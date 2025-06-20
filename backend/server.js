import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import foodRouter from './routes/foodRoute.js';
import 'dotenv/config'
import userRouter from './routes/userRouter.js';
import cartRouter from './routes/cartRoute.js';
import orderRouter from './routes/orderRoute.js';

 


// app Config
const app = express();

const port = 4000;

// middlewares

app.use(express.json());
app.use(cors());

//db connection

connectDB();

//API endpoints
app.use("/api/food",foodRouter)
app.use("/images",express.static('uploads'))
app.use("/api/user",userRouter)
app.use("/api/user", userRouter);
app.use("/api/cart",cartRouter)
app.use("/api/order",orderRouter)

app.get("/", (req, res) => {
    res.send("API Working");    
})

app.listen(port, () => {
    console.log(`server running on port: ${port}`);
})


