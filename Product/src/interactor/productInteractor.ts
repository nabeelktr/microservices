import { IProductInteractor } from "../interface/iProductInterface";
import { IProductRepository } from "../interface/iProductRepository";

export class ProductInteractor implements IProductInteractor {

    private repository: IProductRepository;

    constructor(repository: IProductRepository){
        this.repository = repository;
    }
    getProduct(id: string) {
        return this.repository.findOne(id);
    }

    getProducts() {
        return this.repository.find();
    }

}