const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductDetail,
  addProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/product.controller");

router.get("/", getAllProducts);
router.get("/:id", getProductDetail);
router.post("/", addProduct);
router.put("/:id", editProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
