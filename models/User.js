var mongoose = require("mongoose")
var person = mongoose.Schema({
   
    Lastname: String,
    Firstname: String,
    Email: { type: String, lowercase: true },
    Age:{type:Number}
})
module.exports=mongoose.model("Users", person)