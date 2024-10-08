// script.js
document.addEventListener('DOMContentLoaded', () => {
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
});
