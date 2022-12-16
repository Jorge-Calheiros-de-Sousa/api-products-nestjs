import { ProductRepositoryContract } from '../../src/app/repositories/contracts/product-repository-contract';
import { Products } from '@prisma/client';
import { IdProduct } from 'src/app/@types/product';
import { Product } from 'src/app/entities/product';


export class InMemoryDatabase implements ProductRepositoryContract {

    public products: Products[] = []

    async list(): Promise<Products[]> {
        return await this.products;
    }

    async show(id: IdProduct): Promise<Products> {
        return await this.products.filter(product => product.id == id.id)[0];
    }

    async create(product: Product): Promise<Products> {
        this.products.push({
            id: this.products.length + 1,
            name: product.name,
            price: product.price,
            description: product.description
        });
        return await this.products[0];
    }

    async update(product: Product, id: IdProduct): Promise<Products> {

        const index = this.products.findIndex(product => product.id == id.id);

        this.products[index] = {
            id: this.products[index].id,
            name: product.name,
            price: product.price,
            description: product.description
        }

        return await this.products[index];
    }

    async delete(id: IdProduct): Promise<void> {
        const index = this.products.findIndex(product => product.id == id.id);
        await this.products.splice(index, 1);
    }
}