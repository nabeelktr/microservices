import { Product } from "../../entities/product";
import { IProductRepository } from "../../interface/iProductRepository";
import { ProductModel } from "../schemas/productSchema";

export class ProductRepository implements IProductRepository {
    async findOne(id: string): Promise<Product | null> {
        const product = await ProductModel.findById(id);
        return product !== null ? product : null;;
    }
    async find(): Promise<Product[]> {
        const products = await ProductModel.find();
        return products;
    }
    
}