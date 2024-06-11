const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {studentmodel} =require("./models/student")

const app = express()
app.use(cors())
app.use(express.json())

//mongodb connection
mongoose.connect("mongodb+srv://thasneemazeez:thasneem38@cluster0.uk9okno.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0")

app.get("/",(req,res)=>{
    res.send("hello")
})

app.post("/contact",(req,res)=>{
    res.send("welcome to my contact page")
})


app.post("/add",(req,res)=>{
    let input=req.body //read input
    let student=new studentmodel(input) //passing to model
    student.save()
    res.json({"status":"success"}) // checking input
})

app.get("/view",(req,res)=>{
    studentmodel.find().then(
        (data)=>{
res.json(data)
        }
    ).catch((error)=>{
res.json(error)
    })
})




app.listen(8080,()=>{
    console.log("server started")
})