import {Values} from "../model/Values.js"

export const deleteValues = async(req,res) =>{
    const id = req.params.id 
         console.log("id",id)
    try {
        const deleted = await Values.findByIdAndDelete(id);
        if(!deleted){
            return res.json({message:"items  doesn't exist"})
        }
            
        res.redirect('/values/view-values')
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const update =  async (req, res) => {
    try {
        const id = req.params.id;
        const value = await Values.findById(id);
        res.render('createValue', { value});
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};
export const presentValues = async(req,res) =>{
    return res.render('createValue',{Values:undefined});
}
export const createValues = async (req,res)=>{
  
    const {
        title,
        image,
        description,
    } = req.body;
    
    try {
        const updateData = {
            title: title,
            description: description,
           
        };
        if (req.file) {
            updateData.image = req.file.filename;
        }
        const value = new Values (updateData)
        const savedValues = await value.save();

        if (!savedValues) {
            return res.status(400).json({ message: "cannot be created " });
          }
          res.redirect('/values/view-values');
      

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

    res.redirect('/values/view-values');
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
    return res.render('value',{values,title:"Values",myRoute:"/values/present-values"});
}