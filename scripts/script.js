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

// Filtro de receitas
let tipo = 'todas';
let dificuldade = 'todas';

const receitaCards = document.querySelectorAll('#receitas-grid article');
const filtroBtn = document.querySelectorAll('.filtro');

function aplicarFiltro() {
    receitaCards.forEach((card) => {
        const bateTipo = card.dataset.tipo === tipo || tipo === 'todas';
        const bateDificuldade = card.dataset.dificuldade === dificuldade || dificuldade === 'todas';

        if (bateTipo && bateDificuldade) {
            card.classList.remove('escondido');
        } else {
            card.classList.add('escondido');
        }
    });
}

filtroBtn.forEach((btn) => {
    btn.addEventListener('click', () => {
        const jaEstavaAtivo = btn.classList.contains('ativo');
        const grupo = btn.closest('fieldset');
        const botoesDoGrupo = grupo.querySelectorAll('.filtro');
        
        botoesDoGrupo.forEach((b) => {
            b.classList.remove('ativo');
        })

        if (!jaEstavaAtivo) {
            btn.classList.add('ativo');
    
            if (btn.dataset.tipo) {
                tipo = btn.dataset.tipo;
            } else {
                dificuldade = btn.dataset.dificuldade;
            }
        } else {
            if (btn.dataset.tipo) {
                tipo = 'todas';
            } else {
                dificuldade = 'todas';
            }
        }
        aplicarFiltro();
    });
});

// Checklist das receitas
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
        const item = checkbox.closest('li');

        if (checkbox.checked) {
            item.classList.add('concluido');
        } else {
            item.classList.remove('concluido');
        }
    });
});

// Calculadora de porções
const inputPorcoes = document.getElementById('porcoes');
const porcaoBase = Number(inputPorcoes.value);
const ingredientes = document.querySelectorAll('span[data-qtd]');

inputPorcoes.addEventListener('input', () => {
    const porcaoDesejada = Number(inputPorcoes.value);
    const fator = porcaoDesejada / porcaoBase;

    ingredientes.forEach((span) => {
        const qtdOriginal = Number(span.dataset.qtd);
        const novaQtd = qtdOriginal * fator;
        span.textContent = novaQtd.toFixed(2);
    });
});
