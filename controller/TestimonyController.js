import {Testimony} from "../model/Testimony.js"

export const deleteTestimony = async(req,res) =>{
    const id = req.params.id 
    try {
        const deleted = await Testimony.findByIdAndDelete(id);
        if(!deleted){
            return res.json({message:"items  doesn't exist"})
        }
            
        res.redirect('/testimony/view-testimony')
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const update =  async (req, res) => {
    try {
        const id = req.params.id;
        const testimony = await Testimony.findById(id);
        res.render('createTestimony', { testimony});
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};
export const presentTestimony = async(req,res) =>{
    return res.render('createTestimony',{testimony:undefined});
}
export const createTestimony = async (req,res)=>{
  
    const {
        name,
        image,
        description,
    } = req.body;
    
    try {
        const updateData = {
            name: name,
            description: description,
           
        };
        if (req.file) {
            updateData.image = req.file.filename;
        }
        const testimony = new Testimony (updateData)
        const savedTestimony = await testimony.save();

        if (!savedTestimony) {
            return res.status(400).json({ message: "cannot be created " });
          }
          res.redirect('/testimony/view-testimony');
      

    } catch (error) {
        console.log(error)
    }
}


export const updateTestimony = async(req,res,next) =>{
    const {   
        name,
        image,
        description,
    } = req.body;
    const {id} = req.params;
    

    try {
        const updateData = {
            name: name,
            description: description,
           
        };
        if (req.file) {
            updateData.image = req.file.filename;
        }
    const testimony = await Testimony.findByIdAndUpdate(id,updateData)    
       const savedTestimony = await testimony.save();
    if(!savedTestimony){
     return res.status(500).json({message:"error while saving"});
    }

    res.redirect('/testimony/view-testimony');
} catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allTestimony = async(req,res) =>{
    let testimonys;
    try {
       testimonys = await Testimony.find()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!testimonys){
        return res.status(404).json({message:"noTestimony"})
    }
    return res.render('testimony',{testimonys,title:"Testimony",myRoute:"/testimony/present-testimony"});
}