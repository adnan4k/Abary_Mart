import { Message } from "../model/Message.js";
import nodemailer from "nodemailer"

async function sendEmailToAdminForContact(subject,message, email) {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "fayomuhe5@gmail.com",
            pass: "vypd cqxp eqqm krsg",
            port: 465,
            secure: true,
        }
    });

    let info = await transporter.sendMail({
        from: email,
        to: "fayomuhe5@gmail.com",
        subject:subject,
        text: `a New message has arrived: ${JSON.stringify(message)}`,
        html: `<b>a New message has arrived:</b> <pre>${JSON.stringify(message, null, 2)}</pre>`,
    });
}
export const createMessage = async (req,res)=>{
  
    const messages = req.body;
    
    try {
       
        const message = new Message(messages)
        const savedmessage= await message.save();

        if (!savedmessage) {
            return res.status(400).json({ message: "cannot be created " });
          }
         await sendEmailToAdminForContact(savedmessage.subject,savedmessage,savedmessage.email)
          res.redirect('/');
      

    } catch (error) {
        console.log(error)
    }
    
}

export const deleteMessage = async(req,res) =>{
    const id = req.params.id 
    try {
        const deleted = await Message.findByIdAndDelete(id);
        if(!deleted){
            return res.json({message:"message  doesn't exist"})
        }
            
        res.redirect('/message/view-message')
    } catch (error) {
        return res.status(500).json(error)
    }
}

export const allMessage =async(req,res) =>{
    let message;
    try {
       message = await Message.find()
    } catch (error) {
        return res.status(500).json({message:"server error"})
    }
    if(!message){
        return res.status(404).json({message:"nomessage"})
    }
    return res.render('message',{message,title:"Message",myRoute:"/message/present-message"});
}