import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import connectDB from "./mongodb/connect.js";
import userRouter from "./routes/user.routes.js";
import propertyRouter from "./routes/property.routes.js";

dotenv.config();

const app=express();
app.use(cors());
app.use(express.json({ limit:'50mb' }));

app.get('/', (req,res)=>{
    res.json({ message:"hello there!" });
})

app.use("/api/v1/users", userRouter);
app.use("/api/v1/properties", propertyRouter);

const server=async()=>{
    try {
        connectDB(process.env.URl);
        app.listen(process.env.PORT,()=>
            console.log(`server started on port ${process.env.PORT}...`));
    } catch (error) {
        console.log(error);
    }
}

server();