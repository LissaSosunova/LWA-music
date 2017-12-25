app.controller("l-news-vid.controller", function($scope, $flowData) {

    $scope.dataNews = {};
    
    function init() {
        
        $flowData.req({
            path: 'news'
        })
            .then(function success(response) {
                $scope.dataNews = response.data.dataNews;
            });
    }

    init();
	
});