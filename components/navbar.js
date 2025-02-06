document.addEventListener("DOMContentLoaded", function() {
    fetch("components/navbar.html") // Correct path to the navbar file
        .then(response => response.text())
        .then(data => {
            document.getElementById("navbar-container").innerHTML = data;
        })
        .catch(error => console.error("Error loading navbar:", error));
});
