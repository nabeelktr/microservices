import { User } from "../../entities/user";
import { IUserRepository } from "../../interfaces/iUserRepository";
import { UserModel } from "../schemas/userSchema";
import bcrypt from 'bcryptjs'

export class UserRepository implements IUserRepository{
    async find(email: string, id:string): Promise<User | any> {
        let user;
        if(id.length){
            user = await UserModel.findById(id);
        }else{
            user = await UserModel.find({email:email});
        }
        return user;
    }
    async create(userData: User): Promise<User | any> {
        const hashedP = await bcrypt.hash(userData.password, 10)
        userData.password = hashedP;
        const newUser = await UserModel.create(userData);
        return newUser;
    }
    
}