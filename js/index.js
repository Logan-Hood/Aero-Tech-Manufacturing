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

















document.addEventListener("DOMContentLoaded", function() {
    const services = {
        1: {
            title: "Precision Sheet Metal",
            image: "images/service 1.png",
            description: `Precision Sheet Metal Fabrication
            AERO TECH specializes in custom sheet-metal parts and assemblies, from access panels to Z-brackets. 
            Our expert team ensures seamless project coordination from design to final production, meeting exact 
            customer specifications. With advanced fabrication methods, in-house finishing, and silk screening, 
            we set the industry standard for quality and precision.`,
            link: "precision-sheet-metal.html"
        },
        2: {
            title: "Radiant Ceiling Panels",
            image: "images/service 2.png",
            description: `Radiant Ceiling Panels
            AERO TECH manufactures and installs radiant ceiling panels for efficient, comfortable heating and cooling. 
            Used in hospitals, schools, and offices, our LEED-recognized systems enhance sustainability in new and renovated buildings.`,
            link: "radiant-ceiling-panels.html"
        },
        3: {
            title: "Carpet Cleaning Mounts",
            image: "images/service 3.png",
            description: `Carpet Cleaning Truck Mounts
            AERO TECH designs and manufactures the industry’s most powerful, versatile and reliable PTO driven 
            surface cleaning truck mount on the market today. The XT is designed and manufactured entirely in house 
            in our 84,000 SQ FT facility with the help of our highly skilled team of employees to ensure the highest 
            level of quality at the most competitive cost.`,
            link: "carpet-cleaning-mounts.html"
        }
    };

    const tabs = document.querySelectorAll(".service-tab");
    const serviceImage = document.getElementById("service-image");
    const serviceTitle = document.getElementById("service-title");
    const serviceDescription = document.getElementById("service-description");
    const serviceLink = document.getElementById("service-link");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const serviceId = this.getAttribute("data-service");

            // Update Content
            serviceTitle.textContent = services[serviceId].title;
            serviceImage.src = services[serviceId].image;
            serviceDescription.textContent = services[serviceId].description;
            serviceLink.href = services[serviceId].link;

            // Update Active Tab
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });
});














$(document).ready(function () {


    // Accordion functionality
    $(".accordion-header").click(function () {
        var parent = $(this).parent();

        if (!parent.hasClass("active")) {
            $(".accordion-item").removeClass("active");
            $(".accordion-content").slideUp();

            parent.addClass("active");
            parent.find(".accordion-content").slideDown();
        } else {
            parent.removeClass("active");
            parent.find(".accordion-content").slideUp();
        }
    });
});
