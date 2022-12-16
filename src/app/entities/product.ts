import { Replace } from './../helpers/replace';
import { Price } from './price';

interface IProductProps {
    name: string,
    price: Price,
    description?: string | null,
    createdAt: Date
}

export class Product {
    props: IProductProps

    constructor(props: Replace<IProductProps, { createdAt?: Date }>) {
        this.props = {
            ...props,
            createdAt: props.createdAt ?? new Date()
        }
    }

    public set name(name: string) {
        this.props.name = name;
    }

    public get name(): string {
        return this.props.name;
    }

    public set price(price: number) {
        this.props.price = new Price(price);
    }

    public get price(): number {
        return this.props.price.value;
    }

    public set description(description: string) {
        this.props.description = description
    }

    public get description(): string | null {
        return this.props.description;
    }

    public set createdAt(createdAt: Date) {
        this.props.createdAt = createdAt
    }

    public get createdAt(): Date {
        return this.props.createdAt;
    }
}