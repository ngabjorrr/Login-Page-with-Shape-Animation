// script.js
const adminCredential = {
    username: "Platf0rm",
    password: "mr0ftalP"
};

let userCredentials = [];

function validateForm() {
    var username = document.forms["FormLogin"]["username"].value;
    var password = document.forms["FormLogin"]["password"].value;
    let form = document.querySelector('form');
    
    if (username == "") {
        alert("Username tidak boleh kosong");
        return false;
    } else if (username.length < 8 || username.length > 8) {
        alert("Username harus 8 karakter");
        return false;
    } else if (username.search(/[0-9]/) < 0) {
        alert("Username harus berisi angka");
        return false;
    } else if (username.search(/[A-Z]/) < 0) {
        alert("Username harus berisi huruf besar");
        return false;
    } else if (username.search(/[a-z]/) < 0) {
        alert("Username harus berisi huruf kecil");
        return false;
    } else if (username.search(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/) > 0) {
        alert("Username tidak boleh berisi karakter spesial");
        return false;
    }

    if (password == "") {
        alert("Password tidak boleh kosong");
        return false;
    } else if (password == username) {
        alert("Password tidak boleh sama dengan username");
        return false;
    } else if (password.length < 6 || password.length > 10) {
        alert("Password harus 6-10 karakter");
        return false;
    } else if (password.search(/[0-9]/) < 0) {
        alert("Password harus berisi angka");
        return false;
    } else if (password.search(/[A-Z]/) < 0) {
        alert("Password harus berisi huruf besar");
        return false;
    }

    if (username === adminCredential.username && password === adminCredential.password) {
        alert("Admin berhasil Login!!!");
        return true;
    }

    const existingUser = userCredentials.find(user => user.username === username);
    if (existingUser) {
        if (existingUser.password === password) {
            alert("User berhasil login!\nSelamat datang " + username + "!");
            return true;
        } else {
            alert("Password salah!");
            return false;
        }
    } else {
        userCredentials.push({ username: username, password: password });
        alert("Registrasi berhasil!\nSelamat datang user baru: " + username);
        return true;
    }
}

const togglePassword = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglePassword.addEventListener("click", function () {
    const type = password.getAttribute("type") === "password" ? "text" : "password";
    password.setAttribute("type", type);
    
    this.classList.toggle("fa-eye");
    this.classList.toggle("fa-eye-slash");
});