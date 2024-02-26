import { ICartRepository } from "../../interfaces/iCartRepository";
import { CartModel } from "../schemas/cartSchema";

export class CartRepository implements ICartRepository {
    find(userId: string) {
        throw new Error("Method not implemented.");
    }
    async create(userId: string, productId: string) {
        const cart = await CartModel.create({userId, productId})
        return cart;
    }
    
}