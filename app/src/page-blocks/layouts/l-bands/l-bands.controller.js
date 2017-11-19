app.controller("l-bands.controller", function($scope, $http) {
    
    $scope.dataBands = {};
    
    function init() {
        
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands'
        })
            .then(function success(response) {
                // console.log('ответ сервера по bands', response);
                $scope.dataBands = response.data.bandsAll;
                for(let i=0; i<$scope.dataBands.length; i++){
                    console.log($scope.dataBands[i].band, 'состав: ', $scope.dataBands[i].cast);
                     
                    displayLastBand($scope.dataBands);
                }
            });
           
    }
    
    init();
      
      
      
	$scope.$on("bandDataEvent2", function(event, data){console.log(data);
        
		$scope.currentBand = data;
        console.log($scope.currentBand);
        
        $scope.currentMembers = data.band.cast;
        console.log($scope.currentMembers);
	});
    
    
    
    function displayLastBand(data) {
         
        $scope.currentBand = [];
        $scope.currentBand.push(data[0]);
        console.log( $scope.currentBand );
                        
        $scope.currentMembers = data[0].cast;
        console.log( $scope.currentMembers );
    }

});