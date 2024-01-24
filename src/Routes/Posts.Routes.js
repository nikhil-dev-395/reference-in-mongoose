import express from "express";
const router = express.Router();
import { CreatePost, getPost } from "../Controllers/Post.Controllers.js";
router.route("/createPost/:id").post(CreatePost);
router.route("/getPost/:id").get(getPost);
export { router as PostRouter };
