document.addEventListener('DOMContentLoaded', function() {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('#navbarNav');

    navbarToggler.addEventListener('click', function() {
        navbarCollapse.classList.toggle('show');
    });

    var backToTopButton = document.getElementById('back-to-top');

    backToTopButton.addEventListener('click', function(event) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});