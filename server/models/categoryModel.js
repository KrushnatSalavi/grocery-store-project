const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    unique: true,
  },
});

categorySchema.pre("save", function (next) {
  this.slug = this.name
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");

  next();
});

module.exports = mongoose.model("Category", categorySchema);