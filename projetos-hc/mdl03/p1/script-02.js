function mudafundo(){
    let urlimg = document.querySelector('input#inp2')

    if (urlimg.value.length==0){
        document.querySelector('section#bf02').style.backgroundImage = `url('Imagens/pattern003.png')`
    } else{
        document.querySelector('section#bf02').style.backgroundImage = `url('${urlimg.value}')`
    }
}