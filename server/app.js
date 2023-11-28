const express= require('express');
const bp=require("body-parser");
const app=express();
const dbConnect=require("./models/db")
const PORT= process.env.PORT || 3000;
const product_routes=require("./routes/productRouter");
app.use(bp.json());

app.get('/',(req,res)=>{
    res.send('Hello World');
}) // This will be used by default...

// Middleware To get Routes
dbConnect();
app.use("/api", product_routes); // This will be used after calling /api/products
dbConnect
const start=()=>{
    try {
        app.listen(PORT,()=>{
            console.log(`Server is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

start();