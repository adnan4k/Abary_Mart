import mongoose from "mongoose";

const webSettingSchema = new mongoose.Schema({
    title:{
        type:String
    },
    description:{
        type:String
    },
    logo:{
        type:String
    },
     favicon:{
        type:Number
    },
    email:{
        type:true
    },
    number:{
        type:true
    },
    location:{
        type:true
    },
    address:{
        type:true
    },
})

const webSetting = mongoose.model('webSetting', webSettingSchema);

module.exports = webSetting;