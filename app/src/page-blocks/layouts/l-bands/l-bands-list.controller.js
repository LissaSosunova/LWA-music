app.controller("l-bands-list.controller", function($scope, $flowData, dataBand) {

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

    $scope.displayCurrBand = function(item){
        let key = item.band.toLowerCase();
        $flowData.req({
            path: 'bands/'+key
        })
        .then(function renderBand(response){
            $scope.dataCurrBand = response.data;
            dataBand.set($scope.dataCurrBand);
            dataBand.get();
        })
        $scope.states.activeItem = item.id;
    };
    
});