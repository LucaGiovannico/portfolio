const hamburgerMenu = document.querySelector("#hamburgerMenu");
const navbar = document.querySelector(".navLinks");

hamburgerMenu.onclick = () => {
navbar.classList.toggle("active");
};

document.addEventListener("click", function(event) {
    const isClickInsideMenu = navbar.contains (event.target);
    const isClickInsideHamburger = hamburgerMenu.contains (event.target);

    if (!isClickInsideMenu && !isClickInsideHamburger && navbar.classList.contains("active")) {
        navbar.classList.remove("active");
    }
});