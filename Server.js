const mongoose=require("mongoose")
const express=require("express")
const app=express()
const router=require("./Routes/routes")
const cors=require("cors")
require("dotenv").config({path:"./Config/.env"})
const URL=process.env.URL
const PORT=process.env.PORT
app.use(cors({origin:"http://localhost:3000"}))
app.set('json spaces', 2)
app.use(router)
app.listen(PORT,()=>{console.log("server is running")})
mongoose.connect(URL)

