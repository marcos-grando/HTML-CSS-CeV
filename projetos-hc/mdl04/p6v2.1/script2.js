document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.button');
    const button1 = document.getElementById('button1');
    const modulos = document.querySelectorAll('.modulos');
    const opcao1Modulos = document.querySelector('.opcao1-modulos');
    const opcao2Modulos = document.querySelector('.opcao2-modulos');
    const iframe = document.querySelector('iframe[name="conteudo"]');
    const caixaurl = document.querySelector('.caixaurl'); // Seleciona o contêiner da caixaurl

    caixaurl.style.display = 'none';

    iframe.src = 'page-inicial/pageinicial.html';

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            buttons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
    
            const target = this.getAttribute('data-target');
            if (target === 'opcao1-modulos') {
                opcao1Modulos.classList.add('active');
                // Não altera a visibilidade da caixaurl
            } else if (target === 'opcao2-modulos') {
                opcao1Modulos.classList.remove('active');
                opcao2Modulos.classList.add('active');
            } else {
                iframe.src = target;
                opcao1Modulos.classList.remove('active');
                opcao2Modulos.classList.remove('active');
                document.querySelectorAll('.infos, .info').forEach(info => info.style.display = 'none'); // Recolher as infos
                caixaurl.style.display = 'block'; // Garante que caixaurl esteja visível
            }
    
            // Recolher as infos ao clicar em button1
            if (this === button1) {
                document.querySelectorAll('.infos, .info').forEach(info => info.style.display = 'none');
                caixaurl.style.display = 'none'; // Esconde caixaurl
            }
        });
    });

    function toggleInfos(modulo) {
        const info = modulo.querySelector('.infos, .info');
        if (info) {
            info.style.display = info.style.display === 'block' ? 'none' : 'block';
        }
    }

    modulos.forEach(modulo => {
        modulo.addEventListener('click', function(event) {
            if (event.target.closest('.infos a')) {
                return;
            }

            document.querySelectorAll('.infos').forEach(info => {
                if (info !== this.querySelector('.infos')) {
                    info.style.display = 'none';
                }
            });

            toggleInfos(this);
        });
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.modulos, .info')) {
            document.querySelectorAll('.infos, .info').forEach(info => {
                info.style.display = 'none';
            });
        }
    });

    document.querySelectorAll('.infos a, .info a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Previne o comportamento padrão do link
            const url = this.href;
            iframe.src = url; // Atualiza o src do iframe
            caixaurl.querySelector('a').href = url; // Atualiza o href do link dentro da caixaurl
            caixaurl.querySelector('a').textContent = `Visite o link: ${url}`; // Atualiza o texto do link dentro da caixaurl
            caixaurl.style.display = 'block'; // Garante que caixaurl esteja visível
        });
    });

    button1.addEventListener('click', function() {
        caixaurl.style.display = 'none'; // Garante que caixaurl esteja oculta ao clicar em button1
    });

});
