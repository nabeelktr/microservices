import { ICartInteractor } from "../interfaces/iCartInterface";
import { ICartRepository } from "../interfaces/iCartRepository";

export class CartInteractor implements ICartInteractor {

    private repository: ICartRepository

    constructor(repository: ICartRepository){
        this.repository = repository;
    }
    createCart(userId: string ,productId: string) {
        return this.repository.create(userId,productId);
    }
    
    getCart(id: string) {
        throw new Error("Method not implemented.");
    }

}