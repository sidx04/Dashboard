import User from "../mongodb/models/User.js"
import Property from "../mongodb/models/Property.js"
import mongoose from "mongoose";
import * as dotenv from "dotenv";
import { v2 as cloudinary } from "cloudinary";
import { StatusCodes } from "http-status-codes";

dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const getAllProperties=async(req,res)=>{

};

const getPropertyDetail=async(req,res)=>{

};

const createProperty=async(req,res)=>{
    try {
        const {
            title, 
            description, 
            propertyType, 
            location, 
            price, 
            photo, 
            email
        } = req.body;

        const session=await mongoose.startSession();
        session.startTransaction();

        const user= await User.findOne({email}).session(session);

        if (!user){
            throw new Error("user not found...");
        }

        const photoUrl= await cloudinary.uploader.upload(photo);

        const newProperty= await Property.create({
            title, 
            description, 
            propertyType, 
            location, 
            price, 
            location,
            photo: photoUrl.url,
            creator: user._id 
        })

        user.allProperties.push(newProperty._id);
        await user.save({session});

        await session.commitTransaction();

        res.status(StatusCodes.OK).json({ message: 'property created successfully...' });
    }
    catch (error) {
        res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ message: error.message});
    }
};

const updateProperty=async(req,res)=>{

};

const deleteProperty=async(req,res)=>{

};

export {
    createProperty,
    deleteProperty,
    getAllProperties,
    getPropertyDetail,
    updateProperty,
};