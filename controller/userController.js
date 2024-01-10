import { User } from "../model/User.js";
import bcrypt from "bcrypt"


export const addUser = async(req,res) =>{
    const  {name,email,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt);

    try {
        const user = new User ({
            name:name,
            email:email,
            password:hashedPassword
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

export const viewLogin = async(req,res) =>{
    return res.render('login');
}
export const login = async(req,res) =>{
    
        const { email, password } = req.body;
        // return res.status(400).json({email,password})
        if(!email && !password){
            return res.status(400).json({message:"give credentials"})
        }
        const user = await User.findOne({email});
        let passwordMatch
        if(user){

             passwordMatch = await bcrypt.compare(password, user.password);
        }

        if (passwordMatch) {
            req.session.userId = user.id;
            
            // return res.render(200).json({message:"successfull login",userId:user.id})
            return res.render('login',{userId:user.id});

        } else {
           return res.render('login',{failru:"Invalid credentials"});
        }
   
    
}