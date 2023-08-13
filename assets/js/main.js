// for nav bar
window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.nav-section');

    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// for slider 1
document.addEventListener('DOMContentLoaded', function () {
    let newswiperCards = new Swiper('.slider--content1', {
        loop: true,
        spaceBetween: 40,
        grabCursor: true,

        navigation: {
            nextEl: '.swiper-button-next1',
            prevEl: '.swiper-button-prev1',
        },

        breakpoints: {
            600: {
                slidesPerView: 2,
            },
            968: {
                slidesPerView: 2.8,
            }
        },

        on: {
            init: function () {
                updateSlideCount(this);
            },
            slideChange: function () {
                updateSlideCount(this);
            },
        },
    });

    function updateSlideCount(swiperInstance) {
        const activeIndex = swiperInstance.realIndex + 1;
        const totalSlides = swiperInstance.slides.length;

        const activeSlideNumberElement = document.querySelector('.active-slide-number');
        const totalSlidesElement = document.querySelector('.total-slides');

        activeSlideNumberElement.textContent = activeIndex;
        totalSlidesElement.textContent = totalSlides;
    }
});

// for slider 2
let swiperCards = new Swiper('.slider--content', {
    loop: true,
    spaceBetween: 40,
    grabCursor: true,

    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
    },

    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },

    breakpoints: {
        600: {
            slidesPerView: 2,
        },
        968: {
            slidesPerView: 3,
        }
    }
});

// for back to top
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
    // Do something on scroll - 0.15 is the percentage the page has to scroll before the button appears
    // This can be changed - experiment
    var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
    if ((rootElement.scrollTop / scrollTotal) > 0.10) {
        // Show button
        scrollToTopBtn.classList.add("showBtn")
    } else {
        // Hide button
        scrollToTopBtn.classList.remove("showBtn")
    }
}

function scrollToTop() {
    // Scroll to top logic
    rootElement.scrollTo({
        top: 0,
        behavior: "smooth"
    })
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)