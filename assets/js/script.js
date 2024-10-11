// script.js
document.addEventListener('DOMContentLoaded', () => {
    // Função para manipular eventos do menu
    function initMenu(){
        const iconeMenu = document.getElementById('iconeMenu');
        const menuLateral = document.getElementById('menuLateral');
        const fecharMenu = document.getElementById('fecharMenu');
        const campoPesquisa = document.getElementById('campoPesquisa');

        // Evento para abrir/fechar o menu lateral ao clicar no ícone do menu
        iconeMenu.addEventListener('click', (event) => {
            event.preventDefault(); // Evitar o comportamento padrão do link
            menuLateral.classList.toggle('ativo'); // Alternar a classe 'ativo'
        });

        // Evento para fechar o menu lateral ao clicar no botão fechar
        fecharMenu.addEventListener('click', () => {
            menuLateral.classList.remove('ativo'); // Remover a classe 'ativo'
        });

        // Adiciona um ouvinte de evento para o item "Pesquisar"
        document.querySelector('#menuLateral a[href="#barraPesquisa"]').addEventListener('click', function(event) {
            event.preventDefault(); // Evita o comportamento padrão do link
            campoPesquisa.focus(); // Define o foco no campo de pesquisa
            menuLateral.classList.remove('ativo'); // Fecha o menu lateral
        });
    }


    // Inicialização do carrossel
    function initCarousel(){
        // Código do carrossel
        const slides = document.querySelectorAll('.slide');
        const nextButton = document.querySelector('.next');
        const prevButton = document.querySelector('.prev');
        let currentIndex = 0;

        function updateCarousel() {
            slides.forEach((slide, index) => {
                slide.classList.remove('active'); // Remove a classe active de todos os slides
                if (index === currentIndex) {
                    slide.classList.add('active'); // Adiciona a classe active ao slide atual
                }
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length; // Avança para o próximo slide
            updateCarousel();
        }

        function prevSlide() {
            currentIndex = (currentIndex - 1 + slides.length) % slides.length; // Volta para o slide anterior
            updateCarousel();
        }

        // Configura os eventos dos botões
        nextButton.addEventListener('click', nextSlide);
        prevButton.addEventListener('click', prevSlide);

        // Mudar de slide automaticamente a cada 6 segundos
        setInterval(nextSlide, 6000); // Troca de slide a cada 6 segundos

        // Atualiza o carrossel inicialmente
        updateCarousel();
    }


    // Inicialização do chat WhatsApp
    function initChat(){
        // Captura o botão do WhatsApp e a caixa de chat
        const botaoWhatsapp = document.getElementById("botaoWhatsapp");
        const caixaChat = document.getElementById("caixaChat");
        const fecharChat = document.getElementById("fecharChat");

        // Inicializa a variável para controlar o estado da caixa de chat
        let chatAberto = false;

        // Função para alternar a exibição da caixa de chat
        botaoWhatsapp.addEventListener("click", function() {
            if (chatAberto) {
                caixaChat.style.display = "none"; // Fecha a caixa de chat
                chatAberto = false; // Atualiza o estado
            } else {
                caixaChat.style.display = "flex"; // Abre a caixa de chat
                chatAberto = true; // Atualiza o estado
            }
        });

        // Quando o botão de fechar for clicado, esconde a caixa de diálogo
        fecharChat.addEventListener("click", function() {
            caixaChat.style.display = "none"; // Fecha a caixa de chat
            chatAberto = false; // Atualiza o estado
        });
    }


    // Inicializando todos os módulos
    function init() {
        initMenu();
        initCarousel();
        initChat();
    }

    // Chamar a função principal
    init();
});
