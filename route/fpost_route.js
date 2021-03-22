const express = require("express");
const route  = express.Router();
const Post = require("../controller/post")


/**
 * @description: User Post
 * @method: GET/get_all_posts
 */

route.get('/get_all_posts',Post.getAllBlogPosts)




module.exports = route;