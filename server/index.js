import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({ limit:'50mb' }));

app.get('/', (req,res)=>{
    res.json({ message:"hello there!" });
})

const server=async()=>{
    try {
        connectDB(process.env.URl);
    } catch (error) {
        console.log(error);
    }
}