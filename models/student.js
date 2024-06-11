const mongoose = require("mongoose")
const scheema = mongoose.Schema(
    {
        "name":{type:String,required:true},
        "rollno":{type:String,required:true},
        "admnNo":{type:String,required:true},
        "college":{type:String,required:true}
    }
)

let studentmodel= mongoose.model("students",scheema);
module.exports={studentmodel}
