
let products = [];

async function addProducts() {
    try {
        const response = await fetch("http://localhost:3000/items"); // Replace with your actual API endpoint
        const data = await response.json();
        products = data; // assuming the API returns an array of products
    } catch (error) {
        console.error('Failed to fetch products:', error);
    }
}

function populateProducts() {
    const productsContainer = document.getElementById('contents');
    productsContainer.innerHTML = ''; // Clear existing entries

    products.forEach(product => {
        const productElement = document.createElement('div');
        productElement.innerHTML = `
            <img src="${product.imageUrl}" alt="${product.title}">
            <h4>${product.title}</h4>
            <p>${product.date}</p>
            <p>${product.location}</p>
            <h4>$${product.price}</h4>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productsContainer.appendChild(productElement);
    });
}

let cart = [];

function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        cart.push({...product, quantity: 1}); // Add product to cart with initial quantity of 1
        updateCartUI(); // Function to update the cart UI
    }
}

function deleteProductFromCart(productId) {
    cart = cart.filter(product => product.id !== productId);
    updateCartUI();
}

function increaseProductQuantity(productId) {
    const product = cart.find(p => p.id === productId);
    if (product) {
        product.quantity += 1;
        updateCartUI();
    }
}

function reduceProductQuantity(productId) {
    const product = cart.find(p => p.id === productId);
    if (product && product.quantity > 1) {
        product.quantity -= 1;
        updateCartUI();
    } else {
        deleteProductFromCart(productId); // Remove product from cart if quantity is less than 1
    }
}

function updateCartUI() {
    // Implement your logic to reflect cart changes on the webpage
    console.log(cart); // For demonstration, log the cart state to the console
}

document.addEventListener('DOMContentLoaded', () => {
    addProducts().then(() => populateProducts());
});