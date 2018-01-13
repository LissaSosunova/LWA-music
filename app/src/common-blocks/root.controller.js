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
            $scope.dataMenu = response.data.dataItems;
        });
        $flowData.req({
            path: 'point__block'
        })    
        .then(function success(response) {
            $scope.dataPoint.list = response.data.dataItems;
        });
    
});