window.onload = function(){
    var hmbgMenu = document.querySelector('.hmbg');
    var menu = document.querySelector('.menu');
    hmbgMenu.addEventListener('click', function(){
        menu.classList.toggle('is-active');
    })
}