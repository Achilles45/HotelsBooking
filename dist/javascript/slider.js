const toggleIcon = document.querySelector('.navbar-toggler');
const navbar = document.querySelector('.header__list--items');
toggleIcon.addEventListener('click', function(e){
    e.preventDefault();
    navbar.classList.toggle('show-nav')
})