const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router.post('/products', productController.createProduct);
router.delete('/delete',productController.deleteProduct);
router.get('/allProdcuts',productController.getProducts);


module.exports = router;
