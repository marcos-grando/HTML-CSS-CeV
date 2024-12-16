document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('.form-div form');
    const h2 = form.querySelector('h2');
    const cadastreSe = document.querySelector('a.cadastre-se');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        updateIcon(h2);
    });

    cadastreSe.addEventListener('click', (event) => {
        event.preventDefault();
        updateIcon(cadastreSe);
    });

    function updateIcon(element) {
        let checkIcon = element.querySelector('.check-icon');
        if (checkIcon) {
            checkIcon.remove();
        }
        checkIcon = document.createElement('span');
        checkIcon.className = 'material-symbols-outlined check-icon';
        checkIcon.textContent = 'check';
        element.appendChild(checkIcon);
    }
});
