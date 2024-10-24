import CategoryController from "../Controllers/CategoryC.js";
import Router from "express";
import AuthMiddlewareHelper from "../Services/AuthMiddlewareHelper.js";

const categoryRouter = new Router();

categoryRouter.post('/category/create'/*, [AuthMiddlewareHelper.roleCheck("ADMIN")]*/, CategoryController.createCategory); // Create
categoryRouter.get('/category/all', CategoryController.getCategorys); // Read all
categoryRouter.get('/category/:id', CategoryController.getCategory); // Read by id
categoryRouter.put('/category/update/:id', CategoryController.updateCategory); // Update
categoryRouter.delete('/category/:id', [AuthMiddlewareHelper.authCheck,AuthMiddlewareHelper.roleCheck("ADMIN")], CategoryController.deleteCategory); // Delete

export default categoryRouter;
