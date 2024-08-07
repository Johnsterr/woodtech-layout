document.addEventListener("DOMContentLoaded", function () {
    const swiper = new Swiper(".swiper", {
        direction: "horizontal",
        loop: false,
        pagination: {
            el: ".slider-numbers",
            type: "custom",
            renderCustom: function (swiper, current, total) {
                const currentSlide = current < 10 ? "0" + current.toString() : current;
                const totalSlides = total < 10 ? "0" + total.toString() : total;
                return (
                    '<span class="slider-numbers__current">' +
                    currentSlide +
                    '</span><span class="slider-numbers__divider"></span><span class="slider-numbers__total">' +
                    totalSlides +
                    "</span>"
                );
            },
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        scrollbar: {
            el: ".swiper-scrollbar",
        },
        speed: 500,
    });

    const header = document.querySelector("#header");
    const scrollUp = document.querySelector("#scroll-up");
    const mobileMenu = document.querySelector("#mobile-menu");
    const mobileMenuBtn = document.querySelector("#mobile-menu-btn");
    const mobileMenuCloseBtn = document.querySelector("#mobile-menu-close-btn");

    if (window.scrollY > 100) {
        header.classList.add("header--sticky");
    }

    if (window.scrollY > 150) {
        scrollUp.classList.add("scroll-up--visible");
    }

    document.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            header.classList.add("header--sticky");
        } else {
            header.classList.remove("header--sticky");
        }

        if (window.scrollY > 150) {
            scrollUp.classList.add("scroll-up--visible");
        } else {
            scrollUp.classList.remove("scroll-up--visible");
        }
    });

    scrollUp.addEventListener("click", function () {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });

    mobileMenuBtn.addEventListener("click", function () {
        if (!mobileMenu.classList.contains("mobile-menu--is-open")) {
            mobileMenu.classList.add("mobile-menu--is-open");
        }
    });

    mobileMenuCloseBtn.addEventListener("click", function () {
        if (mobileMenu.classList.contains("mobile-menu--is-open")) {
            mobileMenu.classList.remove("mobile-menu--is-open");
        }
    });
});
