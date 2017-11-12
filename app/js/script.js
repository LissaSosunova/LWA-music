window.onload = function(){
    hmbgMenu = document.querySelector('.hmbg-logo');
    mainMenu = document.querySelector('.main-menu');
    hmbgNews = document.querySelector('.hmbg-news');
    menuNews = document.querySelector('.menu-news');
    input = document.querySelector('.search-container input');
    function clickMenu (hmbgClick, menu) {
        hmbgClick.addEventListener('click', function(event){
            menu.classList.toggle('is-active');
            event.stopPropagation();
        })
    }
    function hideMenu (menu) {
        menu.addEventListener('mouseover', function(){
            menu.addEventListener('click', function(){
                menu.classList.remove('is-active');
            })
        });
    };
    function focusInput (input) {
        input.addEventListener('click', function(event){
            event.stopPropagation();
        })
    }
    function hideMenuClickDoc (menu) {
        menu.addEventListener('mouseout', function(e){
            document.addEventListener('click', function(){
                if (menu.classList.contains('is-active')) {
                    menu.classList.remove('is-active');
                }
            })
        })
    }
    clickMenu(hmbgMenu, mainMenu);
    clickMenu(hmbgNews, menuNews);
    hideMenu(mainMenu);
    hideMenu(menuNews);
    hideMenuClickDoc(mainMenu);
    hideMenuClickDoc(menuNews);
    focusInput(input);
}