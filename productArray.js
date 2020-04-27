// import { getProducts } from './utils.js';
//^ I don't think this is actually needed

export class productsArray {
    constructor(products){
        this.products = products.slice();
    }


    getProducts() {
        return this.products;
    }

// // then remove from the array

    removeProductById(someId) {
        this.products.forEach((products, i) => {
            if (someId === products.id){
                this.products.splice(i, 1);
            }
        });
    }

    getProductById(someId) {
        let productMatch;

        this.products.forEach(products => {
            if (someId === products.id){
                productMatch = true;
            }
        });
        return productMatch;
    }

    hasAnyProducts() {
        return this.products.length;
    }

    getRandomProduct() {
        const randomProductIndex = Math.floor(Math.random() * this.products.length);
        return this.products[randomProductIndex];
    }

}