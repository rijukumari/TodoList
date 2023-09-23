const express = require('express')
const mongoose = require('mongoose')
const routes = require("./routes/ToDORoute")
const cors = require('cors')
require('dotenv').config
const app = express()
const PORT = process.env.PORT || 4000

app.use(express.json())
app.use(cors())
app.use(routes)

mongoose.connect('mongodb://127.0.0.1:27017/TodoProject')
.then(()=>{
    console.log("connection successful")
}).catch((err)=>{
    console.log("error")

})

app.listen(PORT,()=>{
  console.log(`listen on the port number ${PORT}`)
})