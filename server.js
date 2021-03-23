const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const connectionDB = require("./database/database");
const middleware = require("./middleware/middleware");
const cors = require('cors')
const app = express();

// intialize cors
app.use(cors());


// parse application/json

app.use(bodyParser.json());

// configure dotenv file

dotenv.config({path:"config.env"});


// database connection

connectionDB.databaseConnection();

// port intialize 
PORT = process.env.PORT || 8080;

// middleware 

app.use('/api/*',(req,res,next)=>{
    authFreeApi = [
        '/api/signup',
        '/api/login'
    ];
    var freeApi = authFreeApi.includes(req.baseUrl);
    if(freeApi){
        next();
    }else{
        middleware.verifyToken(req,res,next)
    }
})

// import route

app.use('/api',require("./route/user_route"));
app.use('/api/post',require("./route/post_route"));

// front route without token
app.use('/f/api/post',require("./route/fpost_route"));



// port listen

app.listen(PORT,()=>{
    console.log(`http://localhost:${PORT}`)
})