function calculateTotal() {
    var quantity = parseFloat(document.getElementById('quantity').value) || 0;
    var price = parseFloat(document.getElementById('price').value) || 0;
    var discount = parseFloat(document.getElementById('discount').value) || 0;

    var total = quantity * price * (1 - discount / 100);
    document.getElementById('totalOutput').textContent = total.toFixed(2);
}

document.addEventListener('DOMContentLoaded', () => {
    const textareas = document.querySelectorAll(".codeTextarea");
    const form = document.querySelector('form[action="others/inexistente.php"]');
    const inputs = document.querySelectorAll('input[required]');
    const resetButton = document.querySelector('input[type="reset"]');

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

    // Atualiza o total
    document.getElementById('quantity').addEventListener('input', calculateTotal);
    document.getElementById('price').addEventListener('input', calculateTotal);
    document.getElementById('discount').addEventListener('input', calculateTotal);
});
