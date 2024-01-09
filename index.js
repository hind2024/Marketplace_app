import express from 'express'

import cors from "cors"
import dotenv from 'dotenv'
import {bootstrap} from "./src/bootstrap.js"
import { connectionBD } from './DataBase/connectionDB.js'

const app = express()
const port = process.env.PORT || 5000
app.use(express.json())
// load environment variables
dotenv.config()

app.use(cors())

 // connection to database

 connectionBD()
bootstrap(app) 
  

app.listen(port, () => console.log(`Example app listening on port ${port}!`))