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
    Toastify({
        text: "Thanh toán thành công! Cảm ơn bạn đã đặt món tại GOGI HOUSE!",
        duration: 4000,
        gravity: "top",
        position: "center",
        backgroundColor: "#6b4c3b",
        style: {
            color: "#fff",
            fontWeight: "bold",
            fontSize: "16px",
            borderRadius: "8px",
            padding: "12px 20px",
            boxShadow: "0 5px 12px rgba(0,0,0,0.3)"
        },
        avatar: "https://cdn-icons-png.flaticon.com/512/3595/3595455.png" // icon thanh toán
    }).showToast();
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
        Toastify({
            text: "Đã xóa món ăn khỏi giỏ hàng",
            duration: 3000,
            gravity: "top",
            position: "right",
            backgroundColor: "#3a2a26",
            stopOnFocus: true,
            style: {
                color: "#fff",
                borderRadius: "8px",
                fontWeight: "bold"
            }
        }).showToast();
        renderCart();
        localStorage.setItem("cart", JSON.stringify(cart));
        localStorage.setItem("cartItemsCount", cart.reduce((acc, item) => acc + item.quantity, 0));
    }, 500);
}


renderCart();