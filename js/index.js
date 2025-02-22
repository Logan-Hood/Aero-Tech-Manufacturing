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




$(document).ready(function () {
    // Get current page filename (e.g., "index.html")
    let currentPage = window.location.pathname.split("/").pop();

    // Loop through nav links to find the matching href
    $(".nav-link").each(function () {
        if ($(this).attr("href") === currentPage) {
            $(this).addClass("active-page");
        }
    });
});
