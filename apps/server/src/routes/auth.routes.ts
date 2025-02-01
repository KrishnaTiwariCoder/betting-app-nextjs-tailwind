import express, { Router } from "express";
import { accountExists, authenticate } from "../middlewares/index";
import { login, profile, register, update } from "../controllers/auth";

const router: Router = express.Router();

router.post("/register", register);

router.post("/login", login);

router.get("/profile", authenticate, profile);

router.post("/update", authenticate, accountExists, update);

export default router;
