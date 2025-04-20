const adminAccount = {
    username: "admin",
    password: "admin123",
    fullName: "Quản trị viên",
    role: "admin"
};


let loginForm = document.getElementById("login-form");
let usernameInput = document.getElementById("username");
let passwordInput = document.getElementById("password");
let errorMsg = document.getElementById("error-msg");

let users = JSON.parse(localStorage.getItem("users"));

loginForm.addEventListener("submit", (event) => {
    event.preventDefault();

    let username = usernameInput.value.trim();
    let password = passwordInput.value.trim();

    if (!username || !password) {
        alert("Vui lòng điền đầy đủ thông tin!");
        return;
    }

    let allAccounts = [adminAccount, ...users];

    let foundUser = allAccounts.find(acc => acc.username == username && acc.password == password);

    if (!foundUser) {
        errorMsg.textContent = "Tài khoản hoặc mật khẩu không đúng!";
        errorMsg.style.display = "block";
        return;
    }

    let userInfo = {
        username: foundUser.username,
        fullName: foundUser.fullName,
        gender: foundUser.gender,
        role: foundUser.role,
        avatar: foundUser.avatar
    }

    localStorage.setItem("currentUser", JSON.stringify(userInfo));
    errorMsg.style.display = "none";
    if(foundUser.role === "admin") {
        window.location.href = "/admin/index.html";
        localStorage.setItem("loggedIn", "true");
    }
    else {
        window.location.href = "/user/index.html";
        localStorage.setItem("loggedIn", "true");
    }
});