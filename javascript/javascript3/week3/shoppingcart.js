const productUl = document.getElementById("products");
const totalPrice = document.getElementById("total");
const username = document.getElementById("user");
const productPrice = document.getElementById("price");

class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }

    convertToCurrencyWithApi(currency) {
        const apiUrl = `https://api.exchangeratesapi.io/latest?base=DKK`;
        return fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                return this.price * data.rates[currency]

            })
            .catch(err => console.log(err));
    }
}

class ShoppingCart {
    constructor() {
        this.products = [];
    }

    addProduct(product) {
        this.products.push(product);
    }

    removeProduct(product) {
        const newProducts = this.products.filter((existingProduct) => {
            return existingProduct.name !== product.name
        })
        this.products = newProducts;
    }

    searchProduct(productName) {
        const searchedProduct = this.products.filter(product => product.name.toLowerCase() === productName.toLowerCase());
        return searchedProduct;
    }

    renderProducts() {
        this.products.forEach((product) => {
            const li = document.createElement('li');
            const liPrice = document.createElement("li");
            li.textContent = `${product.name}`;
            liPrice.textContent = `${product.price}`;
            productUl.appendChild(li);
            productPrice.appendChild(liPrice);
        })
        return products;
    }

    getTotal() {
        const totalAmount = this.products.map(product => product.price).reduce((acc, currentvalue) => acc + currentvalue);
        totalPrice.textContent = `The total amount is: ${totalAmount} kr`;
        console.log(totalAmount);
    }

    getUser() {
        const url = 'https://jsonplaceholder.typicode.com/users/1'
        fetch(url)
            .then(response => response.json())
            .then(result => {
                const user = result.username;
                username.textContent = `Username : ${user}`;
            })
    }
}

const shoppingCart = new ShoppingCart();
const flatscreen = new Product("flat-screen", 5000);
const laptop = new Product("lap-top", 10000);
const mobile = new Product("mobile-phone", 7000);
const headphone = new Product("head-phones", 500);
const officeTable = new Product("office-table", 1500);  
const keybord = new Product("key-bord", 700);
const mouse = new Product("mouse", 200);
const officeChair = new Product("office-chair", 2000);

shoppingCart.addProduct(flatscreen);
shoppingCart.addProduct(laptop);
shoppingCart.addProduct(mobile);
shoppingCart.addProduct(headphone);
shoppingCart.addProduct(officeTable);
shoppingCart.addProduct(keybord);
shoppingCart.addProduct(mouse);
shoppingCart.addProduct(officeChair);

shoppingCart.removeProduct(flatscreen);
console.log(shoppingCart);

console.log(shoppingCart.searchProduct("x-box"));

shoppingCart.getUser();
const finalCart = shoppingCart.renderProducts()

shoppingCart.getTotal();
const plant = new Product('plant', 50);
shoppingCart.addProduct(plant);
plant.convertToCurrencyWithApi('USD').then(value => console.log(value));