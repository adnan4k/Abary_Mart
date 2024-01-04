import mongoose from "mongoose";

const productSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
     price:{
        type:Number
    },
    featured:{
        type:true
    }
})

const Product = mongoose.model('Product', productSchema);

module.exports = Product;