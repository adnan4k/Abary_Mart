import {Banner} from '../model/Banner.js'



export const presentBanner = async(req,res) =>{
    return res.render('createBanner')
} 
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


export const updateBanner = async(req,res,next) =>{
    const {   
        title,
        image,
       description,
       buttonText
} = req.body;
    const {id} = req.params;
    

    try {
    const webBanners = await Banner.findByIdAndUpdate(id,{
        title:title,
        image:image,
        buttonText:buttonText,
        description:description
    })    
       const savedBanner = await webBanners.save();
    if(!savedBanner){
     return res.status(500).json({message:"error while saving"});
    }

    return res.status(200).json(savedBanner)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allBanner = async(req,res) =>{
    let banners;
    let myRoute = '/banner/present-banner'
    // return res.json({myRoute:'/banner/present-banner'})
    try {
       banners = await Banner.find()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!banners){
        return res.status(404).json({message:"noBanner"})
    }
    //    console.log(myRoute)
    return res.render('banner',{banners,
        title:"Banner",
    myRoute:'/banner/present-banner'});
}