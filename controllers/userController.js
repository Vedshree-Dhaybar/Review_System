import User from "../models/User.js";

export const createAdmin = async (req,res)=>{
    try {
        const{name,email,password}=req.body;   //object deconstructing
    
        const user= new User({
            name,        //name:name,
            email,            
            password,           
            role:"Admin"
        })
    
        const savedUser= await user.save();
    
        res.json({
            savedUser,
            message:"User created Successfully"
        })

    } catch (error) {
         res.json({
            error:"Error occured"
        })
        console.log(error)
    }
};
export const createAlumni = async (req,res)=>{
    try {
        const{name,email,password}=req.body;   //object deconstructing
    
        const user= new User({
            name,        //name:name,
            email,            
            password,           
            role:"Alumni"
        })
    
        const savedUser= await user.save();
    
        res.json({
            savedUser,
            message:"User created Successfully"
        })

    } catch (error) {
         res.json({
            error:"Error occured"
        })
    }
};
export const createStudent = async (req,res)=>{
    try {
        const{name,email,password}=req.body;   //object deconstructing
    
        const user= new User({
            name,        //name:name,
            email,            
            password,           
            role:"Student"
        })
    
        const savedUser= await user.save();
    
        res.json({
            savedUser,
            message:"User created Successfully"
        })

    } catch (error) {
         res.json({
            error:"Error occured"
        })
    }
};

export const getAllUsers= async (req,res)=>{
    try {
      const getUsers = await User.find()
      res.json({
        getUsers
      })
    } catch (error) {
        res.json({
            error:"Cannot fetch data"
        })
        console.log(error)
    }
}