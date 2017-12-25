app.controller("l-bands.controller", function($scope, dataBand, $flowData) {

    $scope.dataBands = {};

    displayDefaultBand = function () {
        let key = "Morphine";
        $flowData.req({
            path: 'bands/'+key
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