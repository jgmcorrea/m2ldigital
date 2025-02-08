window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    const backToTopButton = document.getElementById('back-to-top');

    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        backToTopButton.style.display = 'block';
    } else {
        header.classList.remove('scrolled');
        backToTopButton.style.display = 'none';
    }
});

document.querySelectorAll('.navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Função para alternar o menu de hambúrguer
function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');
    hamburger.classList.toggle('active');
    navbar.classList.toggle('active');
}

// Função para rolar até o topo
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}