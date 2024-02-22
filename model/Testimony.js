import mongoose from "mongoose";

const testimonySchema = new mongoose.Schema({
    name:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

export const Testimony = mongoose.model('Testimony', testimonySchema);

