import Product from "../model/Product"
export const createProduct = async (req,res)=>{
  
    const product = {
        title,
        image,
        description,
        price,
        featured
    }

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
        
    }
}