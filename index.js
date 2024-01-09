import express from 'express'
import { dbConnection } from './database/dbConnection.js'
import cors from "cors"
import dotenv from 'dotenv'
import {bootstrap} from "./src/bootstrap.js"

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
// load environment variables
dotenv.config()

app.use(cors())

 // connection to database
 dbConnection()
bootstrap(app) 
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))