import express from "express";
import { verification } from "../helper/paymentverify.js";
import { razorpay } from "../helper/razorpayment.js";
const router = express.Router();

router
 .route("/")
 .post(razorpay)

router
 .route("/verification")
 .post(verification)

export const paymentRoute = router;
