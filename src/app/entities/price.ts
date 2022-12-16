export class Price {
    private readonly price: number

    private validatePrice(price: number): boolean {
        return price >= 0;
    }

    constructor(price: number) {
        if (!this.validatePrice(price)) {
            throw new Error("Price invalid")
        }

        this.price = price;
    }

    get value(): number {
        return this.price;
    }

}