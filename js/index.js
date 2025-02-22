$(document).ready(function () {
    // Toggle mobile menu
    $("#hamburger-menu").click(function () {
        $("#mobile-menu").toggleClass("active");
    });

    // Close mobile menu when "X" is clicked
    $("#close-menu").click(function () {
        $("#mobile-menu").removeClass("active");
    });

    // Toggle dropdown in mobile menu
    $("#mobile-menu a:contains('Services')").click(function (e) {
        e.preventDefault(); // Prevent default anchor behavior
        $(this).next(".dropdown-mobile").slideToggle(); // Toggle dropdown
    });
});
