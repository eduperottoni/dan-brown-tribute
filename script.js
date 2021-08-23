//ANIMAÇÃO NO UNDERLINE DO MENU
const divUnderline = document.querySelectorAll('.underline')

function turnOnUnderline(value){
    divUnderline[value].classList.add('on')
}

function turnOffUnderline(value){
    divUnderline[value].classList.remove('on')
}