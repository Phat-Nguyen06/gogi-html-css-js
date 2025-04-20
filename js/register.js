let registerForm = document.getElementById("register-form");
let fullNameRegister = document.getElementById("fullName");
let usernameRegister = document.getElementById("username");
let passwordRegister = document.getElementById("password");
let confirmPasswordRegister = document.getElementById("confirmPassword");

let users = JSON.parse(localStorage.getItem("users")) || [];

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let fullName = fullNameRegister.value.trim();
    let username = usernameRegister.value.trim();
    let password = passwordRegister.value.trim();
    let confirmPassword = confirmPasswordRegister.value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let avatar = gender && gender.value === "male" ? "/assets/img/img-gender/avtMale.png" : "/assets/img/img-gender/avtFemale.png";

    if (!fullName || !username || !password || !confirmPassword || !gender) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    let isExist = users.some(acc => acc.username == username);

    if (isExist) {
        alert("Tên đăng nhập đã tồn tại.");
        return;
    }

    if (password != confirmPassword) {
        alert("Mật khẩu xác nhận không khớp.");
        return;
    }

    let newUser = {
        username,
        password,
        fullName,
        gender,
        avatar
    }

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    alert("Đăng ký thành công! Mời bạn đăng nhập.");
    registerForm.reset();
    window.location.href = "/login.html";
});
