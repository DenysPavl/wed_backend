import Router from "express";
import CommentC from "../Controllers/CommentC.js";
import AuthMiddlewareHelper from "../Services/AuthMiddlewareHelper.js";

const commentRouter = new Router();

commentRouter.post('/comment', AuthMiddlewareHelper.authCheck ,CommentC.createComment); //Create
commentRouter.get('/comment/all', 
[   AuthMiddlewareHelper.authCheck,
    AuthMiddlewareHelper.roleCheck("ADMIN")
],
CommentC.getComments); //Read
commentRouter.get('/comment/author', AuthMiddlewareHelper.authCheck,CommentC.getCommentsByAuthorId); //Read authors comments
commentRouter.get('/comment/:id',CommentC.getComment); //Read
commentRouter.put('/comment/update/:id',CommentC.updateComment); // Update
commentRouter.delete('/comment/:id', [AuthMiddlewareHelper.authCheck, AuthMiddlewareHelper.roleCheck("ADMIN")],CommentC.deleteComment); //Del

export default commentRouter;