app.controller("l-audio.controller", function($scope, dataBand, $flowData){
		
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
        return dataBand.get();
    },
        function (newVal) {
            $scope.dataCurrBandAudio = newVal;
      });
     
        
});