app.controller("l-video.controller", function($scope, transferService, $flowData){
    $scope.root = $scope.root || {};
    $scope.states.activeStyle = 'All styles';

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
        return transferService.get('video');
    },
        function (newVal) {
            $scope.dataCurrBandVideo = newVal;
      });
      
	
});