
/* Alguns scripts errados feitos enquanto aprendia/tentava fazer esse 'projeto' */


/* 
    Essas foram as tentativas até chegar no resultado bem sucedido. 
    Além os erros "bestas", também acabei errando ao tentar trazer dois valores 
    para movimentação de X e Y. Decidi guardar essas tentativas por sentir uma certa
    evolução enquanto tentava, mesmo que o resultado final ainda tenha tido uma 
    referência externa (principalmente no uso de um for..of, que não pensei em usar).
*/


/* --> Primeira versão (descartada) <--
const valorx = document.querySelector('input#valorx')

valorx.addEventListener('change', function(){
    const valorx = document.querySelector('#valorx')
    if (valorx.value.length==0){
        const x = -50;
    } else {
        const x = valorx.value;
    }
    window.alert(valorx + x)
    
    const valory = document.querySelector('#valory')
    if (valory.value.length==0){
        const y =-50;
    } else {
        const y = valory.value;
    }
    document.querySelector('#conteudo').style.transform = `translate(${x}%, ${y}%)`
    let result = document.querySelector('h2#result')
    result.innerHTML = `${x} e ${y}`
})
*/


/*  --> Segunda versão (descartada) <--
const valorx = document.querySelector('input#valorx')

valorx.addEventListener('change', function(){
    const valorx = document.querySelector('#valorx');
    const x = valorx.value.length==0? -50:valorx.value;

    const valory = document.querySelector('#valory');
    const y = valory.value.length==0? -50:valory.value;
    window.alert(x + ' / ' + y);

    document.querySelector('#conteudo').style.transform = `translate(${x}%, ${y}%)`
});
*/


/*   --> Terceira versão (descartada) <--
const mover = document.querySelector('.mover')

mover.addEventListener('change', function(){
    result = document.querySelector('#result')
    function valorx(){
        const valorx = document.querySelector('#valorx');
        const x = valorx.value.length==0? -50:valorx.value;
        return x
    }
    function valory(){
        const valory = document.querySelector('#valory');
        const y = valory.value.length==0? -50:valory.value;
        return y
    }
    let x = valorx()
    let y = valory()
    result.innerHTML = x + ' / ' + y
    document.querySelector('#conteudo').style.transform = `translate(${x}%, ${y}%)`
});
*/


/*   --> Quarta versão (descartada) <--
result = document.querySelector('#result')
const moverx = document.querySelector('#valorx')
const movery = document.querySelector('#valory')

let x = moverx.addEventListener('change', function(){
    const valorx = document.querySelector('#valorx');
    const x = valorx.value.length==0? -50:valorx.value;
    return x
});

let y = movery.addEventListener('change', function ay(){
    const valory = document.querySelector('#valory');
    const y = valory.value.length==0? -50:valory.value;
    return y
});

result.innerHTML = x + ' / ' + y
document.querySelector('#conteudo').style.transform = `translate(${x}%, ${y}%)`
*/


/*  --> Quinta versão (descartada) <--
result = document.querySelector('#result')
const moverx = document.querySelector('#valorx')
const movery = document.querySelector('#valory')

function valorx(){
    const valorx = document.querySelector('#valorx');
    const x = valorx.value.length==0? -50:valorx.value;
    return x
}
function valory(){
    const valory = document.querySelector('#valory');
    const y = valory.value.length==0? -50:valory.value;
    return y
}
let x = valorx()
let y = valory()

result.innerHTML = x + ' / ' + y
document.querySelector('#conteudo').style.transform = `translate(${x}%, ${y}%)`
*/


/*  --> Sexta versão (descartada) <--
const moverx = document.querySelector('#valorx')
const movery = document.querySelector('#valory')

function valorx(){
    result = document.querySelector('#result')
    const valorx = document.querySelector('#valorx');
    const x = valorx.value.length==0? -50:valorx.value;
    document.querySelector('#conteudo').style.transform = `translateX(${x}%)`
    result.innerHTML = x
}
function valory(){
    result1 = document.querySelector('#result1')
    const valory = document.querySelector('#valory');
    const y = valory.value.length==0? -50:valory.value;
    document.querySelector('#conteudo').style.transform = `translateY(${y}%)`
    result1.innerHTML = y
}
*/