import express from "express"
import {connectDB} from './data/database.js'
import bodyParser from "body-parser";
import cors from 'cors'
import userRouter from "./routes/user.js";


const app =express();
connectDB();

app.use(bodyParser.json());
app.use(express.json());

app.use(cors());

app.get("/",(req,res)=>{
    res.send("hii working")
})
app.use( userRouter);

app.listen(5000,()=>{
    console.log(`server is working on port 5000`)
})