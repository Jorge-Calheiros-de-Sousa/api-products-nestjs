import { Price } from './price';
import { Product } from './product';
describe("Products", () => {
    it("should to create a product", () => {
        const products = new Product({
            name: "Product1",
            price: new Price(10),
        })
        expect(products).toBeTruthy()
    })
})