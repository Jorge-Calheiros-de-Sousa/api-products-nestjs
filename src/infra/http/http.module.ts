import { Module } from '@nestjs/common';
import { ProductController } from './controllers/product.controller';
import { DatabaseModule } from '../database/database.module';
import { ProductService } from 'src/app/services/product-service';

@Module({
    imports: [DatabaseModule],
    controllers: [ProductController],
    providers: [ProductService],
})
export class HttpModule { }
