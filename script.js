//ANIMAÇÃO NO UNDERLINE DO MENU
const divUnderline = document.querySelectorAll('.underline')


function turnOnUnderline(value){
    divUnderline[value].classList.add('on')
    console.log(divUnderline[value])
}

function turnOffUnderline(value){
    divUnderline[value].classList.remove('on')
    console.log(divUnderline[value])
}