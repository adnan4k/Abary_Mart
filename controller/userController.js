import { User } from "../model/User.js";


export const addUser = async(req,res) =>{
    const  {name,email,password} = req.body;

    try {
        const user = new User ({
            name:name,
            email:email,
            password:password
        })
        const savedUser = await user.save();

        if(!savedUser){
         return res.status(500).json({message:"error while saving"});

        }

        return res.status(200).json(savedUser)
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}