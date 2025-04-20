let cart = JSON.parse(localStorage.getItem("cart")) || [];

let btnCheckout = document.getElementById("btn-checkout-js");

let cartList = document.getElementById("cart-list");
function renderCart() {
    let textCart = "";

    cart.forEach((food, index) => {
        textCart += `
        <tr>
            <td><img src="${food.image}" alt="${food.title}"
                    class="cart-item-img"></td>
            <td>${food.title}</td>
            <td>${(food.price).toLocaleString("vi-VN")}₫</td>
            <td>
                <div class="quantity-control">
                    <button class="qty-btn">-</button>
                    <span class="qty-number">${food.quantity}</span>
                    <button class="qty-btn">+</button>
                </div>
            </td>
            <td>${((food.price) * (food.quantity)).toLocaleString("vi-VN")}₫</td>
            <td><button class="btn-delete">Xóa</button></td>
        </tr>
        `
    });

    cartList.innerHTML = textCart;
}

btnCheckout.addEventListener('click', () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("cartItemsCount");
    cart = [];
    renderCart();
});


renderCart();