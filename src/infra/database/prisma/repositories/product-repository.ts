import { Injectable } from '@nestjs/common';
import { Product } from "src/app/entities/product";
import { ProductRepositoryContract } from "../../../../app/repositories/contracts/product-repository-contract";
import { PrismaService } from '../../prisma.service';
import { IdProduct } from 'src/app/@types/product';
import { Products } from '@prisma/client';

@Injectable()
export class ProductRepository implements ProductRepositoryContract {
    constructor(private prisma: PrismaService) { }

    async list(): Promise<Products[]> {
        return await this.prisma.products.findMany();
    }

    async show(id: IdProduct): Promise<Products> {
        return await this.prisma.products.findUnique({
            where: id
        })
    }

    async create(product: Product): Promise<Products> {
        const response = await this.prisma.products.create({
            data: {
                name: product.name,
                price: product.price,
                description: product.description
            }
        })
        return response
    }

    async update(product: Product, id: IdProduct): Promise<Products> {
        const response = await this.prisma.products.update({
            data: {
                name: product.name,
                price: product.price,
                description: product.description
            },
            where: id
        })

        return response;
    }

    async delete(id: IdProduct): Promise<void> {
        await this.prisma.products.delete({
            where: id
        })
    }
}