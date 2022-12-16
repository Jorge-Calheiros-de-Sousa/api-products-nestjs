import { UpdateProduct } from './../requests/product/update';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from "@nestjs/common";
import { StoreProduct } from '../requests/product/store';
import { ProductService } from 'src/app/services/product-service';
import { UpdateProductRequest } from "src/app/@types/product";
import { Products } from "@prisma/client";
import { ApiBody, ApiTags } from "@nestjs/swagger";

@ApiTags("Products")
@Controller()
export class ProductController {
    constructor(private service: ProductService) { }

    @Get("/products")
    async getProducts(): Promise<Products[]> {
        return await this.service.list()
    }

    @Get("/products/:id")
    async getProductById(@Param('id', ParseIntPipe) id: number): Promise<Products> {
        return await this.service.show({ id });
    }

    @Post("/products")
    async postProduct(@Body() body: StoreProduct): Promise<Products> {
        const { name, price, description } = body;

        const product = await this.service.store({
            name,
            price,
            description
        });

        return product

    }

    @Put("/products/:id")
    @ApiBody({ type: UpdateProduct })
    async putProduct(@Body() body: UpdateProductRequest, @Param('id', ParseIntPipe) id: number): Promise<Products> {
        return await this.service.update(body, { id });
    }

    @Delete("/products/:id")
    async deleteProdutc(@Param('id', ParseIntPipe) id: number): Promise<void> {
        await this.service.delete({ id });
    }
}
