app.controller("l-video.controller", function($scope, dataBand, $flowData){
    
    displayDefaultBandVideo = function () {
        let key = "Morphine";
        $flowData.req({
            path: 'video/'+key
        })
            .then(function (response){
                $scope.dataCurrBandVideo = response.data;
            })
    };
    displayDefaultBandVideo();

    $scope.$watch(function(){
        return dataBand.get();
    },
        function (newVal) {
            $scope.dataCurrBandVideo = newVal;
      });
     
	
});