import {Product} from "../model/Product.js"
export const createProduct = async (req,res)=>{
  
    const {
        title,
        image,
        description,
        price,
        featured
    } = req.body;

    try {
        const product = new Product ({
            title:title,
            image:image,
            description:description,
            price:price,
            featured:featured

        })
        const savedProduct = await product.save();

        if (!savedProduct) {
            return res.status(400).json({ message: "cannot be created " });
          }
          return res.status(201).json({ savedProduct });
      

    } catch (error) {
        console.log(error)
    }
}

export const updateProduct = async(req,res,next) =>{
    const { 
          
        title,
        image,
        description,
    } = req.body;
    const {id} = req.params;
    

    try {
    const product = await Product.findByIdAndUpdate(id,{
        title:title,
        image:image,
       description:description
    })    
       const savedProduct = await product.save();
    if(!savedProduct){
     return res.status(500).json({message:"error while saving"});
    }

    return res.status(200).json(savedProduct)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}