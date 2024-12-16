function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === "Entri Elevate" && password === "admin123") {
        window.location.href = "homepage";
    } else {
        alert("Invalid username or password");
    }
}

function forgotPassword() {
    const email = prompt("Enter the email");
    if (email) {
        alert("Verification code sent to your email");
    }
}