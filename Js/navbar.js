// navbar.js
document.addEventListener("DOMContentLoaded", function() {
    fetch('../HTML/navbar.html').then(response => response.text()).then(data => {
        document.getElementById('navbar-container').innerHTML = data;
    });
});