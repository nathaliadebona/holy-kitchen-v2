// Menu hamburguer
const menuBtn = document.querySelector('[aria-label="Menu"]');
const menuList = document.querySelector('#menu ul');
const menu = document.getElementById('menu');

menuBtn.addEventListener('click', () => {
    menuList.classList.toggle('ativo');
});

document.addEventListener('click', (event) => {
    if (!menu.contains(event.target)) {
        menuList.classList.remove('ativo');
    }
});

// Botão voltar ao topo
const topoBtn = document.querySelector('.btn-topo');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        topoBtn.classList.add('visivel');
    } else {
        topoBtn.classList.remove('visivel');
    }
});

topoBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

// Carrossel do hero
const heroSlides = document.querySelectorAll('#hero article');
const heroDots = document.querySelectorAll('.dot')
let slideAtual = 0;

function trocarSlide() {
    heroSlides[slideAtual].classList.remove('ativo');
    heroDots[slideAtual].classList.remove('ativo');
    slideAtual = (slideAtual + 1) % heroSlides.length;
    heroSlides[slideAtual].classList.add('ativo');
    heroDots[slideAtual].classList.add('ativo');
}
setInterval(trocarSlide, 5000);

heroDots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        heroSlides[slideAtual].classList.remove('ativo');
        heroDots[slideAtual].classList.remove('ativo');
        slideAtual = index;
        heroSlides[slideAtual].classList.add('ativo');
        heroDots[slideAtual].classList.add('ativo');
    });
});

