import {Product} from "../model/Product.js"



export const deleteProduct = async(req,res) =>{
    const id = req.params.id 
         console.log("id",id)
    try {
        const found = await Product.findById(id)
        // console.log(found)
        const deleted = await Product.findByIdAndDelete(id);
        // console.log(deleted)
        if(!deleted){
            return res.json({message:"items  doesn't exist"})
        }
            
        res.redirect('/product/view-product')
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const update =  async (req, res) => {
    try {
        const id = req.params.id;
        const product = await Product.findById(id);
        console.log(product);
        res.render('createProduct', { product });
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};
export const presentProduct = async(req,res) =>{
  
    return res.render('createProduct', {product:undefined} )
} 


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
          res.redirect('/product/view-product');
      

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

    res.redirect('/product/view-product');
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allProduct = async(req,res) =>{
    let Products;
    // return res.json({route:'/product/create-product'})
    try {
       Products = await Product.find()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!Products){
        return res.status(404).json({message:"noProduct"})
    }
    return res.render('product',{Products,
        title:"Product",
    myRoute:'/product/present-product'});
}