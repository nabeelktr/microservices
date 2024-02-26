import { User } from "../entities/user";

export interface IUserInteractor {
    userRegister(userData:User):any;
    getUser(email:string, id:string):Promise<User>;
    userLogin(userData: any, password: string):any;
}