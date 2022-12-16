import { Price } from "./price"

describe("Price", () => {
    it('should be a price valid', () => {
        const price = new Price(10.99);
        expect(price).toBeTruthy()
    })

    it('should return a error when price is less then 0', () => {
        expect(() => new Price(-20)).toThrow("Price invalid")
    })
})