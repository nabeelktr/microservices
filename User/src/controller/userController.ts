import { NextFunction, Request, Response } from "express";
import { IUserInteractor } from "../interfaces/iUserInterface";

interface AuthenticatedRequest extends Request {
    user?: any;
}

export class UserController {

    private interactor: IUserInteractor

    constructor(interactor: IUserInteractor) {
        this.interactor = interactor;
    }

    onRegister = async (req: Request,res: Response,next: NextFunction) => {
        try{
            const user = await this.interactor.userRegister(req.body);
            if(user){
                res.status(200).json({success: true})
            }else{
                res.status(401).json({error: 'already exist'})
            }
        }catch(err){
            next(err)
        }
    }

    onGetUser = async (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
        try{
            const user = await this.interactor.getUser('',req.user.id);
            res.status(200).json(user)
        }catch(err){
            next(err)
        }
    }

    onLogin = async (req:Request, res:Response, next:NextFunction) => {
        try{
            const foundUser: any = await this.interactor.getUser(req.body.email,'')
            if(foundUser.length){
                const user = await this.interactor.userLogin(foundUser, req.body.password);
                if(user){
                    res.status(200).json(user)
                }else{
                    res.status(402).json({message: 'invalid Password'})
                }
            }else{
                res.status(401).json({message: 'invalid email'})
            }
        }catch(error){
            next(error)
        }
    }
}