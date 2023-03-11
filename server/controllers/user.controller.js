import User from '../mongodb/models/User.js'
import { StatusCodes } from "http-status-codes";

const getAllUsers=async(req,res)=>{
    
};

const createUser=async(req,res)=>{
    try {
        const {name, email, avatar}=req.body;
        
        const userExists=await User.findOne({email});
        if(userExists){
            return res.status(StatusCodes.OK).json(userExists);
    
        }
        const newUser=await User.create({
            name,
            email,
            avatar
        });
        res.status(StatusCodes.OK).json(newUser);   
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message:error.message });    
    }
};

const getUserInfoByID=async(req,res)=>{

};

export {
    getAllUsers,
    createUser,
    getUserInfoByID
};