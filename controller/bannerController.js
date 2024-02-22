import {Banner} from '../model/Banner.js'



export const presentBanner = async(req,res) =>{
    return res.render('createBanner', {n:88})
} 
export const createBanner = async (req,res)=>{

    const {
        title,
        image,
        description,
        buttonText
        } = req.body;

    try {
        const updateData = {
            title: title,
            description: description,
            buttonText:buttonText,
                };
        if (req.file) {
            updateData.image = req.file.filename;
        }
        const banner = new Banner (updateData)
        const savedBanner = await banner.save();

        if (!savedBanner) {
            return res.status(400).json({ message: "cannot be created " });
          }
          res.redirect('/banner/view-banner');
      

    } catch (error) {
        console.log(error)
    }
}

export const deleteBanner = async(req,res) =>{
    const id = req.params.id 
    try {
        const deleted = await Banner.findByIdAndDelete(id);
        if(!deleted){
            return res.json({message:"items is not doesn't exist"})
        }
            
        res.redirect('/banner/view-banner')
    } catch (error) {
        return res.status(500).json(error)
    }
}
export const update =  async (req, res) => {
    try {
        const id = req.params.id;
        const banner = await Banner.findById(id);
        res.render('createBanner', { banner});
    } catch (error) {
        res.status(500).send('Error: ' + error.message);
    }
};
export const updateBanner = async(req,res,next) =>{
    const {   
        title,  
        image,
       description,
       buttonText
} = req.body;
    const {id} = req.params;
    

    try {
        const updateData = {
            title: title,
            description: description,
            buttonText:buttonText,
                };
        if (req.file) {
            updateData.image = req.file.filename;
        }
    const webBanners = await Banner.findByIdAndUpdate(id,updateData)    
       const savedBanner = await webBanners.save();
    if(!savedBanner){
     return res.status(500).json({message:"error while saving"});
    }

    res.redirect('/banner/view-banner');
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const allBanner = async(req,res) =>{
    let banners;
    let myRoute = '/banner/present-banner'
    try {
       banners = await Banner.find()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!banners){
        return res.status(404).json({message:"noBanner"})
    }
    // return res.json(banners)
    return res.render('banner',{banners,
        title:"Banner",
    myRoute:'/banner/present-banner'});
}