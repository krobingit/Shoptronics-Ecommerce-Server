import express from "express";
const router = express.Router();
import { helper } from "../helper/helper.orders.js";

router
 .route("/")
 .post(helper.postOrder)

export const ordersRoute = router;