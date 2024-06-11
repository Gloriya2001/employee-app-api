const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const {employeemodel} = require("./models/employee")


const app = express()
app.use(cors())
app.use(express())


app.post("/add", (req, res) => {

    //1.input read and display it using console
    //2.pass input to model and then object . save
    //3.model .find use promise method ..to get the view
   
})

app.get("/view",(req,res)=>{
    res.send("hai")
})

app.listen(8080,()=>{
    console.log("server started")
})




