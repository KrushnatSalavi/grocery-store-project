const express = require("express");
const router = express.Router();

const { protect } = require("../middleware/authMiddleware");
const upload = require("../middleware/uploadMiddleware");

const {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct
} = require("../controllers/productControllers");

// CREATE
router.post("/", upload.single("image"), createProduct);
// GET ALL + FILTER
router.get("/", getAllProducts);

// GET ONE
router.get("/:id", getProductById);

// UPDATE
router.put("/:id", protect, upload.single("image"), updateProduct);

// DELETE
router.delete("/:id", protect, deleteProduct);

router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id).populate("category");

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;