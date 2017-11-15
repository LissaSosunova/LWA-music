window.onload = function(){
    hmbgMenu = document.querySelector('.hmbg-logo');
    mainMenu = document.querySelector('.main-menu');
    hmbgNews = document.querySelector('.hmbg-news');
    menuNews = document.querySelector('.menu-news');
    function clickMenu (hmbgClick, menu) {
        hmbgClick.addEventListener('click', function(){
            menu.classList.toggle('is-active');
        })
    }
    clickMenu(hmbgMenu, mainMenu);
    clickMenu(hmbgNews, menuNews);
}