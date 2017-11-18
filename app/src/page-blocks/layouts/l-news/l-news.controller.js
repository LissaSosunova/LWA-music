app.controller("l-news.controller", function($scope, $http){

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
	
});