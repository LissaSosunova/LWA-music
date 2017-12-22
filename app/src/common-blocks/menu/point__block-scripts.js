window.onload = function(){
    
    var dotBtn = document.querySelector(".project-info__btn");
    var dropdown = document.querySelector(".project-info__data");
    var item = document.querySelectorAll(".project-info__data-item");
    
    dotBtn.onclick = function() {
        dropdown.style.display = "block";
    }
    for (var i = 0; i < item.length; i++){
        item[i].addEventListener('click', hideMenu);
    }
    function hideMenu() {
        dropdown.style.display = "none";
    }
 
};