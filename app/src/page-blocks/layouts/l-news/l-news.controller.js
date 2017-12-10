app.controller("l-news.controller", function($scope, $http) {

    $scope.dataNews = {};
    
    function init() {
        
        $http({
            method: 'GET',
            url: 'http://localhost:5000/news'
        })
            .then(function success(response) {
                console.log('ответ сервера по news',);
                $scope.dataNews = response.data.dataNews;
            });
    }

    init();
	$scope.showNews = function(item, arr) {
                newArr = [];
                arr.forEach((el, i) => {
                    newArr[i] = arr[i]
                });
                arr.splice(0, newArr.length, newArr[newArr.indexOf(item)]);
                blocks = document.querySelectorAll('.full-width');
                showAllBtn = document.querySelectorAll('.showAll');
                showAllBtn[this.$index].style.display = "block";
                curShowAllBtn = showAllBtn[this.$index];
                curBlock = blocks[this.$index];
                blocks[this.$index].classList.remove('full-width');
                button = document.querySelectorAll('.show');
                curButton = button[this.$index];
                button[this.$index].style.display = "none";
           }
           $scope.showAll = function (item, arr) {
                curBlock.classList.add('full-width');
                curButton.style.display = "block";
                curShowAllBtn.style.display = "none";
                newArr.forEach((el, i) =>{
                    arr[i] = newArr[i]
                });
            }
});