// Load cart from localStorage
let cart = JSON.parse(localStorage.getItem('anchorBlueCart')) || [];

// Initialize checkout page
document.addEventListener('DOMContentLoaded', function() {
    loadOrderItems();
    setupPaymentMethodToggle();
    setupCheckoutForm();
    updateCartCount();
});

// Load order items in the summary
function loadOrderItems() {
    const orderItemsContainer = document.getElementById('orderItems');
    
    if (cart.length === 0) {
        orderItemsContainer.innerHTML = `
            <div class="text-center py-4">
                <i class="fas fa-shopping-cart text-muted" style="font-size: 3rem;"></i>
                <p class="text-muted mt-3">Your cart is empty</p>
                <a href="index.html" class="btn btn-primary mt-2">Continue Shopping</a>
            </div>
        `;
        document.getElementById('subtotal').textContent = 'PKR 0';
        document.getElementById('orderTotal').textContent = 'PKR 0';
        
        // Disable form submission if cart is empty
        const checkoutForm = document.getElementById('checkoutForm');
        const submitButton = checkoutForm.querySelector('button[type="submit"]');
        submitButton.disabled = true;
        return;
    }

    // Display cart items
    orderItemsContainer.innerHTML = cart.map(item => `
        <div class="order-item">
            <img src="${item.image}" alt="${item.name}" class="order-item-image">
            <div class="order-item-details">
                <div class="order-item-name">${item.name}</div>
                <div class="order-item-meta">Size: ${item.size} | Qty: ${item.quantity}</div>
                <div class="order-item-price">PKR ${(item.price * item.quantity).toLocaleString()}</div>
            </div>
        </div>
    `).join('');

    // Calculate totals
    const subtotal = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const deliveryCharges = subtotal >= 5000 ? 0 : 200;
    const total = subtotal + deliveryCharges;

    document.getElementById('subtotal').textContent = `PKR ${subtotal.toLocaleString()}`;
    document.getElementById('deliveryCharges').textContent = deliveryCharges === 0 ? 'FREE' : `PKR ${deliveryCharges}`;
    document.getElementById('orderTotal').textContent = `PKR ${total.toLocaleString()}`;
}

// Setup payment method toggle
function setupPaymentMethodToggle() {
    const paymentMethods = document.querySelectorAll('input[name="paymentMethod"]');
    const cardPaymentDetails = document.getElementById('cardPaymentDetails');

    paymentMethods.forEach(method => {
        method.addEventListener('change', function() {
            if (this.value === 'card') {
                cardPaymentDetails.style.display = 'block';
                // Make card fields required
                document.getElementById('cardNumber').required = true;
                document.getElementById('expiryDate').required = true;
                document.getElementById('cvv').required = true;
                document.getElementById('cardholderName').required = true;
            } else {
                cardPaymentDetails.style.display = 'none';
                // Make card fields optional
                document.getElementById('cardNumber').required = false;
                document.getElementById('expiryDate').required = false;
                document.getElementById('cvv').required = false;
                document.getElementById('cardholderName').required = false;
            }
        });
    });
}

// Setup checkout form submission
function setupCheckoutForm() {
    const checkoutForm = document.getElementById('checkoutForm');
    
    checkoutForm.addEventListener('submit', function(e) {
        e.preventDefault();

        if (cart.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        // Get form data
        const formData = {
            firstName: document.getElementById('firstName').value,
            lastName: document.getElementById('lastName').value,
            email: document.getElementById('email').value,
            phone: document.getElementById('phone').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            postalCode: document.getElementById('postalCode').value,
            paymentMethod: document.querySelector('input[name="paymentMethod"]:checked').value,
            items: cart,
            subtotal: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0),
            deliveryCharges: cart.reduce((sum, item) => sum + (item.price * item.quantity), 0) >= 5000 ? 0 : 200
        };

        // If card payment, get card details
        if (formData.paymentMethod === 'card') {
            formData.cardDetails = {
                cardNumber: document.getElementById('cardNumber').value,
                expiryDate: document.getElementById('expiryDate').value,
                cvv: document.getElementById('cvv').value,
                cardholderName: document.getElementById('cardholderName').value
            };
        }

        // Generate order ID
        const orderId = 'ORD-' + Date.now();
        
        // Store order in localStorage (in real app, send to backend)
        const orders = JSON.parse(localStorage.getItem('anchorBlueOrders')) || [];
        orders.push({
            orderId: orderId,
            orderData: formData,
            orderDate: new Date().toISOString()
        });
        localStorage.setItem('anchorBlueOrders', JSON.stringify(orders));

        // Clear cart
        localStorage.removeItem('anchorBlueCart');
        cart = [];

        // Show success modal
        document.getElementById('orderId').textContent = orderId;
        const successModal = new bootstrap.Modal(document.getElementById('successModal'));
        successModal.show();

        // Reset form
        checkoutForm.reset();
    });
}

// Update cart count in navbar
function updateCartCount() {
    const count = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = count;
    }
}

// Format card number input
document.addEventListener('DOMContentLoaded', function() {
    const cardNumberInput = document.getElementById('cardNumber');
    if (cardNumberInput) {
        cardNumberInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\s/g, '');
            let formattedValue = value.match(/.{1,4}/g)?.join(' ') || value;
            e.target.value = formattedValue;
        });
    }

    const expiryDateInput = document.getElementById('expiryDate');
    if (expiryDateInput) {
        expiryDateInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length >= 2) {
                value = value.slice(0, 2) + '/' + value.slice(2, 4);
            }
            e.target.value = value;
        });
    }

    const cvvInput = document.getElementById('cvv');
    if (cvvInput) {
        cvvInput.addEventListener('input', function(e) {
            e.target.value = e.target.value.replace(/\D/g, '');
        });
    }
});