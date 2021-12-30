import express from "express";
const router = express.Router();
import { helper } from "../helper/helper.users.js";
import { AuthorizeUser, verifyToken,AuthorizeAdmin } from "../helper/authorization.middleware.js";

router
 .route("/")
 .get(AuthorizeAdmin, helper.getAllUsers);



router
 .route("/:userid")
 .get(AuthorizeUser, helper.getUser)
 .put(AuthorizeUser, helper.updateUser)
 .delete(AuthorizeUser,helper.deleteUser)

export const usersRoute = router;