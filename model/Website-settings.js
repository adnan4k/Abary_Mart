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
        type:String
    },
    email:{
        type:String
    },
    phone:{
        type:String
    },
    location:{
        type:String
    },
    address:{
        type:String
    },
})

export const webSetting = mongoose.model('webSetting', webSettingSchema);

