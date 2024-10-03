document.addEventListener("DOMContentLoaded", () => {
  let productsData = [];
  fetch("data.json") //json path
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      productsData = data; // Save fetched data to re-use for filtering
      displayProducts(data);
    })
    .catch((error) => {
      console.error(
        "There has been a problem with your fetch operation:",
        error
      );
    });
});

function displayProducts(products) {
  const container = document.getElementById("product-container");
  container.innerHTML = ""; // Clear previous products

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.className = "product";

    productDiv.innerHTML = `
            <h2>${product.title}</h2>
            <img src="${product.thumbnail}" alt="${product.title}">
            <p><strong>Description:</strong> ${product.description}</p>
            <p><strong>Price:</strong> $${product.price.toFixed(2)} (${
      product.discountPercentage
    }% off)</p>
            <p><strong>Rating:</strong> ${product.rating}</p>
            <p><strong>Stock:</strong> ${product.stock} available</p>
            <p><strong>Warranty:</strong> ${product.warrantyInformation}</p>
            <p><strong>Shipping:</strong> ${product.shippingInformation}</p>
            <p><strong>Return Policy:</strong> ${product.returnPolicy}</p>
            <button>Buy Now</button>
        `;

    container.appendChild(productDiv);
  });
}

function applyFilters() {
  const nameFilter = document.getElementById("searchName").value.toLowerCase();
  const priceFilter = parseFloat(document.getElementById("searchPrice").value);
  const filteredProducts = productsData.filter((product) => {
    return (
      product.title.toLowerCase().includes(nameFilter) &&
      product.price <= (priceFilter || Infinity)
    ); // Use Infinity as fallback if no price entered
  });

  displayProducts(filteredProducts);
}
