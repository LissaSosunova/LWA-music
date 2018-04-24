app.controller("l-bands.controller", function($scope, transferService, $flowData) {
    $scope.root = $scope.root || {};
    

    displayDefaultBand = function () {
        let key;
        if (!transferService.get('currBandListRender')) {
            key = "Morphine";
        }
        else {
            key = transferService.get('currBandListRender')[0].band;
        }
        
        $flowData.req({
            path: 'bands/'+key
        })
            .then(function (response){
                $scope.root.dataCurrBand = response.data;
            })
    };
   
    $scope.$watch(function(){
        return transferService.get('band');
    },
        function (newVal) {
            $scope.root.dataCurrBand = newVal; 
      });
    
   displayDefaultBand();
    

    $scope.states = {};
    $scope.states.activeItem = '';

});