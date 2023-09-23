const express = require("express")
const mongoose = require("mongoose")

const app= express()
app.use(express.json())
const url='mongodb://127.0.0.1:27017/Employee'

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',()=>{
    console.log("Connected")
})
 
const employeeRouter = require('./routes/employees')

app.use('/employees',employeeRouter)

app.listen(3000,()=>{
    console.log("Server Started")
}) 