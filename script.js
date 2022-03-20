const menuIcon = document.getElementById("menu-bars");
const menuOverlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1")
const nav2 = document.getElementById("nav-2")
const nav3 = document.getElementById("nav-3")
const nav4 = document.getElementById("nav-4")
const nav5 = document.getElementById("nav-5")
const navArray = [nav1, nav2, nav3, nav4, nav5];

//Control Navigation Animation 
function navAnimation(direction1, direction2) {
    navArray.forEach((nav, i) => {
        nav.classList.replace(`slide-${direction1}-${i+1}`, `slide-${direction2}-${i+1}`)
    })
}

function toggleNav() {
    //Toggle Menu icon : Hamburger (Closed) / Cross (Opened)
    menuIcon.classList.toggle("change");

    //Show / Hide the menu 
    menuOverlay.classList.toggle("active");

    //Activate animation on nav list elements
    if (menuOverlay.classList.contains("active")) {
        navAnimation("in", "out");
    }
    else {
        navAnimation("out", "in");
    }
}

// Event Listeners
menuIcon.addEventListener("click", toggleNav);
menuOverlay.addEventListener("click", toggleNav);