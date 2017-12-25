app.controller("root.controller", function($scope, $flowData) {
    
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
        $flowData.req({
            path: 'menu'
        })
        .then(function success(response) {
            console.log('ответ сервера по menu');
            $scope.dataMenu = response.data.dataItems;
        });
        $flowData.req({
            path: 'point__block'
        })    
        .then(function success(response) {
            console.log('ответ сервера по point__block');
            $scope.dataPoint.list = response.data.dataItems;
        });
    
});