app.controller("root.controller", function($scope, $http) {
     $scope.dataMenu = {};

    (function init() {
        
        $http({
            method: 'GET',
            url: 'http://localhost:5000/menu'
        })
            .then(function success(response) {
                $scope.dataMenu = response.data.dataItems;
            });
    })();
    
});