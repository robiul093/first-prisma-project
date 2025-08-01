import express from "express";
import { postController } from "./post.controller";

const router = express.Router();

router.post('/post', postController.createPost);
router.get('/post', postController.getAllPost);


export const PostRoutes = router;