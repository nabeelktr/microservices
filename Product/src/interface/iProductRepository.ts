import { Product } from "../entities/product";


export interface IProductRepository {
    find(): Promise<Product[]>;
    findOne(id: string): Promise<Product | null>;
}