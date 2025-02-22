document.addEventListener("DOMContentLoaded", function () {
    const currentLocation = window.location.href;
    const menuItems = document.querySelectorAll("nav ul li a");
    const menuToggle = document.querySelector(".menu-toggle");
    const navMenu = document.querySelector("nav ul");
    const closeMenu = document.querySelector(".close-menu");

    menuItems.forEach(item => {
        if (item.href === currentLocation) {
            item.classList.add("active");
        }
    });

    // Dropdown toggle functionality
    const dropdown = document.querySelector(".dropdown");
    if (dropdown) {
        dropdown.addEventListener("mouseenter", function () {
            this.querySelector(".dropdown-menu").style.display = "block";
        });

        dropdown.addEventListener("mouseleave", function () {
            this.querySelector(".dropdown-menu").style.display = "none";
        });
    }



    // Mobile menu functionality
    menuToggle.addEventListener("click", function () {
        navMenu.classList.add("open");
    });

    closeMenu.addEventListener("click", function () {
        navMenu.classList.remove("open");
    });
        // Toggle dropdown in mobile view
        $(".dropdown > a").click(function (e) {
            e.preventDefault();
            $(this).next(".dropdown-menu").slideToggle();
        });
});







