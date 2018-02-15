app.controller("l-video.bands-list.controller", function($scope, $flowData, dataBand){
    
    $scope.dataBands = {};
    $scope.dataCurrBandVideo = {};
    $scope.states = {};
    $scope.states.activeItem = 'item1';

    function init() {
        $flowData.req({
            path: 'bands'
        })
            .then(function success(response) {
                $scope.dataBands = response.data.bandsAll;
            });
    }
    init();

    $scope.displayCurrBandVideo = function(item){
        let key = item.band.toLowerCase();
        $flowData.req({
            path: 'video/'+key
        })
        .then(function (response){
            $scope.dataCurrBandVideo = response.data;
            dataBand.set($scope.dataCurrBandVideo);
            dataBand.get();
        })
        $scope.states.activeItem = item.id;
    };
});