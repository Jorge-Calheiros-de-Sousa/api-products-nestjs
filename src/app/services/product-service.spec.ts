import { InMemoryDatabase } from './../../../test/database/in-memory-database';
import { ProductService } from './product-service';
describe("Make a product", () => {
    it('should be able to create a product', async () => {
        const productRepository = new InMemoryDatabase()
        const productService = new ProductService(productRepository);

        const product = await productService.store({
            name: "Product 1",
            price: 10.90,
            description: "Test"
        })


        expect(productRepository.products).toHaveLength(1);
        expect(productRepository.products[0]).toEqual(product);
    })

    it('should be able to list a products', async () => {
        const productRepository = new InMemoryDatabase()
        const productService = new ProductService(productRepository);

        for (let index = 0; index < 10; index++) {
            await productService.store({
                name: "Product 1",
                price: 10.90,
                description: "Test"
            })

        }

        const products = await productRepository.list();

        expect(productRepository.products).toHaveLength(10);
        expect(productRepository.products).toEqual(products)

    })

    it('should be able to update a products', async () => {
        const productRepository = new InMemoryDatabase()
        const productService = new ProductService(productRepository);

        await productService.store({
            name: "Product 1",
            price: 10.90,
            description: "Test"
        })

        const id = productRepository.products[0].id;

        const product = await productService.update({
            name: "Product 2 updated",
            price: 12.00,
        }, { id })

        expect(productRepository.products[0]).toEqual(product);
    })

    it('should be able to delete a products', async () => {
        const productRepository = new InMemoryDatabase()
        const productService = new ProductService(productRepository);

        await productService.store({
            name: "Product 1",
            price: 10.90,
            description: "Test"
        })

        const id = productRepository.products[0].id;

        await productService.delete({ id });

        expect(productRepository.products).toHaveLength(0);
    })

    it('should be able to delete a product', async () => {
        const productRepository = new InMemoryDatabase()
        const productService = new ProductService(productRepository);

        await productService.store({
            name: "Product 1",
            price: 10.90,
            description: "Test"
        })

        const id = productRepository.products[0].id;

        const product = await productService.show({ id })

        expect(productRepository.products[0]).toBe(product);
    })
})