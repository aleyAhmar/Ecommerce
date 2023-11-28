const express = require("express");
const router = express.Router();
const ProductController=require('../controller/productController');

router.post("/createProduct", ProductController.createProduct);
router.get("/getProducts", ProductController.getAllProducts);
router.delete("/deleteProduct", ProductController.deleteProduct);
router.patch("/updateProduct", ProductController.updateProduct);
// router.get("/:id", ProductController.getProductById);
module.exports=router; 