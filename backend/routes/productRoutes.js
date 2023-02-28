import express from "express";
import {
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  createProductById,
} from "../controllers/productController.js";
import { protect, admin } from "../middleware/authMiddleWare.js";

const router = express.Router();

router.route("/").get(getProducts).post(protect, admin, createProductById);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProductById);

export default router;
