import {globalErrorMiddleware} from "./middleware/globalErrorMiddleware.js"


import authnRouter from "./modules/Auth/auth.routes.js"
import { AppError } from "./utils/AppError.js"



export const bootstrap = (app)=>{
    app.use('/api/v1/auth',authnRouter)

    app.use("/", (req, res, next)=>{
        res.send("welcome")
    })
    app.all('*', (req, res, next)=>{
        next(new AppError('Not found endpoint', 404))
    })
 
    // error middleware
    app.use(globalErrorMiddleware)
    process.on('unhandledRejection', (err)=>{
        console.log(`Unhandled Rejection at: Promise ${Promise}\nReason:\n${err}\n`)
    })
}
