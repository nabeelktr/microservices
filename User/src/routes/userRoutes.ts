import express from "express";
import { UserRepository } from "../db/repository/userRepository";
import { UserInteractor } from "../interactor/userInteractor";
import { UserController } from "../controller/userController";
import {validateToken} from '../middleware/verifyToken'

const router = express.Router();

const repository = new UserRepository()
const interactor = new UserInteractor(repository);
const controller = new UserController(interactor);

router.post("/", controller.onRegister.bind(controller))
router.get("/", validateToken, controller.onGetUser.bind(controller)) 
router.post("/login",  controller.onLogin.bind(controller)) 



export default router;