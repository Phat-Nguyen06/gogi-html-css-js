let registerForm = document.getElementById("register-form");
let fullNameRegister = document.getElementById("fullName");
let usernameRegister = document.getElementById("username");
let passwordRegister = document.getElementById("password");
let confirmPasswordRegister = document.getElementById("confirmPassword");

const errorFullNameRegister = document.getElementById("error-fullName");
const errorUsernameRegister = document.getElementById("error-username");
const errorPasswordRegister = document.getElementById("error-password");
const errorConfirmPasswordRegister = document.getElementById("error-confirmPassword");

let users = JSON.parse(localStorage.getItem("users")) || [];

registerForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let fullName = fullNameRegister.value.trim();
    let username = usernameRegister.value.trim();
    let password = passwordRegister.value.trim();
    let confirmPassword = confirmPasswordRegister.value.trim();
    let gender = document.querySelector('input[name="gender"]:checked');
    let avatar = gender && gender.value === "male" ? "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-gender/avtMale.png" : "https://phat-nguyen06.github.io/gogi-html-css-js/assets/img/img-gender/avtFemale.png";

    if (fullName == "") {
        errorFullNameRegister.textContent = "Vui lòng nhập họ và tên.";
        errorFullNameRegister.style.display = "block";
    } else {
        errorFullNameRegister.textContent = "";
        errorFullNameRegister.style.display = "none";
    }

    if (username == "") {
        errorUsernameRegister.textContent = "Vui lòng nhập tên đăng nhập.";
        errorUsernameRegister.style.display = "block";
    } else {
        errorUsernameRegister.textContent = "";
        errorUsernameRegister.style.display = "none";
    }

    if (password == "") {
        errorPasswordRegister.textContent = "Vui lòng nhập mật khẩu.";
        errorPasswordRegister.style.display = "block";
    } else {
        errorPasswordRegister.textContent = "";
        errorPasswordRegister.style.display = "none";
    }

    if (confirmPassword == "") {
        errorConfirmPasswordRegister.textContent = "Vui lòng nhập lại mật khẩu.";
        errorConfirmPasswordRegister.style.display = "block";
        return;
    } else {
        errorConfirmPasswordRegister.textContent = "";
        errorConfirmPasswordRegister.style.display = "none";
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
    window.location.href = "https://phat-nguyen06.github.io/gogi-html-css-js/login.html";
});
