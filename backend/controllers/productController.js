import Product from "../models/ProductModel.js";
import asyncHandler from "express-async-handler";

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

const deleteProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    await product.remove();
    res.json({ message: "Product Removed" });
  } else {
    res.status(404);
    throw new Error({ message: "Product Not Found" });
  }
});

const updateProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);

  if (product) {
    product.name = req.body.name || product.name;
    product.email = req.body.email || product.email;
    product.price = req.body.price || product.price;
    product.description = req.body.price || product.description;
    product.image = req.body.image || product.image;
    product.brand = req.body.brand || product.brand;
    product.category = req.body.category || product.category;
    product.countInStock = req.body.countInStock || product.countInStock;
    const updateProduct = await product.save();

    res.json({
      _id: updateProduct._id,
      name: updateProduct.name,
      price: updateProduct.price,
      description: updateProduct.description,
      image: updateProduct.image,
      brand: updateProduct.brand,
      category: updateProduct.category,
      countInStock: updateProduct.countInStock,
    });
  } else {
    res.status(404);
    throw new Error("Product Not Found");
  }
});

const createProductById = asyncHandler(async (req, res) => {
  const product = new Product({
    name: req.body.name,
    price: req.body.price,
    user: req.user._id,
    image: req.body.image,
    brand: req.body.brand,
    category: req.body.category,
    countInStock: req.body.countInStock,
    numReviews: req.body.numReviews,
    description: req.body.description,
  });

  const createdProduct = await product.save();
  res.status(201).json(createdProduct);
});

export {
  getProducts,
  getProductById,
  deleteProductById,
  updateProductById,
  createProductById,
};
