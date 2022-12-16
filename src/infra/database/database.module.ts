import { ProductRepositoryContract } from 'src/app/repositories/contracts/product-repository-contract';
import { PrismaService } from './prisma.service';
import { Module } from '@nestjs/common';
import { ProductRepository } from './prisma/repositories/product-repository';

@Module({
    providers: [
        PrismaService,
        {
            provide: ProductRepositoryContract,
            useClass: ProductRepository
        }
    ],
    exports: [
        ProductRepositoryContract
    ]
})
export class DatabaseModule { }
