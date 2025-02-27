document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita que la página se recargue

    let user = document.getElementById("username").value;
    let pass = document.getElementById("password").value;

    if (user === "admin" && pass === "1234") {
        alert("Inicio de sesión exitoso");
        window.location.href = "home.html"; // Redirige a home.html
    } else {
        alert("Usuario o contraseña incorrectos");
    }
});

