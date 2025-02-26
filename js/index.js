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
            description: `AERO TECH specializes in custom sheet-metal parts and assemblies, from access panels to Z-brackets. 
            Our expert team ensures seamless project coordination from design to final production, meeting exact 
            customer specifications. With advanced fabrication methods, in-house finishing, and silk screening, 
            we set the industry standard for quality and precision.`,
            link: "precision.html"
        },
        2: {
            title: "Radiant Ceiling Panels",
            image: "images/service 2.png",
            description: `AERO TECH manufactures and installs radiant ceiling panels for efficient, comfortable heating and cooling. 
            Used in hospitals, schools, and offices, our LEED-recognized systems enhance sustainability in new and renovated buildings.`,
            link: "radiant.html"
        },
        3: {
            title: "Carpet Cleaning Mounts",
            image: "images/service 3.png",
            description: `AERO TECH designs and manufactures the industry’s most powerful, versatile and reliable PTO driven 
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
        card.addEventListener("click", function (event) {
            // Prevents the event from bubbling up or triggering unwanted behaviors
            event.stopPropagation();

            // Toggle the 'flipped' class
            if (this.classList.contains("flipped")) {
                this.classList.remove("flipped"); // Flip back
            } else {
                this.classList.add("flipped"); // Flip forward
            }
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
    ],
    "radiant": [
        "images/radiant1.jpg",
        "images/radiant2.jpg",
        "images/radiant3.jpg",
        "images/radiant4.jpg",
    ],
    "carpet": [
        "images/carpet1.png",
        "images/carpet2.png",
        "images/carpet3.png",
        "images/carpet4.png",
    ]
};

let currentCategory = "";
let currentIndex = 0;
let paginationStart = 0;

// Maximum numbers displayed per screen size
const maxNumbersLarge = 15;
const maxNumbersMedium = 10;
const maxNumbersSmall = 5;
let maxVisibleNumbers = maxNumbersLarge;

// Get DOM elements
const overlay = document.getElementById("galleryOverlay");
const overlayImage = document.getElementById("overlayImage");
const paginationContainer = document.getElementById("pagination");

// Open the gallery
function openGallery(index, category) {
    currentCategory = category;
    currentIndex = index;
    paginationStart = 0; // Reset pagination start when opening a new gallery
    overlay.style.display = "flex";
    updateGallery();
}

// Close the gallery
function closeGallery() {
    overlay.style.display = "none";
}

// Show previous image
function prevImage() {
    if (!currentCategory) return;
    currentIndex = (currentIndex - 1 + galleries[currentCategory].length) % galleries[currentCategory].length;
    updateGallery();
}

// Show next image
function nextImage() {
    if (!currentCategory) return;
    currentIndex = (currentIndex + 1) % galleries[currentCategory].length;
    updateGallery();
}

// Update gallery image and pagination
function updateGallery() {
    overlayImage.src = galleries[currentCategory][currentIndex];
    updatePagination();
}

// Dynamically update maxVisibleNumbers based on screen size
function adjustPaginationSize() {
    if (window.innerWidth <= 600) {
        maxVisibleNumbers = maxNumbersSmall;
    } else if (window.innerWidth <= 1024) {
        maxVisibleNumbers = maxNumbersMedium;
    } else {
        maxVisibleNumbers = maxNumbersLarge;
    }
}

// Update pagination
function updatePagination() {
    paginationContainer.innerHTML = "";
    adjustPaginationSize();

    const totalImages = galleries[currentCategory].length;
    
    // Ensure paginationStart does not go out of bounds
    paginationStart = Math.max(0, Math.min(paginationStart, totalImages - maxVisibleNumbers));

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
    const end = Math.min(totalImages, paginationStart + maxVisibleNumbers);
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
    if (end < totalImages) {
        const rightArrow = document.createElement("span");
        rightArrow.textContent = "►";
        rightArrow.classList.add("pagination-arrow");
        rightArrow.addEventListener("click", () => {
            paginationStart = Math.min(totalImages - maxVisibleNumbers, paginationStart + maxVisibleNumbers);
            updatePagination();
        });
        paginationContainer.appendChild(rightArrow);
    }
}

// Listen for screen size changes and update pagination dynamically
window.addEventListener("resize", updatePagination);

// Initialize Pagination on Load
updatePagination();

// Close overlay when clicking outside the image
overlay.addEventListener("click", function (e) {
    if (e.target === overlay) closeGallery();
});

































// carpet.html


document.addEventListener("DOMContentLoaded", function() {
    const trucks = {
        1: {
            title: "The XT Advantage",
            video: "https://www.youtube.com/embed/yz5PlLJRRs4",
            description: `The XT Cleaning Truck Mount outperforms the competition with 
            rapid 7–10 minute heat-up, a maintenance-reducing PTO system, and true dual 
            wand capability. With 660 ICFM @ 16" HG, 1650 RPM max speed, and superior 
            airflow for faster drying, it delivers unmatched performance. Offering 290 
            cubic feet of storage, 190 square feet of ad space, and expert-backed 
            reliability, it’s built to ASME and TEMA standards—all at a competitive, 
            manufacturer-direct price.`,
            link: "xt.html"
        },
        2: {
            title: "DDS - DIRECT DRIVE SYSTEM",
            video: "https://www.youtube.com/embed/hlqVL_7_Abo&t=1s",
            description: `Meet the Aero Tech stainless steel Direct Drive System 
            (DDS).  Engineered from the ground up to deliver maximum heat and vacuum 
            pressure for cleaner, dryer carpet.  The DDS is built to last longer, need 
            less maintenance and repair, all while producing the best results for your 
            customers`,
            link: "dds.html"
        },
        3: {
            title: "COMING SOON",
            image: "rseries.png",
            link: "rs.html"
        }
    };

    const tabs = document.querySelectorAll(".truck-tab");
    const truckImage = document.getElementById("truck-image");
    const truckTitle = document.getElementById("truck-title");
    const truckDescription = document.getElementById("truck-description");
    const truckLink = document.getElementById("truck-link");

    tabs.forEach(tab => {
        tab.addEventListener("click", function() {
            const truckId = this.getAttribute("data-truck");

            // Update Content
            truckTitle.textContent = trucks[truckId].title;
            truckImage.src = trucks[truckId].image;
            truckDescription.textContent = trucks[truckId].description;
            truckLink.href = trucks[truckId].link;

            // Update Active Tab
            tabs.forEach(t => t.classList.remove("active"));
            this.classList.add("active");
        });
    });
});







document.addEventListener("DOMContentLoaded", function () {
    const track = document.querySelector(".review-track");
    const reviews = document.querySelectorAll(".review");

    // Clone the first few elements for an infinite effect
    reviews.forEach(review => {
        let clone = review.cloneNode(true);
        track.appendChild(clone);
    });
});















