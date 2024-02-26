export interface ICartInteractor {

    getCart(id:string):any;
    createCart(userId: string, productId: string):any;
}