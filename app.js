const API_URL = 'http://localhost:3000/getProducts'
let products = [];

const getProducts = () => {
    fetch(API_URL)
    .then(response => response.json())
    .catch(error => {
        alertManager('error', 'Ocurrió un problema al cargar los productos');
    })
    .then(data =>{
        products = data;
        console.log(data);
        renderResult(products);
    })
}
const productsList = document.querySelector('#cardD');

const renderResult = (products) => {
    let listHTML = "";
    products.forEach(product =>{
        listHTML += `
            <div class="card col-3 m-1 m-auto">
                <img class="card-img-top" src="${product.url_image}" alt="Card image cap">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="card-price">${product.price}</p>
                </div>
                
                <div class="card-footer">
                    <a href="#" class="card-link">Details</a>
                    <!-- <a href="#" class="card-link">Add to card</a> -->
                </div>
            </div>
        `
    })
    console.log(productsList)
    productsList.innerHTML = listHTML;
}
getProducts();