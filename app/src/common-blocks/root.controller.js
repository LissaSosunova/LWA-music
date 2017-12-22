app.controller("root.controller", function($scope, $http) {
    
    $scope.dataMenu = {};
    
    $scope.dataPoint = {
        list: [],
        actions: [
            function(){
                alert("About Project");
            },
            function(){
                alert("Project Team");
            },
            function(){
                alert("Contacts");
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