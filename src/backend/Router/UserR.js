import Router  from "express";
import UserController from "../Controllers/UserC.js";
import AuthMiddlewareHelper from "../Services/AuthMiddlewareHelper.js";

const userRouter = new Router();

// Объявление маршрутов
userRouter.get('/profile', AuthMiddlewareHelper.authCheck , UserController.getUserInfo);

export default userRouter;