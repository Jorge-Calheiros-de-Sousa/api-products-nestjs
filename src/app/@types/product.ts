import { Prisma } from '@prisma/client';

export type CreateProductRequest = Prisma.ProductsCreateInput;

export type UpdateProductRequest = Prisma.ProductsUpdateInput;

export type IdProduct = Prisma.ProductsWhereUniqueInput;