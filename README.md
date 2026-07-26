# Holy Kitchen! v2 🍪

Site de receitas culinárias, reconstruído do zero como projeto pessoal de estudo em desenvolvimento web.

Esse é o "segundo capítulo" do Holy Kitchen! — a primeira versão foi feita em 2024, em HTML e CSS básicos, sem nenhuma experiência prévia em programação. Essa v2 existe pra comparar a evolução técnica entre as duas versões, aplicando boas práticas de HTML semântico, CSS moderno (variáveis, Grid, Flexbox, responsividade mobile-first) e JavaScript vanilla.

## 🔗 Sobre o projeto

- **Conceito**: hub de receitas com comunidade (envio de receitas), blog de dicas, calculadora de porções, filtro de receitas e simulação de login
- **Público**: projeto de portfólio/estudo pessoal
- **Autoria**: [Nathália de Bona](https://github.com/nathaliadebona)

## 🛠️ Tecnologias

- HTML5 semântico
- CSS3 (custom properties, Grid, Flexbox, mobile-first)
- JavaScript (vanilla, sem frameworks)
- [Font Awesome](https://fontawesome.com/) para ícones
- Google Fonts (Poppins + Nunito Sans)

## 🎨 Identidade visual

- **Paleta**: creme (`#FFF8F0`), coral (`#F2704A`), verde-sálvia (`#8A9A7E`), texto em marrom escuro (`#2B2420`)
- **Tipografia**: Poppins (títulos) + Nunito Sans (corpo de texto)
- **Estilo**: "elegante-fun" — base limpa com toques orgânicos (bordas assimétricas, divisores ondulados)

## 📄 Páginas

- **Início** — hero com carrossel, destaques da semana, chamadas do blog
- **Publique sua Receita** — formulário de envio com validação customizada
- **Receitas** — hub com filtro (tipo + dificuldade) e 6 receitas individuais, cada uma com checklist de ingredientes/preparo, calculadora de porções e comparador de medidas
- **Blog** — hub com 4 dicas (Está com Pressa?, Piquenique, Cozinhando para Uma ou Duas Pessoas, Como Organizar sua Despensa e Geladeira)
- **Login** — formulário simulado (sem back-end real)

## ⚙️ Funcionalidades JavaScript

- Menu hambúrguer (mobile) com fechamento ao clicar fora
- Botão "voltar ao topo"
- Carrossel automático no hero, com bolinhas de navegação
- Filtro de receitas combinando tipo e dificuldade
- Checklist interativo de ingredientes e modo de preparo
- Calculadora de porções com recálculo proporcional dos ingredientes
- Modal (`<dialog>`) do comparador de medidas
- Validação customizada de formulários (Publicar Receita e Login)

## 📁 Estrutura de pastas

```
holy-kitchen-v2/
├── index.html
├── receitas.html
├── blog.html
├── publique.html
├── login.html
├── receitas/
│   └── (6 páginas de receita individual)
├── blog/
│   └── (4 páginas de dica individual)
├── estilos/
│   ├── global.css
│   ├── inicio.css
│   ├── receitas.css
│   ├── receita.css
│   ├── blog.css
│   ├── dica.css
│   ├── publique.css
│   └── login.css
├── scripts/
│   └── script.js
└── imagens/
```

## 🚀 Como visualizar

1. Clona o repositório
2. Abre a pasta no VS Code
3. Usa a extensão **Live Server** pra rodar `index.html`

Não requer instalação de dependências — é tudo vanilla.

## 📝 Sobre a v1

A versão original (2024) está disponível como referência de comparação, feita em HTML/CSS básico, sem JavaScript.

---

Feito com carinho por [Nathália de Bona](https://github.com/nathaliadebona).
