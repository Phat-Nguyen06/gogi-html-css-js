let menuFoods = JSON.parse(localStorage.getItem("menuFoods") || "[]");
let menuFoodsList = document.getElementById("orders-table-body");

// Lưu vị trí món đang sửa
let currentEditIndex = null;

// Render danh sách món ăn
function renderMenuFoodsAdmin() {
    let textmenuFoodsAdmin = "";

    menuFoods.forEach((food, index) => {
        textmenuFoodsAdmin += `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${food.image}" alt="${food.title}" class="food-img"/></td>
            <td>${food.title}</td>
            <td>${food.type}</td>
            <td>${food.price.toLocaleString("vi-VN")}₫</td>
            <td>${food.sold}</td>
            <td>
                <button class="btn-edit" data-index="${index}">Sửa</button>
                <button class="btn-delete" data-index="${index}">Xóa</button>
            </td>
        </tr>
        `;
    });

    menuFoodsList.innerHTML = textmenuFoodsAdmin;
    attachEventButtons();
}

// Gán sự kiện cho nút Sửa/Xóa
function attachEventButtons() {
    document.querySelectorAll(".btn-delete").forEach(btn => {
        btn.onclick = () => {
            const index = btn.dataset.index;
            if (confirm("Bạn có chắc muốn xóa món này không?")) {
                menuFoods.splice(index, 1);
                localStorage.setItem("menuFoods", JSON.stringify(menuFoods));
                renderMenuFoodsAdmin();
            }
        };
    });

    document.querySelectorAll(".btn-edit").forEach(btn => {
        btn.onclick = () => {
            const index = btn.dataset.index;
            const food = menuFoods[index];
            currentEditIndex = index;

            document.getElementById("edit-food-image").value = food.image;
            document.getElementById("edit-food-title").value = food.title;
            document.getElementById("edit-food-type").value = food.type;
            document.getElementById("edit-food-price").value = food.price;
            document.getElementById("edit-food-sold").value = food.sold;

            document.getElementById("edit-food-modal").style.display = "flex";
        };
    });
}

// Mở modal Thêm món
document.querySelector(".btn-add").onclick = () => {
    document.getElementById("add-food-form").reset();
    document.getElementById("add-food-modal").style.display = "flex";
};

// Đóng modal
function closeAddModal() {
    document.getElementById("add-food-modal").style.display = "none";
}
function closeEditModal() {
    document.getElementById("edit-food-modal").style.display = "none";
}

// Gửi form Thêm
document.getElementById("add-food-form").onsubmit = (e) => {
    e.preventDefault();

    const newFood = {
        image: document.getElementById("add-food-image").value,
        title: document.getElementById("add-food-title").value,
        type: document.getElementById("add-food-type").value,
        price: Number(document.getElementById("add-food-price").value),
        sold: Number(document.getElementById("add-food-sold").value)
    };

    menuFoods.push(newFood);
    localStorage.setItem("menuFoods", JSON.stringify(menuFoods));
    renderMenuFoodsAdmin();
    closeAddModal();
};

// Gửi form Sửa
document.getElementById("edit-food-form").onsubmit = (e) => {
    e.preventDefault();

    menuFoods[currentEditIndex] = {
        image: document.getElementById("edit-food-image").value,
        title: document.getElementById("edit-food-title").value,
        type: document.getElementById("edit-food-type").value,
        price: Number(document.getElementById("edit-food-price").value),
        sold: Number(document.getElementById("edit-food-sold").value)
    };

    localStorage.setItem("menuFoods", JSON.stringify(menuFoods));
    renderMenuFoodsAdmin();
    closeEditModal();
};

// Khởi tạo
renderMenuFoodsAdmin();
