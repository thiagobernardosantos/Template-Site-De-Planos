//nav bar

function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
        menuMobile.classList.remove('open');
        document.querySelector('.icon').src = "../image/icons8-cardápio-35.png";
    } else {
        menuMobile.classList.add('open');
        document.querySelector('.icon').src = "../image/icons8-excluir-35.png";
    }
}


//lading page

const menu = document.querySelector('.menu');
const NavMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    NavMenu.classList.toggle('ativo');
})
