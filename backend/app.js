import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import {connectDB} from './src/config/db.js'
import route from './src/routes/index.js'
const corsOption={
   origin:['localhost:5173'],
   methods:['GET', 'POST', 'DELETE', 'PATCH'],
   credential:true
}


 dotenv.config()
 const app = express()
 app.use(express.json())
 app.use(cors(corsOption))
 app.use('/', route)
 connectDB()

 const PORT= process.env.PORT || 3000
 app.listen(PORT, ()=>console.log(`server working port ${PORT} `))