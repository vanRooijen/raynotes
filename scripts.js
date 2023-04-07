document.addEventListener("DOMContentLoaded", function () {
    var hamburger = document.querySelector(".hamburger");
    var navItems = document.querySelector(".nav-items");

    hamburger.addEventListener("click", function () {
        if (navItems.style.display === "none") {
            navItems.style.display = "flex";
            navItems.style.flexDirection = "column";
        } else {
            navItems.style.display = "none";
        }
    });
});
