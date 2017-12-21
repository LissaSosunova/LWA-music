app.controller("l-news-vid.controller", function($scope, $http) {

    $scope.dataNews = {};
    
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
	
});