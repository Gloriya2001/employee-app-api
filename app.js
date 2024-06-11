const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {employeemodel} = require("./models/employee")


const app = express()
app.use(cors())
app.use(express.json())


app.post("/add", (req, res) => {
    
    let input = req.body
    //console.log(input)
   // res.send("success")

   let employee = new employeemodel(input)
   employee.save()//to save to database
   console.log(employee)
   res.send("success")


    //1.input read and display it using console
    //2.pass input to model and then object . save
    //3.model .find use promise method ..to get the view
   
})

app.get("/view",(req,res)=>{
    
})

app.listen(8080,()=>{
    console.log("server started")
})




