document.addEventListener("DOMContentLoaded", function() {
    var textareas = document.querySelectorAll(".codeTextarea");
    textareas.forEach(function(textarea) {
        var text = textarea.value;
        textarea.value = text.replace(/^\s+/gm, '');
    });
});

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

    // Atualizar o nome em tempo real
    inome.addEventListener('input', () => {
        nomeDisplay.textContent = inome.value;
    });

    // Atualizar o sexo em tempo real
    sexoRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            sexoDisplay.textContent = `Sexo: ${radio.value}`;
        });
    });

    // Atualizar a cor do perfil e da borda em tempo real
    icor.addEventListener('input', () => {
        perfilDiv.style.backgroundColor = icor.value;
        perfilBorder.style.borderColor = icor.value;
    });

    // Atualizar o humor em tempo real
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

    // Atualizar a foto do perfil em tempo real
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

    // Atualizar o esporte favorito em tempo real
    esporteRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            esporteDisplay.textContent = `Ama ${radio.value}`;
        });
    });
});
