import express from "express";
import { AuthorizeAdmin } from "../helper/authorization.middleware.js";
import { helper } from "../helper/helper.products.js";
const router = express.Router();

//list all products
router
 .route("/")
 .get(helper.getAllProducts);

//list specific product
router
 .route("/:id")
 .get(helper.getProductById)
 .delete(AuthorizeAdmin, helper.deleteProductById);
export const productRoute = router;
