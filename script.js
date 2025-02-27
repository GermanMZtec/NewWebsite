document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message");

    // Usuario y contraseña predefinidos (para pruebas)
    const userValid = "admin";
    const passValid = "1234";

    if (username === userValid && password === passValid) {
        alert("Inicio de sesión exitoso ✅");
        window.location.href = "dashboard.html"; // Redirige a otra página
    } else {
        errorMessage.textContent = "Usuario o contraseña incorrectos ❌";
    }
});
