window.onload = function(){
    var dotBtn = document.querySelector(".project-info__btn");
    var dropdown = document.querySelector(".project-info__data");
    var item = document.querySelectorAll(".project-info__data-item");
    
    dotBtn.addEventListener("click", function(e){
        showMenu();
        clickBehindMenu(dropdown, function (){
            hideMenu();
        });
    });
    for (var i = 0; i < item.length; i++){
        item[i].addEventListener("click", hideMenu);
    }
    function showMenu(){
        dropdown.style.display = "block";
    }
    function hideMenu(){
        dropdown.style.display = "none";
    }
    var clickBehindMenu = function(elem, func) {
        var behindMenu = function (e) {
            if (e.target !== elem) {
                document.removeEventListener("click", behindMenu, true);
                func();
            }
        }
        document.addEventListener("click", behindMenu, true);
    }



    var hmbgMenu = document.querySelector('.hmbg-logo');
    var mainMenu = document.querySelector('.main-menu');
    var hmbgNews = document.querySelector('.hmbg-news');
    var menuNews = document.querySelector('.menu-news');
    var input = document.querySelector('.search-container input');
    var mainMenuUnderlined = document.querySelectorAll('.main-menu li a');
    var menuNewsUnderlined = document.querySelectorAll('.menu-news .underlined');
    function clickMenu (hmbgClick, menu) {
        hmbgClick.addEventListener('click', function(event){
            menu.classList.toggle('is-active');
            event.stopPropagation();
            if (menuNews.classList.contains('is-active') && hmbgClick == hmbgMenu) {
                menuNews.classList.remove('is-active');
            }
        })
    }
    function hideMenuMobile (menu) {
        menu.addEventListener('mouseover', function(){
            menu.addEventListener('click', clickMenuMobile)
        });
    };
    function clickMenuMobile() {
        mainMenu.classList.remove('is-active');
        menuNews.classList.remove('is-active');
    }
    function focusInput (input) {
        input.addEventListener('click', function(event){
            event.stopPropagation();
        })
    }
    function hideMenuClickDoc (menu) {
        menu.addEventListener('mouseout', function(e){
            document.addEventListener('click', docClickHideMenu)
        })
    }
    function docClickHideMenu () {
        if (mainMenu.classList.contains('is-active') || menuNews.classList.contains('is-active')) {
            mainMenu.classList.remove('is-active');
            menuNews.classList.remove('is-active');
        }
    }
    clickMenu(hmbgMenu, mainMenu);
    clickMenu(hmbgNews, menuNews);
    hideMenuMobile(mainMenu);
    hideMenuMobile(menuNews);
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
    function defaultUnderline (arr, className) {
        arr[0].classList.add(className);
    }
    defaultUnderline (mainMenuUnderlined, 'underlined');
    underline(mainMenuUnderlined, 'underlined');
};