import { User } from "../entities/user";

export interface IUserRepository {
    find(email: string, id: string):Promise<User | any>;
    create(userData:User):Promise<User>;
}