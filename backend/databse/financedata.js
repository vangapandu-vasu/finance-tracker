const mongoose = require("mongoose");


const Transaction = new mongoose.Schema({
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
    descrpition:{
        type:String,
        
    },
    amount:{
        type:Number,
       
    },
    type:{
        type:Number,
    
    },
    date:{
            type:Date,
            default:Date.now
    }

},{timestamps:true});

const db=mongoose.model("Transaction",Transaction);

module.exports=db;