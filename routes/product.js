import express from "express";
import { helper } from "../helper/helper.products.js";
const router = express.Router();

router
 .route("/")
 .get(helper.getAllProducts)

router
 .route("/:id")
 .get(helper.getProductById)

export const productRoute = router;
