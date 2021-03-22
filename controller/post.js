const Post = require("../model/post_model");
const constant = require("../constant/constant");

exports.createPost  = (req,res)=>{
    req.body.user_id = req.user.id;
    new Post(req.body).save().then(data=>{       
      return  res.send({status:constant.SUCCESS_CODE,data:data,message:constant.ADDED_SUCCESS})
    }).catch(err=>{
      return  res.send({status:constant.DATABASE,message:err.message || constant.DATABASE_ERROR})
    })
}


exports.updatePost  = (req,res)=>{    
    Post.findByIdAndUpdate({_id:req.params.id},req.body).then(data=>{
        return  res.send({status:constant.SUCCESS_CODE,data:data,message:constant.RECORD_UPDATED})
      }).catch(err=>{
        return res.send({status:constant.DATABASE,message:err.message || constant.DATABASE_ERROR})
      });
}

// working on 
exports.deletePost = (req,res)=>{
  Post.findByIdAndDelete({_id:req.params.id}).then(data=>{
      return res.send({status:constant.SUCCESS_CODE,data:data,message:constant.RECORD_DELETED})
    }).catch(err=>{
      return res.send({status:constant.DATABASE,message:err.message || constant.DATABASE_ERROR})
    })
  }

exports.getPost = (req,res)=>{
  user_id = req.user.id;
  Post.find({user_id:user_id}).then(data=>{
    return res.send({status:constant.SUCCESS_CODE,data:data})
  }).catch(err=>{
    return res.send({status:constant.DATABASE,message:err.message || constant.DATABASE_ERROR})
  })
}

exports.getAllBlogPosts = (req,res)=>{
  Post.find({}).then(data=>{
    return res.send({status:constant.SUCCESS_CODE,data:data})
  }).catch(err=>{
    return res.send({status:constant.DATABASE,message:err.message || constant.DATABASE_ERROR})
  })
}

exports.getSinglePost  = (req,res)=>{
  Post.findOne({_id:req.params.id}).then(data=>{
    return res.send({status:constant.SUCCESS_CODE,data:data})
  }).catch(err=>{
    return res.send({status:constant.DATABASE,message:err.message || constant.DATABASE_ERROR})
  })
}