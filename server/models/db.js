
const mongoose= require("mongoose")

const dbConnect=async()=>{
    const connectionStr="mongodb://127.0.0.1:27017/RESTful-API"
    try{
        const conn=await mongoose.connect(connectionStr)
        console.log(`Database connected to host: ${conn.connection.host}`);
        
    } catch (error) {
        console.log(`Error: ${error}`);
    }
}


module.exports = dbConnect;