document.addEventListener('DOMContentLoaded', () => {
    const inome = document.getElementById('inome');
    const sexoRadios = document.querySelectorAll('input[name="sexo"]');
    const esporteRadios = document.querySelectorAll('input[name="esporte"]');
    const icor = document.getElementById('icor');
    const ihumor = document.getElementById('ihumor');
    const ifoto = document.getElementById('ifoto');
    const nomeDisplay = document.querySelector('.humorperfil .nome');
    const sexoDisplay = document.querySelector('.humorperfil .sexo');
    const esporteDisplay = document.querySelector('.humorperfil .esporte');
    const humorDisplay = document.querySelector('.humorperfil .humor');
    const perfilDiv = document.querySelector('.idperfil');
    const perfilBorder = document.querySelector('.perfil');
    const imgPerfil = document.querySelector('.imgperfil');
    const form = document.querySelector('form[action="others/inexistente.php"]');
    const inputs = form.querySelectorAll('input[required]');
    const textareas = document.querySelectorAll(".codeTextarea");

    // Remove espaços em branco no início de cada linha
    textareas.forEach(function(textarea) {
        const text = textarea.value;
        textarea.value = text.replace(/^\s+/gm, '');
    });

    // Atualiza o nome
    inome.addEventListener('input', () => {
        nomeDisplay.textContent = inome.value;
    });

    // Atualiza o sexo
    sexoRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            sexoDisplay.textContent = `Sexo: ${radio.value}`;
        });
    });

    // Atualiza cor do perfil e da borda
    icor.addEventListener('input', () => {
        perfilDiv.style.backgroundColor = icor.value;
        perfilBorder.style.borderColor = icor.value;
    });

    // Atualiza o humor
    ihumor.addEventListener('input', () => {
        let humor;
        if (ihumor.value == 1) {
            humor = '&#128577'; // Carinha triste
        } else if (ihumor.value == 2) {
            humor = '&#128528'; // Carinha neutra
        } else if (ihumor.value == 3) {
            humor = '&#128512'; // Carinha feliz
        }
        humorDisplay.innerHTML = `Humor: ${humor}`;
    });

    // Atualiza a foto do perfil
    ifoto.addEventListener('change', () => {
        const file = ifoto.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                imgPerfil.style.backgroundImage = `url(${e.target.result})`;
            };
            reader.readAsDataURL(file);
        }
    });

    // Atualiza o esporte favorito
    esporteRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            esporteDisplay.textContent = `Ama ${radio.value}`;
        });
    });

    // Adiciona símbolo de "correto"
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Impede o envio do formulário
        
        inputs.forEach(input => {
            const checkmark = document.createElement('span');
            checkmark.innerHTML = '&#10004;'; // Símbolo de "correto"
            checkmark.style.color = 'green';
            checkmark.style.marginLeft = '10px';
            
            // Remove qualquer símbolo de "correto" existente
            const existingCheckmark = input.nextSibling;
            if (existingCheckmark && existingCheckmark.tagName === 'SPAN') {
                existingCheckmark.remove();
            }

            // Adiciona o símbolo de "correto"
            if (input.checkValidity()) {
                input.parentNode.appendChild(checkmark);
            }
        });
    });

    // Limpa os símbolos de "correto" ao clicar no botão de reset
    resetButton.addEventListener('click', () => {
        const checkmarks = form.querySelectorAll('span');
        checkmarks.forEach(checkmark => {
            checkmark.remove();
        });
    });
});
