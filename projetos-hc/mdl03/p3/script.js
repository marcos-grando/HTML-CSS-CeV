
/* 
    Após muitas tentativas descartadas consegui chegar nessa versão definitiva
    com ajuda de um comentário do user 'hkotsubo' em stackoverflow(Br) 
*/

const result = document.querySelector('#result');

function valor(inputid) {
    const valorxy = document.querySelector(inputid);
    const xy = valorxy.value.length==0? -50:valorxy.value;
    return xy;
}

function mudar() {
    let x = valor('#valorx');
    let y = valor('#valory');
    result.innerHTML = `(-)⬅️ (+)➡️: ${x}% | (-)⬆️ (+)⬇️: ${y}%`
    document.querySelector('#conteudo').style.transform = `translate(${x}%, ${y}%)`;
}

for (const mover of document.querySelectorAll('.mover')) {
    mover.addEventListener('change', mudar);
}
