import {Values} from "../model/Values.js"
export const createValues = async (req,res)=>{
  
    const {
        title,
        image,
        description,
    } = req.body;

    try {
        const value = new Values ({
            title:title,
            image:image,
            description:description,

        })
        const savedValues = await value.save();

        if (!savedValues) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({ savedValues });
      

    } catch (error) {
        console.log(error)
    }
}