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
            link: "precision.html"
        },
        2: {
            title: "Radiant Ceiling Panels",
            image: "images/service 2.png",
            description: `Radiant Ceiling Panels
            AERO TECH manufactures and installs radiant ceiling panels for efficient, comfortable heating and cooling. 
            Used in hospitals, schools, and offices, our LEED-recognized systems enhance sustainability in new and renovated buildings.`,
            link: "radiant.html"
        },
        3: {
            title: "Carpet Cleaning Mounts",
            image: "images/service 3.png",
            description: `Carpet Cleaning Truck Mounts
            AERO TECH designs and manufactures the industry’s most powerful, versatile and reliable PTO driven 
            surface cleaning truck mount on the market today. The XT is designed and manufactured entirely in house 
            in our 84,000 SQ FT facility with the help of our highly skilled team of employees to ensure the highest 
            level of quality at the most competitive cost.`,
            link: "carpet.html"
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



















// Precision.html

document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".flip-card");

    cards.forEach(card => {
        card.addEventListener("click", function () {
            this.classList.toggle("flipped");
        });
    });
});








document.addEventListener("DOMContentLoaded", function () {
    const equipmentItems = document.querySelectorAll(".equipment");

    equipmentItems.forEach(item => {
        const content = item.querySelector(".equipment-content");

        item.addEventListener("click", function () {
            const isExpanded = this.classList.contains("expanded");

            // Close all other dropdowns
            document.querySelectorAll(".equipment").forEach(otherItem => {
                otherItem.classList.remove("expanded");
                otherItem.querySelector(".equipment-content").style.maxHeight = "0";
                otherItem.querySelector(".equipment-content").style.padding = "0 10px";
            });

            // Toggle the clicked dropdown
            if (!isExpanded) {
                this.classList.add("expanded");
                content.style.maxHeight = content.scrollHeight + "px"; // Adjust to fit content
                content.style.padding = "10px"; // Restore padding
            }
        });
    });
});





// Image sets for each category
const galleries = {
    "fabrication": [
        "images/gallery1.png",
        "images/fabrication1.jpg",
        "images/fabrication2.jpg",
        "images/fabrication3.jpg",
        "images/fabrication4.jpg",
        "images/fabrication5.jpg",
        "images/fabrication6.jpg",
        "images/fabrication7.jpg",
        "images/fabrication8.jpg",
        "images/fabrication9.jpg",
        "images/fabrication10.jpg",
        "images/fabrication11.jpg",
        "images/fabrication12.jpg",
        "images/fabrication13.jpg",
        "images/fabrication14.jpg",
        "images/fabrication15.png",
        "images/fabrication16.jpg",
        "images/fabrication17.jpg",
        "images/fabrication18.jpg",
        "images/fabrication19.jpg",
        "images/fabrication20.jpg",
        "images/fabrication21.jpg",
        "images/fabrication22.jpg",
        "images/fabrication23.jpg",
        "images/fabrication24.jpg",
        "images/fabrication25.jpg",
        "images/fabrication26.jpg",
        "images/fabrication27.jpg",
        "images/fabrication28.jpg",
        "images/fabrication29.jpg"
    ],
    "signage": [
        "images/gallery2.png",
        "images/signage1.jpg",
        "images/signage2.jpg",
        "images/signage3.jpg"
    ],
    "structural": [
        "images/gallery3.png",
        "images/structural1.jpg",
        "images/structural2.jpg",
        "images/structural3.jpg"
    ],
    "assemblies": [
        "images/gallery4.png",
        "images/assemblies1.jpg",
        "images/assemblies2.jpg",
        "images/assemblies3.jpg"
    ]
};




let currentCategory = "";
let currentIndex = 0;
const overlay = document.getElementById("galleryOverlay");
const overlayImage = document.getElementById("overlayImage");
const paginationContainer = document.getElementById("pagination");




function openGallery(index, category) {
    currentCategory = category;
    currentIndex = index;
    overlay.style.display = "flex";
    updateGallery();
}




function closeGallery() {
    overlay.style.display = "none";
}




function prevImage() {
    if (!currentCategory) return;
    currentIndex = (currentIndex - 1 + galleries[currentCategory].length) % galleries[currentCategory].length;
    updateGallery();
}




function nextImage() {
    if (!currentCategory) return;
    currentIndex = (currentIndex + 1) % galleries[currentCategory].length;
    updateGallery();
}




function updateGallery() {
    overlayImage.src = galleries[currentCategory][currentIndex];
    updatePagination();
}




const maxVisibleNumbers = 15; // Show only 15 numbers at a time
let paginationStart = 0; // Keeps track of the first visible number




function updatePagination() {
    paginationContainer.innerHTML = "";




    // Left Arrow (if not at the beginning)
    if (paginationStart > 0) {
        const leftArrow = document.createElement("span");
        leftArrow.textContent = "◄";
        leftArrow.classList.add("pagination-arrow");
        leftArrow.addEventListener("click", () => {
            paginationStart = Math.max(0, paginationStart - maxVisibleNumbers);
            updatePagination();
        });
        paginationContainer.appendChild(leftArrow);
    }




    // Page numbers (only show a subset)
    const end = Math.min(galleries[currentCategory].length, paginationStart + maxVisibleNumbers);
    for (let i = paginationStart; i < end; i++) {
        const number = document.createElement("span");
        number.textContent = i + 1;
        number.classList.add("pagination-number");
        if (i === currentIndex) number.classList.add("active");




        number.addEventListener("click", () => {
            currentIndex = i;
            updateGallery();
        });




        paginationContainer.appendChild(number);
    }




    // Right Arrow (if more numbers exist)
    if (end < galleries[currentCategory].length) {
        const rightArrow = document.createElement("span");
        rightArrow.textContent = "►";
        rightArrow.classList.add("pagination-arrow");
        rightArrow.addEventListener("click", () => {
            paginationStart = Math.min(
                galleries[currentCategory].length - maxVisibleNumbers,
                paginationStart + maxVisibleNumbers
            );
            updatePagination();
        });
        paginationContainer.appendChild(rightArrow);
    }
}








// Close overlay when clicking outside the image
overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeGallery();
});