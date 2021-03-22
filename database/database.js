const mongoose = require("mongoose");

exports.databaseConnection = async()=>{
 
    try{
        mongoose.connect(process.env.DB, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify:false,
            serverSelectionTimeoutMS: 5000
          })
          console.log("database connected")

    } catch {
        process.exit();
    }
}