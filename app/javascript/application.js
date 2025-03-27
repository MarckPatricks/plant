// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"

//  TOGGLE BUTTON
const navMenu = document.getElementById("nav-menu")
const navLink = document.querySelectorAll(".nav-link")
const hamburger = document.getElementById("hamburger")

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("left-[0]")
    hamburger.classList.toggle('ri-close-large-line')
})

navLink.forEach(link => {
    link.addEventListener("click", () => {
        navMenu.classList.toggle("left-[0]")
        hamburger.classList.toggle('ri-close-large-line')
    })
})

//SHOW SCROLL UP BUTTON

const scrollUp = () => {
    const scrollUpBtn = document.getElementById("scroll-up");

    if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove("-bottom-1/2");
        scrollUpBtn.classList.add("bottom-4");
    } else {
        scrollUpBtn.classList.add("-bottom-1/2");
        scrollUpBtn.classList.remove("bottom-4");
    }
};

 window.addEventListener("scroll", scrollUp);

//CHANGE BACKGROUND HEADER (BORDER)

const scrollHeader = () => {
    const header = document.getElementById("navbar");

    if (window.scrollY >= 50) {
        header.classList.add("border-b", "border-yellow-500");
    } else {
        header.classList.remove("border-b", "border-yellow-500");
    }
};

 window.addEventListener("scroll", scrollHeader);

// SWIPER (REVIEWS)

const swiper = new Swiper('.swiper', {
    // Optional parameters
    speed: 400,
    spaceBetween: 30,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false
    },

    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },
    grabCursor: true,
    breakpoints: {
        640: {
            slidesPerView: 1
        },
        768: {
            slidesPerView: 2
        },
        1024: {
            slidesPerView: 3
        },      
    }
  });

// SCROLL SECTIONS ACTIVE LINK
const activeLink = () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link'); //Se agregó data-turbo='false' para que funcionara correctamente

    let current = "home";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        
        if (window.scrollY >= sectionTop - 81) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(item => {
        item.classList.remove("active");

        // Se extrae solo el hash del href (#about, #contact, etc.)
        if (item.hash === `#${current}`) {
            item.classList.add("active");
        }
    });
};

 window.addEventListener("scroll", activeLink);



  // SCROLL REVEAL ANIMATION