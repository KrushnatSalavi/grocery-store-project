const Category = require("../models/Category");

// DELETE category
const deleteCategory = async (req, res) => {
  try {
    await Category.findByIdAndDelete(req.params.id);
    res.json({ message: "Category deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting category" });
  }
};

module.exports = {
  createCategory,
  getCategories,
  deleteCategory // ✅ export it
};