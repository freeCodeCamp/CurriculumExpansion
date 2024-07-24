let inventory = [];

const findProductIndex = (productName) => {
    let productIndex = -1;
    inventory.forEach((element, index) => {
        if (element.name === productName) {
            productIndex = index;
        }
    })
    return productIndex;
}

const addProduct = (product) => {
    const productIndex = findProductIndex(product.name);
    if (productIndex < 0) {
        inventory.push(product);
        console.log(`${product.name} added to inventory`)
        return;
    }
    inventory[productIndex].quantity += product.quantity;
    console.log(`${product.name} quantity updated`)
}

const removeProduct = (productName, productQuantity) => {
    const productIndex = findProductIndex(productName);
    if (productIndex < 0) {
        console.log(`${productName} not found`);
        return;
    }
    const foundProduct = inventory[productIndex];
    if (foundProduct.quantity >= productQuantity) {
        foundProduct.quantity -= productQuantity;
        console.log(`Remaining ${productName} pieces: ${foundProduct.quantity}`)
        if (!foundProduct.quantity) {
            inventory.splice(productIndex, 1);
        }
        return;
    }
    console.log(`Not enough ${productName} available, remaining pieces: ${foundProduct.quantity}`);
}

// Example usage

const product1 = {
    name: 'flour',
    quantity: 15
}
const product2 = {
    name: 'flour',
    quantity: 10
}
const product3 = {
    name: 'sugar',
    quantity: 20
}
const product4 = {
    name: 'salt',
    quantity: 12
}

addProduct(product1);
addProduct(product2);
addProduct(product3);
addProduct(product4);
removeProduct('flour', 30);
removeProduct('flour', 20);
removeProduct('flour', 5);