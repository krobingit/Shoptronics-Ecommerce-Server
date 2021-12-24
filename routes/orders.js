import express from "express";
import { AuthorizeUser } from "../helper/authorization.middleware.js";
const router = express.Router();
import { helper } from "../helper/helper.orders.js";

router
 .route("/")
 .post(AuthorizeUser,helper.postOrder)

export const ordersRoute = router;