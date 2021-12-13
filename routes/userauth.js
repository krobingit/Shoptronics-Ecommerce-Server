import express from 'express';
import { helper } from '../helper/helper.userauth.js';

const router = express.Router();

//login route
router
 .route("/login")
 .post(helper.login);

//register route
router
 .route("/register")
 .post(helper.register);

export const userauthRoute = router;
