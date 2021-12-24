import express from "express";
import { AuthorizeUser, verifyToken } from "../helper/authorization.middleware.js";
const router = express.Router();
import { helper } from "../helper/helper.orders.js";

router
 .route("/")
 .post(verifyToken, helper.postOrder)

router
 .route("/:userid")
.get(AuthorizeUser,helper.getOrder)

export const ordersRoute = router;