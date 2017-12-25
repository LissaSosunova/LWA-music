app.controller("l-one-band.controller", function($scope, $flowData) {

    $scope.dataBands = {};
    $scope.currBand = {};

    function init() {
        $flowData.req({
            path: 'bands'
        })
            .then(function success(response) {
                $scope.dataBands = response.data.bandsAll;
            });
    }
    init();

    $scope.displayCurrBand = function(item){
        let key = item.band.toLowerCase();
        console.log(key);
        $flowData.req(
            {
                path: 'bands/'+key
            })
            .then(function renderBand(response){
                $scope.currBand = response.data;
                function renderBand(data) {
                    console.log(data);
                    $state.go(
                        'oneBand',
                        { data: data });
                }
                renderBand($scope.currBand);
            })
    };

    $scope.states = {};
    $scope.states.activeItem = '';

});