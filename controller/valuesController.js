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


export const updateValues = async(req,res,next) =>{
    const {   
        title,
        image,
        description,
    } = req.body;
    const {id} = req.params;
    

    try {
    const values = await Values.findByIdAndUpdate(id,{
        title:title,
        image:image,
       description:description
    })    
       const savedValues = await values.save();
    if(!savedValues){
     return res.status(500).json({message:"error while saving"});
    }

    return res.status(200).json(savedValues)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allValues = async(req,res) =>{
    let values;
    try {
       values = await Values.find()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!values){
        return res.status(404).json({message:"noValues"})
    }
    return res.status(200).json(values);
}