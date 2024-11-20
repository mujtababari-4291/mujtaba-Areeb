let cart = [];
let total = 0;

function addToCart(productName, productPrice) {
    cart.push({ name: productName, price: productPrice });
    total += productPrice;
    updateCart();
}

function updateCart() {
    const cartList = document.getElementById('cart-list');
    const totalPrice = document.getElementById('total-price');

    cartList.innerHTML = '';
    cart.forEach(item => {
        const li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        cartList.appendChild(li);
    });

    totalPrice.textContent = total.toFixed(2);
}

function placeOrder() {
    if (cart.length === 0) {
        alert("Your cart is empty.");
        return;
    }

    alert(`Order placed! Total: $${total.toFixed(2)}`);
    clearCart();
}

function clearCart() {
    cart = [];
    total = 0;
    updateCart();
}
