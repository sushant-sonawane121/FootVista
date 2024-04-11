const Product = require("../models/productSchema");

// for inserting a product
exports.createProduct = async (req, res) => {
  try {
    const product = new Product(req.body);
    await product.save();

    res.status(201).json({ message: "Product created successfully" });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// for deleting a one product
exports.deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.deleteOne(req.body);
    if (deletedProduct.deletedCount === 1) {
      res.status(200).json({ message: "Product deleted successfully" });
    } else {
      res.status(404).json({ message: "Product not found" });
    }
  } catch (err) {
    console.error("Error deleting product:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// for geting all product form database
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};

// for updating a single product
//  created but not used anywhare
exports.getProducts = async (req, res) => {
  try {
    const updateProduct = await Product.updateOne(req.body);
  } catch (err) {
    console.error("Error fetching products:", err);
    res.status(500).json({ error: "Internal server error" });
  }
};
