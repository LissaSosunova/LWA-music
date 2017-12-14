app.controller("root.controller", function($scope, $timeout) {
    
	$scope.$on("bandDataEvent", function(event, data){
        
		console.log(data); 
		
		$timeout(function(){
			$scope.$broadcast("bandDataEvent2", data);
		});
	});
    
});