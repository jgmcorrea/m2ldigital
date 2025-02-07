window.addEventListener('scroll', function () {
    const header = document.querySelector('header');

    // Quando o scroll passar de 100px
    if (window.scrollY > 100) {
        header.classList.add('fixed');
    } else {
        header.classList.remove('fixed');
    }
});
