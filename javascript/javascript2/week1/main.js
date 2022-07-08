console.log("Script loaded");

const products = getAvailableProducts();
console.log(products);
function renderProducts(products) {
  const ulList = document.createElement("ul");
  document.body.appendChild(ulList);

  for (let product of products) {
    const liList = document.createElement("li");
    ulList.appendChild(liList);
    const h2product = document.createElement("h2");
    h2product.innerHTML = product.name;
    liList.appendChild(h2product);
    const divPrice = document.createElement("div");
    divPrice.innerHTML = `price: ${product.price}`;
    liList.appendChild(divPrice);
    const divRating = document.createElement("div");
    divRating.innerHTML = `Rating: ${product.rating}`;
    liList.appendChild(divRating);
  }
}

renderProducts(products);
