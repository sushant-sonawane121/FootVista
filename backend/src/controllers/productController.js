const Product = require("../models/productSchema");

// Controller for adding a product
const addProduct = async (req, res) => {
  try {
    // Extract product data from request body
    const {
      name,
      brand,
      category,
      description,
      price,
      color,
      size,
      images,
      rating,
      quantity,
    } = req.body;

    // Create a new product instance
    const newProduct = new Product({
      name,
      brand,
      category,
      description,
      price,
      color,
      size,
      images,
      rating,
      quantity,
    });

    // Save the product to the database
    await newProduct.save();

    res
      .status(201)
      .json({ message: "Product added successfully", product: newProduct });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to add product", error: error.message });
  }
};
// Controller for retrieving all products
const getAllProducts = async (req, res) => {
  try {
    // Fetch all products from the database
    const products = await Product.find();

    // If there are no products, return a message
    if (!products || products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    // Return the products
    res.status(200).json({ products });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch products", error: error.message });
  }
};

// Controller for deleting a particular product
const deleteProduct = async (req, res) => {
  try {
    // Extract product ID from request parameters
    const productId = req.params.productId;

    // Check if the product exists
    const product = await Product.findById(productId);

    // If product doesn't exist, return an error message
    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Delete the product
    await Product.findByIdAndDelete(productId);

    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to delete product", error: error.message });
  }
};



module.exports = { addProduct, getAllProducts, deleteProduct };
