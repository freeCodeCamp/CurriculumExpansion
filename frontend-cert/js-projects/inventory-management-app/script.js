let inventory = [];

const findProduct = (productName) => {
    let product = null;
    inventory.forEach((element, index) => {
        if (element.name === productName) {
            product = element;
            console.log(product);
            return index;
        }
    })
    if (!product) {
        console.log(`${productName} not found`)
        return null;
    }
}

const addProduct = (product) => {
    for (let i of inventory) {
        if (i.name === product.name) {
            i.quantity += product.quantity;
            console.log(`${product.name} quantity updated`)
            return;
        }
    }
    inventory.push(product);
    console.log(`${product.name} added to inventory`)
}

const removeProduct = (productName, quantity) => {
    for (let i = 0; i < inventory.length; i++) {
        if (inventory[i].name === productName) {
            if (inventory[i].quantity >= quantity) {
                inventory[i].quantity -= quantity;
                console.log(`Remaining ${productName} pieces: ${inventory[i].quantity}`)
                if (!inventory[i].quantity) {
                    inventory.splice(i, 1);
                }
                return;
            } else {
                console.log(`Not enough ${productName} available`)
                return;
            }
        }
    }
    console.log(`${productName} not found`)
}
/*
const product1 = {
    name: 'flour',
    quantity: 5
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
*/
