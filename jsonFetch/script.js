document.addEventListener("DOMContentLoaded", () => {
    fetch('data.json')  //json path 
        .then(response => {
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            return response.json();
        })
        .then(data => {
            displayProducts(data);
        })
        .catch(error => {
            console.error('There has been a problem with your fetch operation:', error);
        });
});

function displayProducts(products) {
    const container = document.getElementById('product-container');
    
    products.forEach(product => {
        const productDiv = document.createElement('div');
        productDiv.className = 'product';
        
        productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" alt="${product.title}">
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)} (${product.discountPercentage}% off)</p>
            <p><strong>Rating:</strong> ${product.rating}</p>
            <p><strong>Stock:</strong> ${product.stock} available</p>
            <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> ${product.shippingInformation}</p>
            <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
        `;
        
        container.appendChild(productDiv);
    });
}
