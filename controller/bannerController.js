import {Banner} from '../model/Banner.js'
export const createBanner = async (req,res)=>{
  
    const {
        title,
        image,
        description,
        buttonText
        } = req.body;

    try {
        const banner = new Banner ({
            title:title,
            image:image,
            description:description,
            buttonText:buttonText
        })
        const savedBanner = await banner.save();

        if (!savedBanner) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({ savedBanner });
      

    } catch (error) {
        console.log(error)
    }
}