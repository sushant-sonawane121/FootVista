const express = require("express");
const router = express.Router();
const productController = require("../controllers/productController");
const userController = require("../controllers/userController");

// Route for adding a product
router.post("/addProduct", productController.addProduct);

// Route for retrieving all products
router.get("/getAllProducts", productController.getAllProducts);

// Route for deleting a product by ID
router.delete("/deleteProduct/:productId", productController.deleteProduct);

// Route for user registration
router.post("/userRegister", userController.registerUser);

// Route for user login
router.post("/userLogin", userController.loginUser);

module.exports = router;
