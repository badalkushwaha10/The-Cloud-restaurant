const hamburger = document.querySelector(".hamburger");
const menu = document.querySelector(".menu");

if (hamburger && menu) {
    hamburger.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}


// STICKY NAVBAR EFFECT

const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 100) {

        navbar.style.background = "rgba(17,17,17,0.95)";
        navbar.style.backdropFilter = "blur(20px)";
        navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.15)";

    } else {

        navbar.style.background = "rgba(17,17,17,0.85)";
        navbar.style.boxShadow = "none";

    }

});


// SMOOTH SCROLL

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        const targetId = this.getAttribute("href");

        if (targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {

            e.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// SCROLL REVEAL ANIMATION

const revealElements = document.querySelectorAll(
    ".card, .about-image, .about-content, .section-title"
);

function revealOnScroll() {

    const windowHeight = window.innerHeight;

    revealElements.forEach(element => {

        const top = element.getBoundingClientRect().top;

        if (top < windowHeight - 100) {

            element.classList.add("show");

        }

    });

}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);


// FAQ ACCORDION
// (Part 1 mein FAQ section add karne ke baad kaam karega)

const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    if (question) {

        question.addEventListener("click", () => {

            faqItems.forEach(faq => {

                if (faq !== item) {
                    faq.classList.remove("active");
                }

            });

            item.classList.toggle("active");

        });

    }

});


// ACTIVE NAV LINK ON SCROLL

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".menu a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.clientHeight;

        if (window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active-link");

        if (link.getAttribute("href") === `#${current}`) {

            link.classList.add("active-link");

        }

    });

});


// PRELOADER SUPPORT (OPTIONAL)

window.addEventListener("load", () => {

    document.body.classList.add("loaded");

});


// CONSOLE MESSAGE

console.log(
    "🔥 The Golden BBQ Website Loaded Successfully!"
);