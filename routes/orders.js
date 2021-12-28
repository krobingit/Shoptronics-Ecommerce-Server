import express from "express";
import { AuthorizeAdmin, AuthorizeUser, verifyToken } from "../helper/authorization.middleware.js";
const router = express.Router();
import { helper } from "../helper/helper.orders.js";

router
 .route("/")
 .post(verifyToken, helper.postOrder) //create a new order
 .get(AuthorizeAdmin, helper.getAllOrders); //to get all orders for admin


//get a specific user their orders
router
 .route("/:userid")
 .get(AuthorizeUser, helper.getOrder);

export const ordersRoute = router;