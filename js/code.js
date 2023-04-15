//Nav Toggle Menu
let toggleList = document.querySelector(".toggle-menu");
let list = document.getElementById("list");

toggleList.addEventListener("click", function () {

    list.classList.toggle("open");
});
//End Nav Toggle Menu

//=========slider=======================

// Get the elements
const slider = document.querySelector('.slider');
const slides = slider.querySelector('.slides');
const slideList = slider.querySelectorAll('.slide');
const arrows = slider.querySelector('.arrows');
const prevArrow = arrows.querySelector('.prev');
const nextArrow = arrows.querySelector('.next');
const bullets = slider.querySelector('.bullets');
const bulletList = bullets.querySelectorAll('.bullet');

// Set initial variables
let currentSlide = 0;
let slideWidth = slideList[0].clientWidth;
let isAnimating = false;

// Set up event listeners
prevArrow.addEventListener('click', prevSlide);
nextArrow.addEventListener('click', nextSlide);
bulletList.forEach((bullet, index) => {
    bullet.addEventListener('click', () => goToSlide(index));
});

// Initialize the slider
resizeSlider();
updateBullets(currentSlide);

// Set up functions
function prevSlide() {
    if (!isAnimating) {
        goToSlide(currentSlide - 1);
    }
}

function nextSlide() {
    if (!isAnimating) {
        goToSlide(currentSlide + 1);
    }
}

function goToSlide(slideIndex) {
    if (slideIndex < 0) {
        slideIndex = slideList.length - 1;
    } else if (slideIndex >= slideList.length) {
        slideIndex = 0;
    }
    const offset = slideWidth * slideIndex;
    slides.style.transform = `translateX(-${offset}px)`;
    updateBullets(slideIndex);
    currentSlide = slideIndex;
    isAnimating = true;
    setTimeout(() => {
        isAnimating = false;
    }, 600);
}

function updateBullets(slideIndex) {
    bulletList.forEach((bullet, index) => {
        if (index === slideIndex) {
            bullet.classList.add('active');
        } else {
            bullet.classList.remove('active');
        }
    });
}

function resizeSlider() {
    slideWidth = slideList[0].clientWidth;
    const offset = slideWidth * currentSlide;
    slides.style.transform = `translateX(-${offset}px)`;
}

window.addEventListener('resize', resizeSlider);


//========Slider========================

// our skills progress section

// caching skill variable
let ourSkills = document.querySelector(".our-info");

window.onscroll = function () {

    // getting the top offset of skills section
    let skillsOfsetTop = ourSkills.offsetTop;

    // getting the outer height of skills section
    let skillsOuterHeight = ourSkills.offsetHeight;

    // get window height
    let windowHeight = this.innerHeight;

    // getting window Scroll Top
    let windowScrollTop = window.pageYOffset;


    if (windowScrollTop > (skillsOfsetTop + skillsOuterHeight - windowHeight)) {

        let allSkills = document.querySelectorAll(".skill-box .skill-progress span");

        allSkills.forEach(skill => {

            skill.style.width = skill.dataset.progress;
            skill.textContent = skill.dataset.progress;
        });

    }

};
// End our skills progress section

//Shuffle Methods

const shuffleList = document.querySelectorAll('.filter-list li');
const items = document.querySelectorAll(".filter-grid .item");

shuffleList.forEach((shuffleTab) => {
    shuffleTab.addEventListener("click", function () {
        if (shuffleTab == shuffleList[0]) {
            items.forEach((item) => {
                item.style.display = "block";
            })
        } else {
            items.forEach((item) => {
                item.style.display = "none";
            });
            document.querySelectorAll(`.filter-grid .item[data-filter = ${shuffleTab.dataset.filter}]`).forEach((item) => {
                item.style.display = "block";
            })
        }
    })
});
changeActiveState(shuffleList);

function changeActiveState(list) {
    list.forEach(function (element) {
        element.addEventListener('click', function () {
            list.forEach(function (ele) {
                ele.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}
// Testimonials Slider
const testPullets = document.querySelectorAll(".test-slider .bullets span");
const testSlides = document.querySelectorAll(".test-slider .slide");

testPullets.forEach((pullet, pulletIndex) => {
    pullet.addEventListener("click", function () {
        testSlides.forEach((slide, slideIndex) => {
            slide.style.display = "none";
            changeActiveState(testPullets);
        });
        testSlides[pullet.dataset.click].style.display = "block";
    });
});

// reviews section
const reviews = [
    "The team at XYZ Solutions helped us increase our revenue by 50%! They are experts in their field and provide exceptional service.",

    "I highly recommend the services of XYZ Marketing. Their strategies have helped us increase our website traffic and improve our online presence.",

    "Working with XYZ Design was a great experience. They listened to our needs and provided us with a beautiful website that exceeded our expectations.",

    "I was struggling with my social media marketing until I started working with XYZ Social. They helped me develop a strategy that has increased my followers and engagement.",

    "XYZ Analytics has been an invaluable partner in helping us understand our data and make better decisions. Their team is knowledgeable and professional, and we trust their expertise."
];

const reviewers = ["John Smith", "Jane Doe", "Bob Johnson", "Sarah Williams", "David Lee"];

const reviewer = document.querySelector(".quotes span");
const quote = document.querySelector(".quotes q");
let i = 0;

function generateReview() {

    reviewer.textContent = reviewers[i];
    quote.textContent = reviews[i];
    i++;
    if(i == reviews.length){
        i =0;
    }
}
generateReview()
setInterval(generateReview, 3000);

// Scroll to Top button

const scrollBtn = document.querySelector(".btn");
const btnVisibility = () => {
    if (window.scrollY > 400) {
        scrollBtn.style.visibility = "visible";
    } else {
        scrollBtn.style.visibility = "hidden";
    }
};
document.addEventListener("scroll", () => {
    btnVisibility();
});
scrollBtn.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});