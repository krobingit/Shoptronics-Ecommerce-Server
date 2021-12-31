import express from "express";
const router = express.Router();
import { helper } from "../helper/helper.users.js";
import { AuthorizeUser, verifyToken,AuthorizeAdmin } from "../helper/authorization.middleware.js";

router
 .route("/")
 .get(AuthorizeAdmin, helper.getAllUsers);



router
 .route("/:userid")
 .get(AuthorizeAdmin, helper.getUser)
 .put(AuthorizeAdmin, helper.updateUser)
 .delete(AuthorizeAdmin, helper.deleteUser);

export const usersRoute = router;