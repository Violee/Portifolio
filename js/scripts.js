const burger = document.querySelector('#burger');
const Linha1 = document.querySelector('#Linha1');
const Linha2 = document.querySelector('#Linha2');
const Linha3 = document.querySelector('#Linha3');
const containerNav = document.querySelector('.conteiner-into-nav');
const toggleButton = document.querySelector('.nav-subtop ul button img');

burger.addEventListener('click', function() {
    containerNav.classList.toggle('show');
    Linha1.classList.toggle('active-one');
    Linha2.classList.toggle('active-two');
    Linha3.classList.toggle('active-tree');
});

document.addEventListener('DOMContentLoaded', function () {

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    document.getElementById('form-contato').addEventListener('submit', function (e) {
        e.preventDefault();

        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;
        const mensagem = document.getElementById('mensagem').value;

        if (nome === '' || email === '' || mensagem === '') {
            alert('Por favor, preencha todos os campos.');
            return;
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            alert('Por favor, insira um e-mail válido.');
            return;
        }

        alert('Mensagem enviada com sucesso!');
        this.reset();
    });
    
    const themeToggleButton = document.querySelector('#chance-dark-light');
    themeToggleButton.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
        const img = this.querySelector('img');
        if (document.body.classList.contains('dark-mode')) {
            img.src = './assets/icons/moon.png';
        } else {
            img.src = './assets/icons/sun.png';
        }
    });
});
