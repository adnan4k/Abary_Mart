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
        type:Boolean
    }
})

export  const Product = mongoose.model('Product', productSchema);

 