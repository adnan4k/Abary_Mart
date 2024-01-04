import mongoose from "mongoose";

const bannerSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
     buttonText:{
        type:Number
    }
})

const Banner = mongoose.model('Banner', bannerSchema);

module.exports = Banner;