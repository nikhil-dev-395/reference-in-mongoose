import express from "express";
import { CreateUser } from "../Controllers/User.Controllers.js";
const router = express.Router();

router.route("/createUser").post(CreateUser);

export { router as UserRouter };
