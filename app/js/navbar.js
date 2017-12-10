//window.onload = function(){
    hmbgMenu = document.querySelector('.hmbg-logo');
    mainMenu = document.querySelector('.main-menu');
    hmbgNews = document.querySelector('.hmbg-news');
    menuNews = document.querySelector('.menu-news');
    input = document.querySelector('.search-container input');
    mainMenuUnderlined = document.querySelectorAll('.main-menu li a');
    menuNewsUnderlined = document.querySelectorAll('.menu-news .underlined');
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
    function underline (arr, className) {
        var deleteLine = arr[0];
        var newArr = new Array();
        for (var j=0; j<arr.length; j++){
            newArr[j]=arr[j]
        }
        for (var i=0; i<newArr.length; i++){
            newArr[i].addEventListener('click', function(){
                deleteLine.classList.remove(className);
                this.classList.add(className);
                deleteLine = newArr[newArr.indexOf(this)];
            })
        }
    }
    underline(mainMenuUnderlined, 'underlined');
    underline(menuNewsUnderlined, 'active');
//}