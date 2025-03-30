const express=require("express");
const port = 9000
const app=express();
const cors=require("cors");
const cookieParser = require("cookie-parser");
const db=require("./databse/financedata");
const  mongoose  = require("mongoose");
const {getuser, setuser} = require("./databse/auth");


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
            email:body.email,
            password:body.password,
        });
        console.log(user);
        return res.status(200).json("success");
    }
    else{
        return res.status(404).json("already exists");
    }
    
});

app.post("/login",async(req,res)=>{
    const {email,password}=req.body;
    console.log("in loin")
    const user=await db.findOne({email,password})
    if(!user){
        console.log("invalid credentials");
        return res.send("wrong details");
    }
    else{
        const token=setuser(user);
        console.log("in backend")
        res.cookie("uid",token,
            {
                httpOnly: true, // Prevents JavaScript from accessing it
                secure: true, // Set true in production (HTTPS required)
                sameSite: "lax", // Allows sending cookies on same-site requests
            }
        );
        return res.send("access granted");
        
    }
})

app.listen(port,(req,res)=>{
    console.log("server is working on point");
});
