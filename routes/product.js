import express from "express";
import { AuthorizeAdmin } from "../helper/authorization.middleware.js";
import { helper } from "../helper/helper.products.js";
const router = express.Router();

//list all products/get and create product
router
 .route("/")
 .get(helper.getAllProducts)
 .post(AuthorizeAdmin, helper.CreateProduct);

//list specific product/crud operations
router
 .route("/:id")
 .get(helper.getProductById)
 .put(AuthorizeAdmin,helper.EditProductById)
 .delete(AuthorizeAdmin, helper.deleteProductById);
export const productRoute = router;
