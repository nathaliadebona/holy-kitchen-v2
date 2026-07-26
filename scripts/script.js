// Menu hamburguer
const menuBtn = document.querySelector('[aria-label="Menu"]');
const menuList = document.querySelector('#menu ul');
const menu = document.getElementById('menu');

if (menuBtn) {
    menuBtn.addEventListener('click', () => {
        menuList.classList.toggle('ativo');
    });

    document.addEventListener('click', (event) => {
        if (!menu.contains(event.target)) {
            menuList.classList.remove('ativo');
        }
    });
}

// Botão voltar ao topo
const topoBtn = document.querySelector('.btn-topo');

if (topoBtn) {
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
    });
}

// Carrossel do hero
const heroSlides = document.querySelectorAll('#hero article');
const heroDots = document.querySelectorAll('.dot');

if (heroSlides.length > 0) {
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
}

// Filtro de receitas
const receitaCards = document.querySelectorAll('#receitas-grid article');
const filtroBtn = document.querySelectorAll('.filtro');

if (filtroBtn.length > 0) {
    let tipo = 'todas';
    let dificuldade = 'todas';

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
            });

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
}

// Checklist das receitas
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

if (checkboxes.length > 0) {
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
}

// Calculadora de porções
const inputPorcoes = document.getElementById('porcoes');
const ingredientes = document.querySelectorAll('span[data-qtd]');

if (inputPorcoes) {
    const porcaoBase = Number(inputPorcoes.value);

    inputPorcoes.addEventListener('input', () => {
        const porcaoDesejada = Number(inputPorcoes.value);
        const fator = porcaoDesejada / porcaoBase;

        ingredientes.forEach((span) => {
            const qtdOriginal = Number(span.dataset.qtd);
            const novaQtd = qtdOriginal * fator;

            span.textContent = novaQtd.toFixed(2);
        });
    });
}

// Modal do comparador de medidas
const modal = document.getElementById('modal-medidas');
const modalBtn = document.querySelector('.comparador button');
const modalFechar = document.querySelector('#modal-medidas button');

if (modal) {
    modalBtn.addEventListener('click', () => {
        modal.showModal();
    });

    modalFechar.addEventListener('click', () => {
        modal.close();
    });
}

// Página de login
const cadastrarBtn = document.getElementById('cadastrar-btn');
const esqueceuBtn = document.getElementById('esqueceu-btn');
const loginForm = document.querySelector('form');

if (cadastrarBtn) {
    cadastrarBtn.addEventListener('click', () => {
        alert('Ainda não temos cadastro por aqui — esse é só um projeto de estudos!');
    });

    esqueceuBtn.addEventListener('click', () => {
        alert('Recuperação de senha? Essa também é só de brincadeirinha por aqui 😅')
    });

    loginForm.addEventListener('submit', (event) => {
    event.preventDefault();
        alert('Login de demonstração — essa é só uma simulação! Mas fica à vontade pra continuar explorando o site 🍪');
    });
};


