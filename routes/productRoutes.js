const express = require("express");
const {
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  createProductById,
  createProductReview,
  getTopProducts,
} = require("../controllers/productController");
const { protect, admin } = require("../middleware/authMiddleWare");

const router = express.Router();

router.get("/top", getTopProducts);
router.route("/").get(getProducts).post(protect, admin, createProductById);
router
  .route("/:id")
  .get(getProductById)
  .delete(protect, admin, deleteProductById)
  .put(protect, admin, updateProductById);
router.route("/:id/reviews").post(protect, createProductReview);

module.exports = router;
