import express from "express";
import {
  getFeedPosts,
  getUserPosts,
  likePost,
  replyToPost,
} from "../controllers/posts.js";
import { verifyToken } from "../middleware/is-auth.js";

const router = express.Router();

router.get("/", verifyToken, getFeedPosts);
router.get("/:userId/posts", verifyToken, getUserPosts);
router.patch("/:id/like", verifyToken, likePost);
router.put("/:id/reply", verifyToken, replyToPost);

export default router;
