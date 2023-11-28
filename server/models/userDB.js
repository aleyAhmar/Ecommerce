const mongoose = require("mongoose");

const userSchema=mongoose.Schema({
    //_id:mongoose.Schema.Types.ObjectId,
    name:{type:String, required:true},
    email:{type:String, required:true},
    password:{type:String, required:true},
    //productImage:{type:String, required:true}
}, {timestamps: true});
// userSchema.methods.isValidPassword = function(password) {
//     return bcrypt.compareSync(password, this.password);
// }