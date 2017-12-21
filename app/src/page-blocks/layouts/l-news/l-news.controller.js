app.controller("l-news.controller", function($scope, $http) {
    $scope.dataNews = {};
    $scope.temp = {};
    function init() {
        
        $http({
            method: 'GET',
            url: 'http://localhost:5000/news'
        })
            .then(function success(response) {
                $scope.dataNews = response.data.dataNews;
            });
    }

    init();
	$scope.showNews = function(item, arr, temp) {
                newArr = [];
                arr.forEach((el, i) => {
                    newArr[i] = arr[i]
                });
                console.log(temp);
                arr.splice(0, newArr.length, newArr[newArr.indexOf(item)]);
                var blocks = document.querySelectorAll('.full-width');
                var showAllBtn = document.querySelectorAll('.showAll');
                showAllBtn[this.$index].style.display = "block";
                temp.curShowAllBtn = showAllBtn[this.$index];
                temp.curBlock = blocks[this.$index];
                blocks[this.$index].classList.remove('full-width');
                var button = document.querySelectorAll('.show');
                temp.curButton = button[this.$index];
                button[this.$index].style.display = "none";
           }
           $scope.showAll = function (item, arr, temp) {
                temp.curBlock.classList.add('full-width');
                temp.curButton.style.display = "block";
                temp.curShowAllBtn.style.display = "none";
                newArr.forEach((el, i) =>{
                    arr[i] = newArr[i]
                });
            }
});