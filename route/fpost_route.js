const express = require("express");
const route  = express.Router();
const Post = require("../controller/post")


/**
 * @description: User Post
 * @method: POST/get_all_posts
 */

route.post('/get_all_posts',Post.getAllBlogPosts)


/**
 * @description: User Tags
 * @method: GET/get_all_tags
 */

 route.get('/get_all_tags',Post.getAllTags)





module.exports = route;