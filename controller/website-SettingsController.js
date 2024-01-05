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