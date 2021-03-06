import express from "express";
import { razorpay,verification } from "../helper/razorpayment.js";
const router = express.Router();

router
 .route("/")
 .post(razorpay)

router
 .route("/capture/:paymentId")
 .post(verification)

export const paymentRoute = router;
