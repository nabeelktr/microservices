import { PClient } from "../config/grpc-client/productClient";
import { Cart } from "../entities/cart";
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
    
    async getCart(id: string) {
        const cart = await this.repository.find(id);
        const cartProductIds: string[] = cart.map((item: Cart) => item.productId);
        const productsPromises = cartProductIds.map(productId => {
            return new Promise((resolve, reject) => {
                PClient.GetProduct({ id: productId }, (err, result) => {
                    if (err) {
                        console.error(err);
                        reject(err);
                        return;
                    }
                    resolve(result);
                });
            });
        });

        const products = await Promise.all(productsPromises);

        let total = 0;
        products.forEach((product: any) => {
            total += product.price;
        });
        return { products, total };
    }
}