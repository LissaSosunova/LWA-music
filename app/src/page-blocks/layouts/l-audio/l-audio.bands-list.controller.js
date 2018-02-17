app.controller("l-audio.bands-list.controller", function($scope, $flowData, dataBand){
    $scope.dataBands = {};
    $scope.dataCurrBand = {};
    
    function init() {
        $flowData.req({
            path: 'bands'
        })
            .then(function success(response) {
                $scope.dataBands = response.data.bandsAll;
            });
    }
    init();

    
    $scope.states = {};
    $scope.states.activeItem = 'item1';

    $scope.displayCurrBandAudio = function(item){
        let key = item.band.toLowerCase();
        $flowData.req({
            path: 'audio/'+key
        })
        .then(function renderBand(response){
            $scope.dataCurrBandAudio = response.data;
            dataBand.set($scope.dataCurrBandAudio);
            dataBand.get();
        })
        $scope.states.activeItem = item.id;
    };

	
});