import Router from "express";
import ProductController from "../Controllers/ProductC.js";

const productRouter = new Router();

// Объявление маршрутов
productRouter.post('/product/create', ProductController.createProduct); // Create
productRouter.get('/product/all', ProductController.getProducts); // Read all
productRouter.get('/product/:id', ProductController.getProduct); // Read by id
productRouter.put('/product/:id', ProductController.updateProduct); // Update
productRouter.delete('/product/:id', ProductController.deleteProduct); // Delete

export default productRouter;
