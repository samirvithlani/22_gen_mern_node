const productSchema = require("../models/ProductModel");

const createProduct = async (req, res) => {
  try {
    const savedProduct = await productSchema.create(req.body);
    res.status(201).json({
      message: "Product created successfully",
      data: savedProduct,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const addColorToProduct = async (req, res) => {
  const productId = req.params.id;
  const color = req.body.color;

  try {
    const updatedProduct = await productSchema.findByIdAndUpdate(productId, {
      $push: {
        availableColors: color,
      },
    });
    res.status(200).json({
      message: "Color added to product successfully",
      data: updatedProduct,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getAllProducts = async (req, res) => {
  try {
    const products = await productSchema.find();
    res.status(200).json({
      message: "All products fetched successfully",
      data: products,
    });
  } catch (err) {
    res.status(500).json({ error: err });
  }
};

const getProductyByColorName = async (req, res) => {
  const color = req.params.color;
  const products = await productSchema.find({
    availableColors: color,
  });
  if (products && products.length > 0) {
    res.status(200).json({
      message: "All products fetched successfully",
      data: products,
    });
  } else {
    res.status(404).json({
      message: "No products found with this color",
    });
  }
};
module.exports = {
  createProduct,
  addColorToProduct,
  getAllProducts,
    getProductyByColorName,
};
