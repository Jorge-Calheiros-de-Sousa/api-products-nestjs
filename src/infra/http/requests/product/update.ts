import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class UpdateProduct {

    @IsNotEmpty()
    @IsString()
    @ApiProperty({
        description: "Name of product",
        example: "Product 1",
        required: false
    })
    name: string

    @IsNotEmpty()
    @IsNumber()
    @ApiProperty({
        description: "Price of product",
        example: 10.99,
        required: false
    })
    price: number

    @ApiProperty({
        description: "Description of product",
        example: "Description test",
        required: false
    })
    description?: string | null
}