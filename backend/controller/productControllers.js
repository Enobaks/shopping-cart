const Product = require("../models/Product");

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.send(products);
  } catch (error) {
    console.error(error);
    res.status(500).send("Server Error");
  }
};

const getProductById = async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      res.json(product);
    } catch (error) {
      console.error(error);
      res.status(500).json("Server Error", error );
    }
  };
  
module.exports = {
    getAllProducts,
    getProductById
}