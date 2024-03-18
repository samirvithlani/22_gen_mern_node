const router = require('express').Router();
const productController = require('../controllers/ProductController');
router.post("/product",productController.createProduct)
router.get("/product",productController.getAllProducts)
router.put("/addcolor/:id",productController.addColorToProduct)
router.get("/product/color/:color",productController.getProductyByColorName)
module.exports = router;
