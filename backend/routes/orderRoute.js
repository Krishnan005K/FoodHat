import { placeOrder } from "../controllers/orderController.js";
import express from 'express'
import authMiddleware from "../middleware/auth.js";

const orderRouter = express.Router();

orderRouter.post('/place',authMiddleware,placeOrder)


export default orderRouter;