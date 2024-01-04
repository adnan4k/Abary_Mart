import mongoose from "mongoose";

const valuesSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    }
})

export const Values = mongoose.model('Values', valuesSchema);

