const mongoose = require("mongoose")
const scheema = mongoose.Schema(
    {
        "name":String,
        "rollno":String,
        "admnNo":String,
        "college":String
    }
)

let studentmodel= mongoose.model("students",scheema);
