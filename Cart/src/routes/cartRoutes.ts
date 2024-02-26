import express from "express";
import { validateToken } from "../middleware/verifyToken";
import { CartRepository } from "../db/repositories/cartRespository";
import { CartInteractor } from "../interactor/cartInteractor";
import { CartController } from "../controllers/cartController";



const router = express.Router();

const repository = new CartRepository();
const interactor = new CartInteractor(repository);
const controller = new CartController(interactor);

router.get("/")
router.post("/:productid", validateToken, controller.onCreateCart.bind(controller))
// router.delete("/:productid")
// router.delete('/checkout')


export default router;