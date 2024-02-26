import { User } from "../entities/user";
import { IUserInteractor } from "../interfaces/iUserInterface";
import { IUserRepository } from "../interfaces/iUserRepository";
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import {config} from 'dotenv'
config()

export class UserInteractor implements IUserInteractor {

    private repository: IUserRepository

    constructor(repository: IUserRepository ) {
        this.repository = repository;
    }
    userLogin = async (user: [User], password: string) => {
        const isUser = await bcrypt.compare(password, user[0].password)
        if(isUser){
            const accesToken = jwt.sign( {user: {id: user[0]._id}}, process.env.JWT_SECRET || '', {expiresIn: '5m'} )
            return accesToken;
        }
        return isUser
    }

    async getUser(email:string, id: string): Promise<User | any> {
        let user;
        if(id.length){
            user = await this.repository.find('', id)
        }else{
            user =  await this.repository.find(email,'');
        }
        return user;
    }

    userRegister = async (userData: User) => {
        const foundUser = await this.repository.find(userData.email,'');
        if(foundUser.length){
            return false;
        }
        const user = await this.repository.create(userData);
        
        return user;
    }

    
}