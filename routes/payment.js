import express from "express";
import { razorpay } from "../helper/razorpayment.js";
const router = express.Router();

router
 .route("/")
 .post(razorpay)

export const paymentRoute = router;
