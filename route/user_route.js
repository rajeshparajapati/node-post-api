const express = require("express");
const route  = express.Router();
const User = require("../controller/user")


/**
 * @description: signup user
 * @method: POST/signup
 */

route.post('/signup',User.signup)


/**
 * @description: signin admin
 * @method: POST/admin_signin
 */

 route.post('/login',User.login)


module.exports = route;