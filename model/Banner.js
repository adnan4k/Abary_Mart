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
        type:String
    }
})

export const Banner = mongoose.model('Banner', bannerSchema);

