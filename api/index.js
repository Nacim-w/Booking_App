import express from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoute from "./routes/auth.js";
import userRoute from "./routes/user.js";
import cookieParser from "cookie-parser";
import hotelRoute from "./routes/hotels.js";
import cors from "cors";
import roomRoute from "./routes/rooms.js";



const app = express();
dotenv.config();
const connect = async ()=>{
try{
    await mongoose.connect(process.env.MONGO);
    console.log("connected to mongoDB");
}
catch(error){
    throw error;
}
}

//middlewares
app.use(cors());
app.use(cookieParser());
app.use(express.json())
app.use("/api/auth",authRoute);
app.use("/api/users",userRoute);
app.use("/api/hotels",hotelRoute);
app.use("/api/rooms",roomRoute);




app.listen(8800,()=>
{
    connect();
    console.log("Connected to backend");
});
