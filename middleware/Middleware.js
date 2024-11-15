import User from "../models/User.js";

export const isAdmin= async(req,res,next)=>{
    try {
        const {email} = req.body;

        const userInfo = await User.findOne({email})

        if(userInfo && userInfo.role=="Admin")
        {
            next();
            //proceed
        }
        else{
            res.status(403).json({
                message:"Access denied, Only Admin can access this."
            })
        }
    } catch (error) {
        res.status(500).json({
            message:"Internal Server Error!"
        })
    }
}