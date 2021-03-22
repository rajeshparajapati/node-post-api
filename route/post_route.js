const express = require("express");
const route  = express.Router();
const Post = require("../controller/post")


/**
 * @description: User Post
 * @method: POST/createpost
 */

route.post('/createpost',Post.createPost)


/**
 * @description: Update Post
 * @method: PUT/updatepost
 */

 route.put('/updatepost/:id',Post.updatePost);

 
/**
 * @description: Delete Post
 * @method: DELETE/deletepost
 */

 route.delete('/deletepost/:id',Post.deletePost)

 /**
 * @description: Get User all Posts
 * @method: GET/deletepost
 */

  route.get('/getpost',Post.getPost)


   /**
 * @description: Get User single post
 * @method: GET/get_single_post
 */

    route.get('/get_single_post/:id',Post.getSinglePost)


  


module.exports = route;