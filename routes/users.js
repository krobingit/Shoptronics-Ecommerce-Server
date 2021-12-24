import express from "express";
const router = express.Router();
import { helper } from "../helper/helper.users.js";
import { AuthorizeUser, verifyToken,AuthorizeAdmin } from "../helper/authorization.middleware.js";

router
 .route("/:userid")
 .put(AuthorizeUser,helper.updateUser)

export const usersRoute = router;