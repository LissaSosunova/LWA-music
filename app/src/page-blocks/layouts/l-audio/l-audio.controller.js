app.controller("l-audio.controller", function($scope, transferService, $flowData){
    $scope.root = $scope.root || {};
    $scope.states.activeStyle = 'All styles';	
    displayDefaultBand = function () {
        let key = "Morphine";
        $flowData.req({
            path: 'audio/'+key
        })
            .then(function (response){
                $scope.dataCurrBandAudio = response.data;
            })
    };
    displayDefaultBand();
    $scope.$watch(function(){
        return transferService.get('audio');
    },
        function (newVal) {
            $scope.dataCurrBandAudio = newVal;
      });
     
        
});