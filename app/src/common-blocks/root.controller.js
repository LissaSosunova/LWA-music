app.controller("root.controller", function($scope, $http) {
    
    $scope.dataMenu = {};
    
    $scope.dataPoint = {
        list: [],
        actions: [
            function(){
                console.log(111);
            },
            function(){
                console.log(222);
            },
            function(){
                console.log(333);
            }  
        ]
    };
    
        $http({
            method: 'GET',
            url: 'http://localhost:5000/menu'
        })
        .then(function success(response) {
            console.log('ответ сервера по menu');
            $scope.dataMenu = response.data.dataItems;
        });
            
        $http({
            method: 'GET',
            url: 'http://localhost:5000/point__block'
        })
        .then(function success(response) {
            console.log('ответ сервера по point__block');
            $scope.dataPoint.list = response.data.dataItems;
        });
    
});