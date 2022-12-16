import { ProductRepositoryContract } from '../repositories/contracts/product-repository-contract';
import { Injectable } from '@nestjs/common';
import { Product } from '../entities/product';
import { Price } from '../entities/price';
import { CreateProductRequest, IdProduct, UpdateProductRequest } from '../@types/product';
import { Products } from '@prisma/client';


@Injectable()
export class ProductService {
    constructor(private repository: ProductRepositoryContract) { }

    async list(): Promise<Products[]> {
        return await this.repository.list();
    }

    async show(id: IdProduct): Promise<Products> {
        return await this.repository.show(id);
    }

    async store(request: CreateProductRequest): Promise<Products> {
        const { name, price, description } = request;

        const product = await this.repository.create(
            new Product({
                name,
                price: new Price(price),
                description
            }))

        return product;
    }

    async update(request: UpdateProductRequest, id: IdProduct): Promise<Products> {
        const product = await this.repository.update(request, id);
        return product;
    }

    async delete(id: IdProduct): Promise<void> {
        await this.repository.delete(id);
    }
}