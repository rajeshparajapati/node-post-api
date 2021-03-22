const User = require("../model/user_model");
const jwt = require('jsonwebtoken');
const constant = require("../constant/constant");
const bcrypt = require('bcrypt');



exports.signup = (req,res)=>{
   User.findOne({email:req.body.email}).then(user=>{
       if(user){
           return res.send({status:constant.ALREADY_EXIST,message:constant.ALREADY_EXIST_EMAIL_MSG})
       }else{
        const password = bcrypt.hashSync(req.body.password,constant.SALT_ROUND);
        req.body.password = password;
        User(req.body).save().then(userdata=>{
            let payload = {id:userdata._id}
            let token = jwt.sign(payload,'secret');
            return res.send({status:constant.SUCCESS_CODE,message:constant.ADDED_SUCCESS,token:token,data:userdata});
        }).catch(err=>{
            return res.send({status:constant.ERROR_CODE,message:err.message || constant.DATABASE_ERROR})
        })           
       }
   })
}

exports.login = (req,res)=>{
    User.findOne({email:req.body.email}).then(user=>{
        if(!user){
            return res.send({status:constant.NOT_FOUND_CODE,message:constant.INVALID_CREDENTIAL})
        }else{
         const password = bcrypt.compareSync(req.body.password,user.password);
         if(password){
            let payload = {id:user._id}
            let token = jwt.sign(payload,'secret');
            return res.send({status:constant.SUCCESS_CODE,message:constant.ADDED_SUCCESS,token:token,data:user});
         }else{
            return res.send({status:constant.NOT_FOUND_CODE,message:constant.INVALID_CREDENTIAL}) 
         }           
        }
    }).catch(err=>{
        return res.send({status:constant.ERROR_CODE,message:err.message || constant.DATABASE_ERROR})  
    })
 }
 

