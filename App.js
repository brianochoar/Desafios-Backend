class ProductManager {
    constructor() {
        this.products = []
        this.nextId = 1
    }


    addProduct(product) {
        if (!this.isProductValid(product)) {
            console.log("Error: Producto invalido")
            return
        }

        if (this.isCodeDuplicate(product.code)) {
            console.log("Error: Codigo existente")
            return
        }

        product.id = this.nextId++
        this.products.push(product)
        console.log("Producto agregado:", product);
        
    }

    getProducts() {
        return this.products
    }

    getProductById(id) {
        const product = this.products.find((p) => p.id === id)
        if (product) {
            return product
        } else {
            console.log("Error: Producto no existe")
        }
    }

    isProductValid(product) {
        return (
            product.title &&
            product.description &&
            product.price &&
            product.code &&
            product.stock !== undefined
        )
    }

    isCodeDuplicate(code) {
        return this.products.some((p) => p.code === code)
    }
}

const productManager = new ProductManager()

productManager.addProduct({
    title: "Remera Negra",
    description: "Remera negra marca Nike",
    price: 10500,
    thumbnail: 'ruta/imagenA.jpg',
    code: 'P001',
    stock: 20
})


productManager.addProduct({
    title: "Remera Blanca",
    description: "Remera Blanca marca Nike",
    price: 10300,
    thumbnail: 'ruta/imagenB.jpg',
    code: 'P002',
    stock: 16
})

productManager.addProduct({
    title: "Remera Celeste",
    description: "Remera Celeste marca Nike",
    price: 12000,
    thumbnail: 'ruta/imagenC.jpg',
    code: 'P003',
    stock: 20
})


const productos = productManager.getProducts()
const producto = productManager.getProductById(3)

console.log(producto)






