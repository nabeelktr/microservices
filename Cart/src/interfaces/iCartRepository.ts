export interface ICartRepository {
    find(userId: string):any;
    create(userId: string, productId: string):any;
}