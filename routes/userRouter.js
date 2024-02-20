import express from "express";
import { login, logout, register, getUser } from "../controllers/userController.js";
import { isAuthorized } from "../middlewares/auth.js"

const router = express.Router();

router.post("/register", register)
router.post("/login", login);
router.post("/logout", isAuthorized, logout);
router.post("/getUser", isAuthorized, getUser);

export default router;