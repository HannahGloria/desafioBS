const API_URL = 'http://localhost:3000/getProducts'
const API_CATEGORY = 'http://localhost:3000/getCategories'
const API_PRODUCTBYCAT = 'http://localhost:3000/getProductsByCat/'
// let products = [];
// let categories = [];
const filterByCat = document.querySelector('.categorySelect');
const searchButton = document.getElementById('search');
const cardD = document.getElementById('cardD')
///---------------------EVENTS------------------------///
filterByCat.addEventListener('change', filterByCat);
searchButton = addEventListener('click', search);
///---------------------END EVENTS--------------------///


//products
// const getProducts = () => {
//     fetch(API_URL)
//     .then(response => response.json())
//     .catch(error => {
//         alertManager('error', 'Ocurrió un problema al cargar los productos');
//     })
//     .then(data =>{
//         products = data;
//         console.log(data);
//         renderResult(products);
//     })
// }
// const productsList = document.querySelector('#cardD');
// const renderResult = (products) => {
//     let listHTML = "";
//     products.forEach(product =>{
//         listHTML += `
//             <div class="card col-3 m-1 m-auto">
//                 <img class="card-img-top" src="${product.url_image}" alt="Card image cap">
//                 <div class="card-body">
//                     <h5 class="card-title">${product.name}</h5>
//                     <p class="card-price">${product.price}</p>
//                 </div>
                
//                 <div class="card-footer">
//                     <a href="#" class="card-link">Details</a>
//                     <!-- <a href="#" class="card-link">Add to card</a> -->
//                 </div>
//             </div>
//         `
//     })
//     console.log(productsList)
//     productsList.innerHTML = listHTML;
// }
// getProducts();
//fin products

//categories
// const getCategories = () => {
//     fetch(API_CATEGORY)
//     .then(response => response.json())
//     .catch(error => {
//         alertManager('error, Ocurrio un problema al cargar las categorias');
//     })
//     .then(data =>{
//         categories => data;
//         console.log(data);
//         renderResult(categories);
//     })
// }
// const categoriesList = document.querySelector('#categorySelect');
// const renderResultCat = (categories) => {
//     let listHTML = "";
//     categories.forEach(category =>{
//         listHTML += `
//         <select id="categorySelect">
//             <option value="">"${category.name}"</option>
//         </select>
//         `
//     })
//     console.log(categoriesList)
//     categoriesList.innerHTML = listHTML;
// }

//getProducts();
const getProducts = async () => {
    const products = await axios.get('API_URL')
    .then(res=>res.data)
    .catch((error) => {
        if(error.response){
            console.log (err.response.data)
            console.log(err.response.status);
            console.log(err.response.headers);
        }
    })
}
//end products 

// getCategories();
const getCategories = async () => {
    const categories = await axios.get('API_CATEGORY')
    .then(res => res.data)
    .catch((err)=>{
        if(err.response){
            console.log(err.response.data);
            console.log(err.response.status);
            console.log(err.response.headers);
        }
    })
    return categories;
}
//fin categories

//productsbycat
const getProductsByCat = async (category) => {
    console.log(category);
    const products = await axios.get(`http://localhost:3000/getProductsByCat/${category}`)
    .then(res=>res.data)
    .catch((err) =>{
        console.log(err.response.data);
        console.log(err.response.status);
        console.log(err.response.headers);
    })
    return products;
}
//end productsbycat

const createCatFilter = (categories) => {
    categories.forEach(cat => {
        const option = document.createElement('option')
        option.value = category.id 
        option.innerText= category.name
        filterByCat.appendChild(option)
    })
}

const CardProduct = (product) => {
    const card = document.createElement('div');
    card.classList.add('card')
}

const titleHeader = document.createElement('div');
titleHeader.classList.add('tittleHeader')

const title = document.createElement('h2');
title.innerText = product.name
titleHeader.appendChild(title);


const img = document.createElement('div');
img.src = product.url_image;
img.alt = 'imagen del producto';
imgArea.appendChild(img)

const price = document.createElement('h3')
price.innerText = `${product.price}`
textArea.appendChild(price)

card.appendChild(titleHeader)
card.appendChild(imgArea)
card.appendChild(textArea)

const allProducts = (products) => {
    cardD.innerHTML = ''
    cards = [];
    products.forEach((product) => {
        const card = createProductCard(product)
        cards.appendChild(cards)
    })
}

function search(){
    const parameter = searchBar.value
    getProducts.then(products => allProducts(products))
}

function filterByCategory(e) {
    console.log(filterByCat.value)
    if(filterByCat.value==='All'){
        getProducts().then(products => allProducts(products))
    }
}

getProducts().then(products=>allProducts(products))
getCategories().then(categories=>createCatFilter(categories))