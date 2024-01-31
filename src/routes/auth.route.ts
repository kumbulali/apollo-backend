import express from "express";
import authController from "../controllers/auth.controller";

const authRoute = express.Router();

authRoute.post('/login', authController.login);

authRoute.post('/register', authController.register);

export default authRoute;