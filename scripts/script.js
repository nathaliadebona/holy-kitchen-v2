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
})