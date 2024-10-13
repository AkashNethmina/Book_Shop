// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.left = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.left = "-100%";
}


// sidebar submenu open close js code
let htmlcssArrow = document.querySelector(".cate-arrow");
htmlcssArrow.onclick = function() {
 navLinks.classList.toggle("show1");
}





// testimonials js code

document.addEventListener('DOMContentLoaded', () => {
    const stars = document.querySelectorAll('.star');
    let selectedRating = 0;

    stars.forEach((star, index) => {
        star.addEventListener('click', () => {
            selectedRating = index + 1;
            updateStarRating(selectedRating);
        });
    });

    function updateStarRating(rating) {
        stars.forEach((star, i) => {
            if (i < rating) {
                star.classList.add('selected');
            } else {
                star.classList.remove('selected');
            }
        });
    }

 
});


