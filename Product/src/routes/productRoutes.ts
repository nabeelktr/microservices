import express from "express";
import { ProductRepository } from "../db/repository/productRepository";
import { ProductInteractor } from "../interactor/productInteractor";
import { ProductController } from "../controllers/productController";


const router = express.Router();

const repository = new ProductRepository();
const interactor = new ProductInteractor(repository);
const controller = new ProductController(interactor);

router.get("/", controller.onGetProducts.bind(controller))
router.get("/:id", controller.onGetProduct.bind(controller))


export default router;