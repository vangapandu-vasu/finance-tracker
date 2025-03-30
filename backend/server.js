const express=require("express");
const port = 9000
const app=express();
const cors=require("cors");
const cookieParser = require("cookie-parser");
const db=require("./databse/financedata");
const  mongoose  = require("mongoose");


app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}));
app.use(express.urlencoded({extended:true}));

const url="mongodb+srv://frosthack2025:western%401234@financetracker.wmroexi.mongodb.net/financetracks?retryWrites=true&w=majority";

mongoose.connect(url);

app.post("/signup", async(req,res)=>{
    console.log("hii in backend");
    const body=req.body;
    const check=await db.findOne({email:body.email})
    if(!check){
        const user=await db.create({
            email:body.email
        });
        console.log(user);
        return res.status(200).json("success");
    }
    else{
        return res.status(404).json("already exists");
    }
    
});

app.listen(port,(req,res)=>{
    console.log("server is working on point");
});
