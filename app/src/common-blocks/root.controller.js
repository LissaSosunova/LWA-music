app.controller("root.controller", function($scope, $flowData, $timeout, transferService) {
    $scope.root = $scope.root || {};
    $scope.dataMenu = {};
    $scope.dataFilter ={};
    $scope.states = {};
    $scope.states.activeStyle = 'All styles';
    $scope.style = 'All styles';
    $scope.dataFilterNews = [];
    $scope.dataAllNews = [];
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
        .then(function (response) {
            $scope.dataMenu = response.data.dataItems;
        });
        $flowData.req({
            path: 'point__block'
        })    
        .then(function (response) {
            $scope.dataPoint.list = response.data.dataItems;
        });
        $flowData.req({
            path: 'filter'
        })
        .then (function(response){
            $scope.dataFilter = response.data.filterItems;
        });   
          
});