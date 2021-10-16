document.querySelector('.menu-hamburguer').onclick = event => {
    const menu = document.querySelector('[menu]')
    menu.classList.contains('active') ?  menu.classList.remove('active') : menu.classList.add('active')
}