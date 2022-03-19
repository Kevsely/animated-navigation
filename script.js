const menuIcon = document.getElementById("menu-bars");

function toggleNav() {
    menuIcon.classList.toggle("change");
}

// Event Listeners
menuIcon.addEventListener("click", toggleNav);