import { webSetting } from "../model/Website-settings.js";
export const createwebsiteSetting = async (req,res)=>{
  
    const {
        title,
        image,
        logo,
        favicon,
        email,
        phone,
        location,
        address
    } = req.body;

    try {
        const websiteSetting = new webSetting ({
        title:title,
        image:image,
        logo:logo,
        favicon:favicon,
        email:email,
        phone:phone,
        location:location,
        address:address

        })
        const savedwebsiteSetting = await websiteSetting.save();

        if (!savedwebsiteSetting) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({ savedwebsiteSetting });
      

    } catch (error) {
        console.log(error)
    }
}

// export const updateSetting = async (req,res) =>{

// } 
export const updateSetting = async(req,res,next) =>{
    const {   
        title,
        image,
        logo,
        favicon,
        email,
        phone,
        location,
        address} = req.body;
    const {id} = req.params;
    

    try {
    const webSettings = await webSetting.findByIdAndUpdate(id,{
        title:title,
        image:image,
        logo:logo,
        favicon:favicon,
        phone:phone,
        location:location,
        address:address,
        email:email
    })    
       const savedSetting = await webSettings.save();
    if(!savedSetting){
     return res.status(500).json({message:"error while saving"});
    }

    return res.status(200).json(savedSetting)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}