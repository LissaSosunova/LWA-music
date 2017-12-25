/*
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
};*/