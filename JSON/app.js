document.addEventListener('DOMContentLoaded', function() {
    fetch('http://localhost:3000/products')
    .then(response => response.json())
    .then(products => {
        const productList = document.getElementById('product-list');
        products.forEach(product => {
            const li = document.createElement('li');
            li.textContent = `${product.name} - $${product.price}: ${product.description}`;
            productList.appendChild(li);
        });
    })
    .catch(error => console.error('Error fetching data:', error));
});
