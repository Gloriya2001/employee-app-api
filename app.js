const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {employeemodel} = require("./models/employee")


const app = express()
app.use(cors())
app.use(express.json())
mongoose.connect("mongodb+srv://gloria2001:gloria2001@cluster0.ipg35w1.mongodb.net/employeeDB?retryWrites=true&w=majority&appName=Cluster0")

app.post("/add", (req, res) => {
    
    let input = req.body
    //console.log(input)
   // res.send("success")

   let employee = new employeemodel(input)
   employee.save()//to save to database
   console.log(employee)
   res.json({"status":"success"})


    //1.input read and display it using console
    //2.pass input to model and then object . save
    //3.model .find use promise method ..to get the view
   
})

app.post("/search",(req,res)=>{

    let input = req.body
    employeemodel.find(input).then(

        (data)=>{
            res.json(data)
        }


    ).catch(
        (error)=>{
            res.json(error)
        }
    )


})

app.post("/view",(req,res)=>{
    
    employeemodel.find().then(

        (data)=>{
            res.json(data)
        }

    ).catch()
    
})





app.listen(8080,()=>{
    console.log("server started")
})




