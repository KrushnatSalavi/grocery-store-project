const Product = require("../models/Product");

exports.getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().populate("category");
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
exports.createProduct = async (req, res) => {
  try {
    const { name, price, description, category, stock } = req.body;

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
    res.status(500).json({ error: error.message });
  }
};