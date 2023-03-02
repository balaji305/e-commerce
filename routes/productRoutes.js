import express from "express";
import {
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  createProductById,
  createProductReview,
  getTopProducts,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.get("/top", getTopProducts);
router.route("/").get(getProducts).post(protect, admin, createProductById);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProductById);
router.route("/:id/reviews").post(protect, createProductReview);

export default router;
