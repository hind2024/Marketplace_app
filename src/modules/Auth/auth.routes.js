import express from "express"
import * as authController from "./auth.controller.js";

const authnRouter = express.Router();

authnRouter.post('/signUp',authController.SignUp)
authnRouter.post('/signIn',authController.SignIn)
// *********************confirm with code****************************
authnRouter.patch('/confirme',authController.confirm_Code);
// ********************* forget Password ****************************
authnRouter.patch('/forgetPassword',authController.forgetPassword);
authnRouter.patch('/resetPassword',authController.resetPassword);
// ********************* change Password ****************************
authnRouter.patch('/changepassword/:id',authController.changePassword1);
export default authnRouter
