let cart = JSON.parse(localStorage.getItem("cart") || "[]");

let cartCount = document.querySelector(".cart-count");
let cartItemsCount = parseInt(localStorage.getItem("cartItemsCount")) || 0;
cartCount.innerHTML = cartItemsCount;

function addToCart(productId) {
    const isLoggedIn = localStorage.getItem("loggedIn") === "true";
    if (!isLoggedIn) {
        window.location.href = "https://phat-nguyen06.github.io/gogi-html-css-js/login.html";
        return;
    }

    const [source, indexStr] = productId.split("-");
    const index = parseInt(indexStr) - 1;

    let product;
    if (source === "bestSellers") {
        product = bestSellers[index];
    } else if (source === "menuFoods") {
        product = menuFoods[index];
    }

    if (!product) return;

    let productInCart = cart.find(item => item.id === productId);
    if (!productInCart) {
        cart.push({ ...product, id: productId, quantity: 1 });
    } else {
        productInCart.quantity += 1;
    }

    cartItemsCount++;
    cartCount.innerHTML = cartItemsCount;
    localStorage.setItem("cartItemsCount", cartItemsCount);


    localStorage.setItem("cart", JSON.stringify(cart));
    Toastify({
        text: "Đã thêm món vào giỏ hàng!",
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        backgroundColor: "linear-gradient(to right, #a67b5b, #8b5e3c)",
        stopOnFocus: true,
        style: {
            color: "#fff",
            fontWeight: "bold",
            borderRadius: "12px",
            fontSize: "14px",
            fontFamily: "inherit",
        },
        avatar: "https://cdn-icons-png.flaticon.com/512/34/34568.png"
    }).showToast();
}
