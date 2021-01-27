import express from "express";
import {
  getPosts,
  createPost,
  updatePost,
  deletePost,
  likePost,
} from "../controllers/posts.js";

const router = express.Router();

// localhost:5000/posts
router.get("/", getPosts);
router.post("/", createPost);
// localhost:5000/posts/:id
router.patch("/:id", updatePost);
router.delete("/:id", deletePost);
// like function
router.patch("/:id/likePost", likePost);

export default router;
