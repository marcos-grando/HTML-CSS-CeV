document.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll(".codeTextarea");
    const form = document.querySelector('form[action="others/inexistente.php"]');
    const inputs = form.querySelectorAll('input[required]');
    const resetButton = form.querySelector('input[type="reset"]');

    // Remove espaços em branco no início de cada linha
    textareas.forEach(function(textarea) {
        const text = textarea.value;
        textarea.value = text.replace(/^\s+/gm, '');
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

