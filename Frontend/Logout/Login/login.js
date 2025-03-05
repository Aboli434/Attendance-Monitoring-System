
document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("errorMessage");

    
    if (email === "" || password === "") {
        errorMessage.textContent = "All fields are required!";
        return;
    }

  
    if (email === "admin@example.com" && password === "admin123") {
        alert("Login Successful!");
        window.location.href = "dashboard.html"; 
    } else {
        errorMessage.textContent = "Invalid email or password!";
    }
});

function togglePassword() {
    let passwordField = document.getElementById("password");
    if (passwordField.type === "password") {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
}
