let menuFoods = JSON.parse(localStorage.getItem("menuFoods")) || [
    {
        title: "Salad Cá Hồi",
        price: 89000,
        sold: 1,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food1-salad-ca-hoi.png"
    },
    {
        title: "Salad mùa xuân",
        price: 79000,
        sold: 3,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food2-salad-mua-xuan.png"
    },
    {
        title: "Há cảo truyền thống Hàn Quốc",
        price: 79000,
        sold: 4,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food3-há cao-truyen-thong-hàn-quoc.png"
    },
    {
        title: "Set kimbap (ALC)",
        price: 69000,
        sold: 999,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food4-set-kim-bap (ALC).png"
    },
    {
        title: "Toboki xào hải sản",
        price: 109000,
        sold: 2,
        rating: 4,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food5-toboki-xao-hai-san.png"
    },
    {
        title: "Bánh Xèo Hải Sản",
        price: 129000,
        sold: 0,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food6-banh-xeo-hai-san.png"
    },
    {
        title: "Nấm nướng",
        price: 19000,
        sold: 7,
        rating: 5,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food7-nam-nuong.png"
    },
    {
        title: "Salad hành paro",
        price: 69000,
        sold: 0,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food8-salad-hanh-paro.png"
    },
    {
        title: "Salad cá ngừ (ALC)",
        price: 79000,
        sold: 6,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food9-salad-ca-ngu(ALC.png"
    },
    {
        title: "Salad Hoa Quả",
        price: 99000,
        sold: 4,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food10-salad-hoa-qua.png"
    },
    {
        title: "Salad tổng hợp",
        price: 69000,
        sold: 8,
        rating: 4,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food11-salad-tong-hop.png"
    },
    {
        title: "Salad cải bó xôi",
        price: 69000,
        sold: 7,
        rating: 5,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food12-salad-cai-bo-soi.png"
    },
    {
        title: "Mỳ tương đen",
        price: 79000,
        sold: 7,
        rating: 0,
        type: "Cơm/Canh/Mỳ",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food13-my-tuong-den.png"
    },
    {
        title: "Miến xào",
        price: 79000,
        sold: 2,
        rating: 0,
        type: "Cơm/Canh/Mỳ",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food14-mien-xao.png"
    },
    {
        title: "Cơm rang kim chi (ALC)",
        price: 79000,
        sold: 2,
        rating: 0,
        type: "Cơm/Canh/Mỳ",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food15-com-rang-kim-chi(ALC).png"
    },
    {
        title: "Canh lòng bò",
        price: 250000,
        sold: 0,
        rating: 0,
        type: "Salad/Khai Vị",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food16-canh-long-bo.png"
    },
    {
        title: "Canh rong biển thịt",
        price: 109000,
        sold: 1,
        rating: 0,
        type: "Cơm/Canh/Mỳ",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food17-canh-rong-bien-thit.png"
    },
    {
        title: "Cơm Hàn Quốc",
        price: 10000,
        sold: 3,
        rating: 0,
        type: "Cơm/Canh/Mỳ",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food18-com-han-quoc.png"
    },
    {
        title: "Cơm bát đá nóng",
        price: 69000,
        sold: 4,
        rating: 0,
        type: "Cơm/Canh/Mỳ",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food19-com-bat-da-nong.png"
    },
    {
        title: "Canh sườn bò",
        price: 89000,
        sold: 999,
        rating: 0,
        type: "Cơm/Canh/Mỳ",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food20-canh-suong-bo.png"
    },
    {
        title: "Sườn Non Bò Mỹ Sốt Obathan",
        price: 415000,
        sold: 2,
        rating: 5,
        type: "Thịt Bò",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food21-suon-non-bo-my-la-sot-galbi.png"
    },
    {
        title: "Sườn Non Bò Mỹ LA Sốt Galbi 150gr",
        price: 239000,
        sold: 0,
        rating: 0,
        type: "Thịt Bò",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food22-suon-non-bo-my-sot- obathan.png"
    },
    {
        title: "Sườn Non Bò Mỹ LA Sốt Galbi 150gr",
        price: 239000,
        sold: 7,
        rating: 5,
        type: "Thịt Bò",
        image: "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-foods/food23-suon-non-bo-my-sot- obathan.png"
    }
];

localStorage.setItem("menuFoods", JSON.stringify(menuFoods));

let currentPage = 1;
let foodsPerPage = 8;

let menuFoodsList = document.querySelector(".product-grid-js");
let pageNumber = document.querySelector(".page-number");
function renderMenuFoods(data = menuFoods) {
    let textMenuFoods = "";

    let start = (currentPage - 1) * foodsPerPage;
    let end = start + foodsPerPage;
    let foodsToShow = data.slice(start, end);

    foodsToShow.forEach((food, index) => {
        textMenuFoods += `
        <div class="product-card">
            <i class="fa-solid fa-heart favourite-dish" id="favourite-dish"></i>
            <img src="${food.image}" alt="${food.title}">
            <h4>${food.title}</h4>
            <p class="type">LOẠI: ${food.type}</p>
            <p class="price">Giá: ${food.price.toLocaleString("vi-VN")}₫</p>
            <div class="rating">${renderStars(food.rating)}</div>
            <p class="sold">đã bán ${food.sold}</p>
            <div class="product-card-button-container">
                <button class="btn-review">Xem đánh giá</button>
                <button class="btn-cart" onclick="addToCart('menuFoods-${index + 1}')">
                    <i class="fa-solid fa-cart-shopping"></i>
                </button>
            </div>
        </div>
        `;
    });

    menuFoodsList.innerHTML = textMenuFoods;

    // Chỉ phân trang khi không tìm kiếm
    if (data.length === menuFoods.length) {
        renderPagination();
    } else {
        paginationContainer.innerHTML = ""; // ẩn phân trang khi đang tìm
    }
}


// PHÂN TRANG //
let paginationContainer = document.querySelector(".pagination-js")
function renderPagination() {
    let totalPage = Math.ceil(menuFoods.length / foodsPerPage);
    pageNumber.textContent = `${currentPage}/${totalPage}`;
    paginationContainer.innerHTML = "";

    // Nút Prev
    let prevBtn = document.createElement("button");
    prevBtn.textContent = "<";
    if (currentPage === 1) {
        prevBtn.disabled = true;
    } else {
        prevBtn.addEventListener("click", () => {
            currentPage--;
            renderMenuFoods();
        });
    }
    paginationContainer.appendChild(prevBtn);

    // Nếu tổng số trang <= 5, hiển thị hết
    if (totalPage <= 5) {
        for (let i = 1; i <= totalPage; i++) {
            let pageBtn = document.createElement("button");
            pageBtn.textContent = i;

            if (i === currentPage) pageBtn.classList.add("active");

            pageBtn.addEventListener("click", () => {
                currentPage = i;
                renderMenuFoods();
            });
            paginationContainer.appendChild(pageBtn);
        }
    }
    // Nếu có nhiều hơn 5 trang
    else {
        // Trường hợp đầu trang (1 2 3 4 ... n)
        if (currentPage <= 3) {
            for (let i = 1; i <= 4; i++) {
                let pageBtn = document.createElement("button");
                pageBtn.textContent = i;
                if (i === currentPage) pageBtn.classList.add("active");
                pageBtn.addEventListener("click", () => {
                    currentPage = i;
                    renderMenuFoods();
                });
                paginationContainer.appendChild(pageBtn);
            }
            let dot = document.createElement("span");
            dot.textContent = "...";
            dot.classList.add('disabled-dot');
            paginationContainer.appendChild(dot);

            let lastPageBtn = document.createElement("button");
            lastPageBtn.textContent = totalPage;
            lastPageBtn.addEventListener("click", () => {
                currentPage = totalPage;
                renderMenuFoods();
            });
            paginationContainer.appendChild(lastPageBtn);
        }
        // Trường hợp cuối trang (1 ... n-3 n-2 n-1 n)
        else if (currentPage >= totalPage - 2) {
            let firstPageBtn = document.createElement("button");
            firstPageBtn.textContent = "1";
            firstPageBtn.addEventListener("click", () => {
                currentPage = 1;
                renderMenuFoods();
            });
            paginationContainer.appendChild(firstPageBtn);

            let dot = document.createElement("span");
            dot.textContent = "...";
            dot.classList.add('disabled-dot');
            paginationContainer.appendChild(dot);

            for (let i = totalPage - 3; i <= totalPage; i++) {
                let pageBtn = document.createElement("button");
                pageBtn.textContent = i;
                if (i === currentPage) pageBtn.classList.add("active");
                pageBtn.addEventListener("click", () => {
                    currentPage = i;
                    renderMenuFoods();
                });
                paginationContainer.appendChild(pageBtn);
            }
        }
        // Trường hợp ở giữa (1 ... n-1 n n+1 ... total)
        else {
            let firstPageBtn = document.createElement("button");
            firstPageBtn.textContent = "1";
            firstPageBtn.addEventListener("click", () => {
                currentPage = 1;
                renderMenuFoods();
            });
            paginationContainer.appendChild(firstPageBtn);

            let dot1 = document.createElement("span");
            dot1.textContent = "...";
            dot.classList.add('disabled-dot');
            paginationContainer.appendChild(dot1);

            for (let i = currentPage - 1; i <= currentPage + 1; i++) {
                let pageBtn = document.createElement("button");
                pageBtn.textContent = i;
                if (i === currentPage) pageBtn.classList.add("active");
                pageBtn.addEventListener("click", () => {
                    currentPage = i;
                    renderMenuFoods();
                });
                paginationContainer.appendChild(pageBtn);
            }

            let dot2 = document.createElement("span");
            dot2.textContent = "...";
            dot.classList.add('disabled-dot');
            paginationContainer.appendChild(dot2);

            let lastPageBtn = document.createElement("button");
            lastPageBtn.textContent = totalPage;
            lastPageBtn.addEventListener("click", () => {
                currentPage = totalPage;
                renderMenuFoods();
            });
            paginationContainer.appendChild(lastPageBtn);
        }
    }

    // Nút Next
    let nextBtn = document.createElement("button");
    nextBtn.textContent = ">";
    if (currentPage === totalPage) {
        nextBtn.disabled = true;
    } else {
        nextBtn.addEventListener("click", () => {
            currentPage++;
            renderMenuFoods();
        });
    }
    paginationContainer.appendChild(nextBtn);
}

// Tìm kiếm món ăn
let searchInput = document.getElementById("search-foods");

searchInput.addEventListener("input", () => {
    let keyword = searchInput.value.trim().toLowerCase();
    let filterMenuFood = menuFoods.filter(food =>
        food.title.toLowerCase().includes(keyword)
    );
    currentPage = 1;
    renderMenuFoods(filterMenuFood);
    // renderPagination();
});


// LỌC
let isPriceAsc = true;

const btnSort = document.querySelector(".btn-sort-price-toggle");
if (btnSort) {
    btnSort.addEventListener("click", () => {
        let sortedFoods = [...menuFoods];
        if (isPriceAsc) {
            sortedFoods.sort((a, b) => a.price - b.price); 
            btnSort.textContent = "Sắp xếp theo giá ↓";
        } else {
            sortedFoods.sort((a, b) => b.price - a.price); 
            btnSort.textContent = "Sắp xếp theo giá ↑";
        }
        isPriceAsc = !isPriceAsc;
        currentPage = 1;
        renderMenuFoods(sortedFoods);
    });
}
// const isLoggedIn = localStorage.getItem("loggedIn") === "true";


renderMenuFoods();
