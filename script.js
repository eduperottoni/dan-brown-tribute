//ANIMAÇÃO NO UNDERLINE DO MENU
const menuAnchor = document.querySelectorAll('nav#menu ul li a')
const divUnderline = document.querySelectorAll('.underline')

function turnOnUnderline(value){
    divUnderline[value].classList.add('on')
}

function turnOffUnderline(value){
    divUnderline[value].classList.remove('on')
}