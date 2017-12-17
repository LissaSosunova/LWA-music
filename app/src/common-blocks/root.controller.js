app.controller("root.controller", function($scope, $http) {
    
	// $scope.$on("bandDataEvent", function(event, data){
        
		// console.log(data); 
		
		// $timeout(function(){
			// $scope.$broadcast("bandDataEvent2", data);
		// });
	// });
    
    
    
    $scope.dataMenu = {};
    
    (function init() {
        
        $http({
            method: 'GET',
            url: 'http://localhost:5000/menu'
        })
            .then(function success(response) {
                console.log('ответ сервера по menu');
                $scope.dataMenu = response.data.dataItems;
            });
    })();
    
});