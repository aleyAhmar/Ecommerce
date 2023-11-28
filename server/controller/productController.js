const Product = require("../models/productDB");

// Creating a Product

const createProduct = async (req, res) => {
    try {
        console.log(req.body)
        const { name, price, productImage } = req.body;
        const product = new Product({
            name: name,
            price: price,
            productImage: productImage
        });
        const result = await product.save();
        return res.status(201).json({
            message: "Product Created Successfully",
            product: result
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error Occured",
            error: error
        });
    }
};

// Getting All Products
const getAllProducts = async (req, res) => {
    try {
        const result = await Product.find();
        res.status(200).json({
            message: "All Products",
            products: result
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            message: "Error Occured",
            error: error
        });
    }
};

// Deleteing Products
const deleteProduct = async (req, res) => {
    try {
        
        const productName=req.params.name;
        const product= await Product.findOne(productName);
        if(!product){
            console.log("product not found");
        }

        const productId = product.id;
        const result = await Product.findByIdAndUpdate(productId);
        if (result) {
            return res.status(200).json({
                message: "Product deleted successfully"
            });
        } else {
            return res.status(404).json({
                message: "Product not found"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error occurred",
            error: error
        });
    }
};

// Updating Products
const updateProduct = async (req, res) => {
    try {
        const productName=req.params.name;
        const product=await Product.findOne(productName);
        if(!product){
            console.log("product not found");
        }
        const productId = product.id;
        const { name, price, productImage } = req.body;
        const updatedProduct = await Product.findByIdAndUpdate(productId, {
            name: name,
            price: price,
            productImage: productImage
        }, { new: true });
        if (updatedProduct) {
            return res.status(200).json({
                message: "Product updated successfully",
                product: updatedProduct
            });
        } else {
            return res.status(404).json({
                message: "Product not found"
            });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            message: "Error occurred",
            error: error
        });
    }
};


module.exports = { createProduct, getAllProducts, deleteProduct, updateProduct }