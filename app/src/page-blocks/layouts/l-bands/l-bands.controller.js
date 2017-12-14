app.controller("l-bands.controller", function($scope, $http, $state, dataBand) {

    $scope.dataBands = {};

    displayDefaultBand = function () {
        let key = "Morphine";
        $http({
            method: 'GET',
            url: 'http://localhost:5000/bands/'+ key
        })
            .then(function (response){
                $scope.dataCurrBand = response.data;
            })
    };
   
    $scope.$watch(function(){
        return dataBand.get();
    },
        function (newVal) {
            $scope.dataCurrBand = newVal; 
      });
    
   displayDefaultBand();
   

    $scope.states = {};
    $scope.states.activeItem = '';

});