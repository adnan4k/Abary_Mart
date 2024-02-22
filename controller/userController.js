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
         return res.redirect('/user/signup');

        }

        return res.redirect('/product/view-product')
    } catch (error) {
        return res.status(500).json({message:error.message})
    }
}

export const viewLogin = async(req,res) =>{
    return res.render('login',{title:"Login",myRoute:'/user/login'});
}
export const signup = async(req,res) =>{
    return res.render('signup',{title:"Signup",myRoute:'/user/singup'});
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

             passwordMatch =  bcrypt.compare(password, user.password);
        }

        if (passwordMatch) {
            req.session.userId = user.id;
            
            // return res.render(200).json({message:"successfull login",userId:user.id})
            return  res.redirect('/product/view-product');

        } else {
           return res.render('login',{failru:"Invalid credentials",
           });
        }
   
        
}