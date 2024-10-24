import Router from "express";
import AuthController from "../Controllers/AuthC.js";
import AuthMiddlewareHelper from "../Services/AuthMiddlewareHelper.js";
import { check } from "express-validator";

const AuthRouter = new Router();

AuthRouter.post(
    '/auth/registration', 
    [   
        check('username','Empty username!').isString().notEmpty(),
        check('email', 'Email empty!').exists().isString().notEmpty().isEmail(),
        check('password','Incorrect!').isString().notEmpty().matches(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,16}/g)
    ],
    AuthController.registration); // registration
AuthRouter.post(
    '/auth/login',
    [
       // AuthMiddlewareHelper.authCheck
        check('email', 'Email empty!').exists().isString().notEmpty().isEmail()
    ], 
    AuthController.login); // login


export default AuthRouter;
