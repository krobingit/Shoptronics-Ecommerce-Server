import express from "express";
import { verifyToken } from "../helper/authorization.middleware.js";
const router = express.Router();
import { helper } from "../helper/helper.orders.js";

router
 .route("/")
 .post(verifyToken,helper.postOrder)

export const ordersRoute = router;