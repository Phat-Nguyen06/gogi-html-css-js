let bestSellers = [
    {
        title: "Diềm bụng bò Mỹ",
        price: 120000,
        sold: 150,
        rating: 5,
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-bestseller/diem_bung_tuoi_200_6.png"
    },
    {
        title: "Lẩu bull gogi",
        price: 95000,
        sold: 230,
        rating: 4,
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-bestseller/lau_bulgogi_2.png"
    },
    {
        title: "Canh kim chi",
        price: 110000,
        sold: 190,
        rating: 5,
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-bestseller/Canh_kim_chi_3.png"
    },
    {
        title: "Tôm nướng Gogi",
        price: 105000,
        sold: 100,
        rating: 3,
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-bestseller/tom_alc_4.png"
    },
    {
        title: "Má heo Mỹ tươi",
        price: 130000,
        sold: 215,
        rating: 4,
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-bestseller/nac_vai_cay_5.png"
    },
    {
        title: "Sườn Non Bò Mỹ",
        price: 115000,
        sold: 180,
        rating: 5,
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-bestseller/ba_chi_bo_my_sot_mat_ong_7.png"
    }
];


let bestSellersList = document.querySelector(".header-bestseller-container-left-js");

function renderBestSellersList() {
    let textBestSellersList = "";

    bestSellers.forEach((bestSellers, index) => {
        textBestSellersList += `
      <div class="header-bestseller-container-left-item" id="bestseller-${index + 1}">
        <div class="bestseller-card">
          <img src="${bestSellers.image}" alt="${bestSellers.title}" class="bestseller-card-img">
          <div class="bestseller-card-title"><span>${bestSellers.title}</span></div>
          <div class="bestseller-card-price"><span>${bestSellers.price.toLocaleString("vi-VN")}₫</span></div>
          <div class="bestseller-card-sales">
            <div>${renderStars(bestSellers.rating)}</div>
            <span>Đã bán: ${bestSellers.sold}</span>
          </div>
          <div class="bestseller-card-action">
            <button class="bestseller-card-action-card" onclick="addToCart('bestSellers-${index + 1}')">Thêm vào giỏ</button>
          </div>
        </div>
      </div>
      `;
    });

    bestSellersList.innerHTML = textBestSellersList;
}

function renderStars(rating) {
    let stars = "";
    for (let i = 1; i <= 5; i++) {
        stars += i <= rating ? "★" : "☆";
    }
    return stars;
}

const isLoggedIn = localStorage.getItem("loggedIn") === "true";

renderBestSellersList();