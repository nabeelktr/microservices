import { ICartRepository } from "../../interfaces/iCartRepository";
import { CartModel } from "../schemas/cartSchema";

export class CartRepository implements ICartRepository {
    async find(userId: string) {
        const cart = await CartModel.find({userId})
        return cart;
    }
    async create(userId: string, productId: string) {
        const cart = await CartModel.create({userId, productId})
        return cart;
    }
    
}