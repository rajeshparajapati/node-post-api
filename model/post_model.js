const mongoose = require("mongoose");

let Post = new mongoose.Schema({
    title:{
        type:String,
        require:true
    },
    subtitle:{
        type:String,
        require:true
    },
    tags:{
        type:String,
        require:true
    },
    content:{
        type:String,
        require:true
    },
    user_id:{
        type:mongoose.Types.ObjectId,
        ref:"user"

    }
   
})
module.exports = mongoose.model("post",Post);
