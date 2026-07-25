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