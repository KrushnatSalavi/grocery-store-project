const Product = require("../models/Product");
const mongoose = require("mongoose");

// ✅ GET ALL PRODUCTS (with category filter + debug)
const getAllProducts = async (req, res) => {
  try {
    const filter = {};

    console.log("Query category:", req.query.category);

    if (req.query.category) {
      console.log("Filtering by:", req.query.category);

      filter.category = new mongoose.Types.ObjectId(req.query.category);
    }

    const products = await Product.find(filter).populate("category");

    console.log("Products found:", products.length);

    res.json(products);

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ message: error.message });
  }
};

// ✅ GET PRODUCT BY ID
const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ CREATE PRODUCT
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;

    console.log("Incoming category:", category);

    const product = new Product({
      name,
      price,
      description,
      category,
      stock,
      image: req.file ? req.file.filename : null
    });

    await product.save();

    res.status(201).json({
      success: true,
      message: "Product Added Successfully",
      product
    });

  } catch (error) {
    console.log("ERROR:", error);
    res.status(500).json({ error: error.message });
  }
};

// ✅ UPDATE PRODUCT
const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.category = req.body.category || product.category;
    product.stock = req.body.stock ?? product.stock;

    if (req.file) {
      product.image = req.file.filename;
    }

    const updatedProduct = await product.save();

    res.json(updatedProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ DELETE PRODUCT
const deleteProduct = async (req, res) => {
  try {
    await Product.findByIdAndDelete(req.params.id);
    res.json({ message: "Product deleted" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// ✅ EXPORT
module.exports = {
  getAllProducts,
  getProductById,
  createProduct,
  updateProduct,
  deleteProduct
};