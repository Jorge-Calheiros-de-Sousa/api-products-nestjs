import { Products } from '@prisma/client';
import { IdProduct, UpdateProductRequest } from 'src/app/@types/product';
import { Product } from './../../entities/product';
export abstract class ProductRepositoryContract {
    abstract list(): Promise<Products[]>
    abstract show(id: IdProduct): Promise<Products>
    abstract create(product: Product): Promise<Products>
    abstract update(product: UpdateProductRequest, id: IdProduct): Promise<Products>
    abstract delete(id: IdProduct): Promise<void>;
}