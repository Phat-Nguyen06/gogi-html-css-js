const currentUser = JSON.parse(localStorage.getItem("currentUser"));
// let cart = JSON.parse(localStorage.getItem("cart")) || [];
const avatarContainer = document.getElementById("nav-avatar-container");

if (currentUser) {
  const avatarImg = document.createElement("img");
  avatarImg.classList.add("nav-avatar");
  avatarImg.src = currentUser.avatar || "/assets/avatar-default.png";
  avatarImg.alt = "avatar";

  avatarContainer.appendChild(avatarImg);
}

// document.getElementById("cart-js").addEventListener("click", () => {
//   window.location.href = "/user/cart.html";
// });

// Hộp thông tin tài khoaan
avatarContainer.addEventListener("click", () => {
  const infoBox = document.getElementById("user-info-box");
  const userAvatarLarge = document.querySelector(".user-avatar-large");
  let username = document.querySelector(".username");
  let logout = document.querySelector(".logout")
  let cartNav = document.getElementById("cartNav")

  userAvatarLarge.src = currentUser.avatar || "/assets/avatar-default.png";
  username.textContent = currentUser.username;

  cartNav.addEventListener("click", () => {
    window.location.href = "https://phat-nguyen06.github.io/gogi-html-css-js/user/cart.html";
  });

  logout.addEventListener("click", () => {
    localStorage.removeItem("loggedIn");
    localStorage.removeItem("currentUser");
    localStorage.removeItem("cart");
    localStorage.removeItem("cartItemsCount");
    window.location.href = "https://phat-nguyen06.github.io/gogi-html-css-js/index.html";
  });

  infoBox.classList.toggle("hidden");
});




