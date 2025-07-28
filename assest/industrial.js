async function loadProducts() {
  const container = document.getElementById('product-list');
  try {
    const res = await fetch('https://fakestoreapi.com/products/category/electronics');
    const data = await res.json();

    container.innerHTML = data.map(product => `
      <div class="product-card">
        <img src="${product.image}" alt="${product.title}" style="max-width:100px; height:auto;">
        <div class="product-info">
          <p><strong>${product.title}</strong></p>
          <p>Price: ₱${product.price}</p>
        </div>
      </div>
    `).join('');

    setTimeout(() => {
      const cards = document.querySelectorAll('.product-card');
      cards.forEach((card, index) => {
        setTimeout(() => {
          card.classList.add('show');
        }, index * 150);
      });
    }, 100);

  } catch (error) {
    container.innerHTML = '<p>Failed to load product data.</p>';
  }
}

loadProducts();
