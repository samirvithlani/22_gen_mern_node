const router = require('express').Router();
const productController = require('../controllers/ProductController');
const productMiddleware = require("../middlewar/ProductMiddleware")
const zodmiddlware = require("../middlewar/zodMiddleware")
const productValidationSchema = require("../util/ProductValidationSchema")

router.post("/product",zodmiddlware.validate(productValidationSchema),productController.createProduct)
router.get("/product",productController.getAllProducts)
router.put("/addcolor/:id",productController.addColorToProduct)
router.get("/product/color/:color",productController.getProductyByColorName)
router.put("/removecolor/:id",productController.removeColorFromProduct)
module.exports = router;
