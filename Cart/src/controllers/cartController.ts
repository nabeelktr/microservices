import { NextFunction, Request, Response } from "express";
import { ICartInteractor } from "../interfaces/iCartInterface";


interface Req extends Request{
    user?:any;
}
export class CartController {

    private interactor : ICartInteractor

    constructor(interactor: ICartInteractor) {
        this.interactor = interactor
    }

    onGetCartProducts = async ( req: Req, res:Response, next:NextFunction) => {
        try{
            const products = await this.interactor.getCart(req.user.id);
            res.status(200).json({Products: products.products, total: products.total})
        }catch(err){
            next(err)
        }
    }
    onCreateCart = async(req: Req, res: Response, next: NextFunction) => {
        try{
            const cart = await this.interactor.createCart(req.user.id, req.params.productid)
            res.status(200).json(cart);
        }catch(err){
            next(err)
        }
    }

    
}