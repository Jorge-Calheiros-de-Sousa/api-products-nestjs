import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class StoreProduct {

    @IsNotEmpty()
    @IsString()
    name: string

    @IsNotEmpty()
    @IsNumber()
    price: number

    description?: string | null
}