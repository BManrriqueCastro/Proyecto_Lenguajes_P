function loadNavbar() {
    fetch("../../../index.html").then(response => response.text()).then(data => {
        document.getElementById("navbar").innerHTML = data;
    });
}
window.onload = loadNavbar;