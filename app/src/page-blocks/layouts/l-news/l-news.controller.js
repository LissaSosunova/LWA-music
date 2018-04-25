app.controller("l-news.controller", function($scope, $flowData, transferService) {
    
    $scope.root = $scope.root || {};
    $scope.root.dataNews = [];
    $scope.temp = {};
    $scope.root.dataNewsRender = [];
    $scope.states.activeStyle = 'All styles';

    function init() {
        $flowData.req({
            path: 'news'
        })
            .then(function success(response) {
                $scope.root.dataNews = response.data.dataNews;
                $scope.root.dataNewsRender = $scope.root.dataNews;
            });
    }
    
    init();
    
    
    $scope.root.newsRender = function (style) {
        $scope.root.dataNewsRender = [];
        $scope.root.dataNews.forEach(function(item, i){
                if (item.style.toLowerCase() == style.toLowerCase()) {
                    $scope.root.dataNewsRender.push(item);
                }
                else if (style == "All styles") {
                    $scope.root.dataNewsRender = $scope.root.dataNews;
                }
                transferService.set({name: 'currRender', data: $scope.root.dataNewsRender})
            });
    }  
    $scope.root.filterHandler = function (param) {
        $scope.states.activeStyle = param.title;
        $scope.style = param.title;
        $scope.root.newsRender($scope.style);
    } 
	$scope.showNews = function(item, arr, temp) {
                var newArr = [];
                arr.forEach((el, i) => {
                    newArr[i] = arr[i]
                });
                transferService.set({name: 'newArr', data: newArr});
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
                var newArr = transferService.get('newArr');
                newArr.forEach((el, i) =>{
                    arr[i] = newArr[i]
                });
            }
         
});