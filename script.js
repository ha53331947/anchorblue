// Product Data
const products = {
    men: [
        {
            id: 1,
            name: "Premium Cotton Shirt",
            price: 2499,
            image: "./assets/mens-shirt-blue.jpg",
            sizes: ["S", "M", "L", "XL", "XXL"],
            description: "Comfortable and stylish cotton shirt perfect for any occasion. Made with premium quality fabric."
        },
        {
            id: 2,
            name: "Formal Dress Pants",
            price: 3499,
            image: "./assets/mens-pants-formal.jpg",
            sizes: ["S", "M", "L", "XL", "XXL"],
            description: "Elegant formal pants with a perfect fit. Ideal for office wear and formal events."
        },
        {
            id: 3,
            name: "Designer Kurta",
            price: 4999,
            image: "https://valintaformens.com/cdn/shop/products/photo_2023-03-27_02-26-33_16.jpg?v=1679994476",
            sizes: ["S", "M", "L", "XL", "XXL"],
            description: "Traditional Pakistani kurta with modern design elements. Perfect for festive occasions."
        },
        {
            id: 4,
            name: "Casual Polo Shirt",
            price: 1999,
            image: "https://www.trespass.com/media/mf_webp/jpg/media/catalog/product/cache/ca61fa9d3bd05ef6fd63a3b37d6f22d9/b/r/brave-matopotr0014-brt-a_1.webp",
            sizes: ["S", "M", "L", "XL", "XXL"],
            description: "Comfortable polo shirt for casual outings. Breathable fabric for all-day comfort."
        },
        {
            id: 5,
            name: "Denim Jeans",
            price: 3999,
            image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSG6E68xSWLC7WuKqo587PesoiC-eaWHOxswA&s",
            sizes: ["S", "M", "L", "XL", "XXL"],
            description: "Classic denim jeans with a modern fit. Durable and stylish for everyday wear."
        },
        {
            id: 6,
            name: "Shalwar Kameez Set",
            price: 5999,
            image: "https://s.alicdn.com/@sc04/kf/Aaa9ddbc258364a109f03c5af103bbb999/2025-Custom-Made-High-Quality-Quick-Dry-Shalwar-Kameez-For-Men-Blank-Pakistani-Afghan-Suit-Party-Wedding-Dress-Two-Pcs-Dresses.jpg_300x300.jpg",
            sizes: ["S", "M", "L", "XL", "XXL"],
            description: "Complete traditional outfit with embroidered details. Perfect for special occasions."
        }
    ],
    women: [
        {
            id: 7,
            name: "Embroidered Kurta",
            price: 4999,
            image: "./assets/womens-kurta-traditional.jpg",
            sizes: ["XS", "S", "M", "L", "XL"],
            description: "Beautiful embroidered kurta with intricate designs. Perfect for festive celebrations."
        },
        {
            id: 8,
            name: "Elegant Dupatta",
            price: 1999,
            image: "./assets/womens-dupatta-elegant.jpg",
            sizes: ["XS", "S", "M", "L", "XL"],
            description: "Luxurious dupatta with delicate embroidery. Complements any traditional outfit."
        },
        {
            id: 9,
            name: "Designer Lawn Suit",
            price: 6999,
            image: "https://www.pakstyle.pk/cdn/shop/files/p17881-digital-print-lawn-dress.jpg?v=1759485094",
            sizes: ["XS", "S", "M", "L", "XL"],
            description: "Premium lawn fabric suit with modern prints. Comfortable for summer wear."
        },
        {
            id: 10,
            name: "Formal Trouser",
            price: 2999,
            image: "https://uniformcraft.com/cdn/shop/products/NavyBlueFemaleformalpant.png?v=1652339601",
            sizes: ["XS", "S", "M", "L", "XL"],
            description: "Elegant formal trouser with a perfect fit. Ideal for professional settings."
        },
        {
            id: 11,
            name: "Party Wear Dress",
            price: 8999,
            image: "https://www.pakstyle.pk/cdn/shop/files/p17382-embroidered-chiffon-party-dress.jpg?v=1759485225",
            sizes: ["XS", "S", "M", "L", "XL"],
            description: "Stunning party wear dress with embellishments. Make a statement at any event."
        },
        {
            id: 12,
            name: "Casual Kurti",
            price: 2499,
            image: "https://chasevalue.pk/cdn/shop/files/DZ7A0190_296d0814-5153-4d59-a6c2-7f40df8f48c6_940x.jpg?v=1701320351",
            sizes: ["XS", "S", "M", "L", "XL"],
            description: "Comfortable casual kurti for everyday wear. Stylish and practical."
        }
    ],
    kids: [
        {
            id: 13,
            name: "Colorful T-Shirt",
            price: 1299,
            image: "./assets/kids-tshirt-colorful.jpg",
            sizes: ["2-4Y", "4-6Y", "6-8Y", "8-10Y", "10-12Y"],
            description: "Fun and colorful t-shirt for active kids. Soft fabric for maximum comfort."
        },
        {
            id: 14,
            name: "Denim Jeans",
            price: 1999,
            image: "./assets/kids-jeans-denim.jpg",
            sizes: ["2-4Y", "4-6Y", "6-8Y", "8-10Y", "10-12Y"],
            description: "Durable denim jeans for kids. Perfect for playtime and casual outings."
        },
        {
            id: 15,
            name: "Party Dress",
            price: 3499,
            image: "https://cdn.shopify.com/s/files/1/0572/8685/2744/files/6_b8b49456-becb-461a-9cd4-d52c5e407457.webp?v=1751536409",
            sizes: ["2-4Y", "4-6Y", "6-8Y", "8-10Y", "10-12Y"],
            description: "Adorable party dress for special occasions. Makes your child look extra special."
        },
        {
            id: 16,
            name: "Casual Shorts",
            price: 999,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQm08zF0wJ7TxxWMq59KQVwcfoy4Vy1aHvKA&s",
            sizes: ["2-4Y", "4-6Y", "6-8Y", "8-10Y", "10-12Y"],
            description: "Comfortable shorts for summer. Lightweight and breathable."
        },
        {
            id: 17,
            name: "Traditional Kurta",
            price: 2499,
            image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSx82Lo_E_yOiyGq3UAR6__1zAvJnjf4W-iUg&s",
            sizes: ["2-4Y", "4-6Y", "6-8Y", "8-10Y", "10-12Y"],
            description: "Traditional kurta for kids. Perfect for festive celebrations."
        },
        {
            id: 18,
            name: "Sports Tracksuit",
            price: 2999,
            image: "https://images-cdn.ubuy.co.in/65afcc648d60bd163a103a0b-trapstar-children-s-trapstar-jogging.jpg",
            sizes: ["2-4Y", "4-6Y", "6-8Y", "8-10Y", "10-12Y"],
            description: "Complete sports tracksuit for active kids. Comfortable and stylish."
        }
    ]
};

// Shopping Cart - Load from localStorage
let cart = JSON.parse(localStorage.getItem('anchorBlueCart')) || [];

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    loadProducts();
    setupEventListeners();
    updateCartCount();
    loadCartFromStorage();
});

// Load cart from localStorage on page load
function loadCartFromStorage() {
    if (cart.length > 0) {
        updateCart();
    }
}

// Save cart to localStorage
function saveCartToStorage() {
    localStorage.setItem('anchorBlueCart', JSON.stringify(cart));
}

// Load Products
function loadProducts() {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (currentPage === 'index.html' || currentPage === '') {
        loadFeaturedProducts();
    } else if (currentPage === 'men.html') {
        loadCategoryProducts('men', 'menProducts');
    } else if (currentPage === 'women.html') {
        loadCategoryProducts('women', 'womenProducts');
    } else if (currentPage === 'kids.html') {
        loadCategoryProducts('kids', 'kidsProducts');
    }
}

function loadFeaturedProducts() {
    const container = document.getElementById('featuredProducts');
    if (!container) return;

    const featured = [
        ...products.men.slice(0, 2),
        ...products.women.slice(0, 2),
        ...products.kids.slice(0, 2)
    ];

    container.innerHTML = featured.map(product => createProductCard(product)).join('');
}

function loadCategoryProducts(category, containerId) {
    const container = document.getElementById(containerId);
    if (!container) return;

    container.innerHTML = products[category].map(product => createProductCard(product)).join('');
}

function createProductCard(product) {
    return `
        <div class="col-md-4 col-sm-6">
            <div class="product-card">
                <div class="product-image-wrapper">
                    <img src="${product.image}" alt="${product.name}" class="product-image">
                </div>
                <div class="product-info">
                    <h5 class="product-name">${product.name}</h5>
                    <div class="product-price">PKR ${product.price.toLocaleString()}</div>
                    <div class="product-sizes">
                        ${product.sizes.slice(0, 3).map(size => `<span class="size-badge">${size}</span>`).join('')}
                        ${product.sizes.length > 3 ? '<span class="size-badge">+more</span>' : ''}
                    </div>
                    <button class="btn btn-primary w-100 btn-view-product" onclick="viewProduct(${product.id})">
                        View Details
                    </button>
                </div>
            </div>
        </div>
    `;
}

// View Product Details
function viewProduct(productId) {
    const product = findProductById(productId);
    if (!product) return;

    document.getElementById('modalProductName').textContent = product.name;
    document.getElementById('modalProductImage').src = product.image;
    document.getElementById('modalProductImage').alt = product.name;
    document.getElementById('modalProductPrice').textContent = `PKR ${product.price.toLocaleString()}`;
    document.getElementById('modalProductDescription').textContent = product.description;

    const sizeOptions = document.getElementById('modalSizeOptions');
    sizeOptions.innerHTML = product.sizes.map(size => 
        `<div class="size-option" data-size="${size}">${size}</div>`
    ).join('');

    // Add click handlers to size options
    document.querySelectorAll('.size-option').forEach(option => {
        option.addEventListener('click', function() {
            document.querySelectorAll('.size-option').forEach(opt => opt.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Set first size as default
    document.querySelector('.size-option').classList.add('active');

    // Store product ID in modal
    document.getElementById('addToCartBtn').setAttribute('data-product-id', productId);

    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('productModal'));
    modal.show();
}

function findProductById(id) {
    for (let category in products) {
        const product = products[category].find(p => p.id === id);
        if (product) return product;
    }
    return null;
}

// Add to Cart
function setupEventListeners() {
    const addToCartBtn = document.getElementById('addToCartBtn');
    if (addToCartBtn) {
        addToCartBtn.addEventListener('click', addToCart);
    }

    const cartBtn = document.getElementById('cartBtn');
    if (cartBtn) {
        cartBtn.addEventListener('click', (e) => {
            e.preventDefault();
            toggleCart();
        });
    }

    const closeCart = document.getElementById('closeCart');
    if (closeCart) {
        closeCart.addEventListener('click', toggleCart);
    }
}

function addToCart() {
    const productId = parseInt(document.getElementById('addToCartBtn').getAttribute('data-product-id'));
    const selectedSize = document.querySelector('.size-option.active');
    const quantity = parseInt(document.getElementById('modalQuantity').value);

    if (!selectedSize) {
        alert('Please select a size');
        return;
    }

    const product = findProductById(productId);
    if (!product) return;

    const cartItem = {
        id: Date.now(),
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        size: selectedSize.getAttribute('data-size'),
        quantity: quantity
    };

    cart.push(cartItem);
    saveCartToStorage();
    updateCart();
    updateCartCount();

    // Close modal
    const modal = bootstrap.Modal.getInstance(document.getElementById('productModal'));
    modal.hide();

    // Show success message
   Swal.fire({
  title: "Added to Cart!",
  text: "Your product has been successfully added.",
  icon: "success",
  confirmButtonText: "Continue Shopping",
  confirmButtonColor: "#3085d6",
  background: "#fff",
  color: "#333",
  timer: 2000,
  timerProgressBar: true,
  showClass: {
    popup: 'animate__animated animate__fadeInDown'
  },
  hideClass: {
    popup: 'animate__animated animate__fadeOutUp'
  }
});
}

function toggleCart() {
    const cartSidebar = document.getElementById('cartSidebar');
    cartSidebar.classList.toggle('active');
}

function updateCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="text-center text-muted">Your cart is empty</p>';
        document.getElementById('cartTotal').textContent = 'PKR 0';
        return;
    }

    cartItemsContainer.innerHTML = cart.map(item => `
        <div class="cart-item">
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <div class="cart-item-details">
                <div class="cart-item-name">${item.name}</div>
                <div class="cart-item-size">Size: ${item.size}</div>
                <div class="cart-item-price">PKR ${item.price.toLocaleString()} x ${item.quantity}</div>
            </div>
            <button class="btn-remove-item" onclick="removeFromCart(${item.id})">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `).join('');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    document.getElementById('cartTotal').textContent = `PKR ${total.toLocaleString()}`;
}

function removeFromCart(itemId) {
    cart = cart.filter(item => item.id !== itemId);
    saveCartToStorage();
    updateCart();
    updateCartCount();
}

function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// Make functions global
window.viewProduct = viewProduct;
window.removeFromCart = removeFromCart;