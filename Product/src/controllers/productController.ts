import { NextFunction, Request, Response } from "express";
import { IProductInteractor } from "../interface/iProductInterface";

export class ProductController {

    private interactor : IProductInteractor

    constructor(interactor: IProductInteractor) {
        this.interactor = interactor
    }

    onGetProducts = async (req: Request, res: Response, next: NextFunction) => {
        try {
            const data = await this.interactor.getProducts();
            return res.status(200).json(data);
        } catch (error) {
            next(error)
        }
    }

    onGetProduct = async (req: Request, res: Response, next: NextFunction) => {
        try{
            const data = await this.interactor.getProduct(req.params.id)
            return res.status(200).json(data)
        }catch(error){
            next(error)
        }
    }

}