let cart = JSON.parse(localStorage.getItem("cart")) || [];

let btnCheckout = document.getElementById("btn-checkout-js");

let cartList = document.getElementById("cart-list");
let total = 0;
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
                    <button class="qty-btn" onclick="changeQuantity(${index}, -1)">-</button>
                    <span class="qty-number">${food.quantity}</span>
                    <button class="qty-btn" onclick="changeQuantity(${index}, 1)">+</button>
                </div>
            </td>
            <td>${((food.price) * (food.quantity)).toLocaleString("vi-VN")}₫</td>
            <td><button class="btn-delete" onclick="removeFoods(${index})">Xóa</button></td>
        </tr>
        `
    });

    cartList.innerHTML = textCart;

    let cartTotalEl = document.querySelector(".cart-total-price");

    if (cart.length == 0) {
        cartTotalEl.textContent = "Tổng: 0₫";
    }
    else {
        total = 0;
        cart.forEach((food, index) => {
            total += (food.price * food.quantity);
        });

        cartTotalEl.textContent = `Tổng: ${total.toLocaleString("vi-VN")}₫`;
    }
}

btnCheckout.addEventListener('click', () => {
    localStorage.removeItem("cart");
    localStorage.removeItem("cartItemsCount");
    cart = [];
    renderCart();
});

function changeQuantity(index, amount) {
    cart[index].quantity += amount;
    if (cart[index].quantity <= 0) {
        cart.splice(index, 1);
    }
    renderCart();
    localStorage.setItem("cart", JSON.stringify(cart));
    localStorage.setItem("cartItemsCount", cart.reduce((acc, item) => acc + item.quantity, 0));

}

function removeFoods(index) {
    const row = cartList.children[index];
    row.classList.add("fade-out");

    setTimeout(() => {
        cart.splice(index, 1);
        renderCart();
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartItemsCount", cart.reduce((acc, item) => acc + item.quantity, 0));
    }, 500);
}



renderCart();